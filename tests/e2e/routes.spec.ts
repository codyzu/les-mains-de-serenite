import {expect, test, type Locator} from './fixtures';

const getWhatsappMessage = async (locator: Locator) => {
  const href = await locator.getAttribute('href');

  expect(href).not.toBeNull();

  return new URL(href ?? '').searchParams.get('text');
};

const vitrineDestination =
  '/reserver-en-ligne?utm_source=vitrine&utm_medium=qr&utm_campaign=reservation';

const routes = [
  '/',
  '/en/',
  '/massages/',
  '/soins/',
  '/en/massages/',
  '/soins/maderotherapie/',
  '/en/massages/maderotherapy/',
  '/soins/drainage-lymphatique/',
  '/en/massages/lymphatic-drainage/',
  '/maderotherapie/',
  '/en/maderotherapy/',
  '/programmes/',
  '/en/programs/',
  '/programmes/ventre-leger-jambes-legeres/',
  '/en/programs/light-belly-light-legs/',
  '/programmes/cure-fusion/',
  '/en/programs/cure-fusion/',
  '/programme-ventre-leger-jambes-legeres',
  '/en/light-belly-light-legs-program',
  '/reserver',
  '/en/book',
  '/v',
  '/reserver-en-ligne',
  '/en/book-online',
  '/reserver-en-ligne/offre-decouverte',
  '/en/book-online/discovery-offer',
  '/mentions-legales',
  '/politique-de-confidentialite',
];

for (const route of routes) {
  test(`GET ${route} returns 200`, async ({request}) => {
    const response = await request.get(route);

    expect(response.status()).toBe(200);
  });
}

test('legacy French massages route redirects directly to soins', async ({
  page,
  request,
}) => {
  const response = await request.get('/massages/');
  const body = await response.text();

  expect(response.status()).toBe(200);
  expect(body).toContain(
    '<meta http-equiv="refresh" content="0; url=/soins/">',
  );
  expect(body).toContain(
    '<link rel="canonical" href="https://lesmainsdeserenite.fr/soins/">',
  );

  await page.goto('/massages/');
  await expect(page).toHaveURL('/soins/');
});

test('vitrine QR route preserves metadata and its no-JavaScript fallback', async ({
  request,
}) => {
  const response = await request.get('/v');
  const body = await response.text();

  expect(response.status()).toBe(200);
  expect(body).toContain('name="robots" content="noindex, follow"');
  expect(body).toContain('qr_redirect');
  expect(body).toContain('send_page_view: sendPageView');
  expect(body).toContain('const sendPageView = false');
  expect(body).toMatch(/transport_type:["'`]beacon["'`]/v);
  expect(body).toContain(
    'utm_source=vitrine&amp;utm_medium=qr&amp;utm_campaign=reservation',
  );
  expect(body).toContain('http-equiv="refresh"');
});

test('vitrine QR route redirects through the GA callback only once', async ({
  page,
}) => {
  let bookingNavigations = 0;

  page.on('request', (request) => {
    if (
      request.isNavigationRequest() &&
      new URL(request.url()).pathname === '/reserver-en-ligne'
    ) {
      bookingNavigations += 1;
    }
  });
  await page.addInitScript(() => {
    type AnalyticsWindow = typeof globalThis & {
      dataLayer?: {push: (...items: unknown[]) => number};
      gtag?: (...args: unknown[]) => void;
    };

    const analyticsWindow = globalThis as AnalyticsWindow;
    const mockGtag = (...args: unknown[]) => {
      if (args[0] !== 'event' || args[1] !== 'qr_redirect') {
        return;
      }

      const eventOptions = args[2] as {
        // GA4's public option name intentionally uses snake_case.
        // eslint-disable-next-line @typescript-eslint/naming-convention
        event_callback?: () => void;
      };
      const eventCallback = eventOptions.event_callback;

      if (typeof eventCallback === 'function') {
        eventCallback();
        setTimeout(eventCallback, 500);
      }
    };

    analyticsWindow.dataLayer = {
      push(...items) {
        const command = items[0] as ArrayLike<unknown>;

        if (command[0] === 'config') {
          queueMicrotask(() => {
            analyticsWindow.gtag = mockGtag;
          });
        }

        return items.length;
      },
    };
  });

  await page.goto('/v');
  await expect(page).toHaveURL(vitrineDestination);
  await page.waitForTimeout(600);
  expect(bookingNavigations).toBe(1);
});

test('vitrine QR route redirects immediately when gtag is unavailable', async ({
  page,
}) => {
  await page.addInitScript(() => {
    type AnalyticsWindow = typeof globalThis & {
      dataLayer?: {push: (...items: unknown[]) => number};
      gtag?: (...args: unknown[]) => void;
    };

    const analyticsWindow = globalThis as AnalyticsWindow;

    analyticsWindow.dataLayer = {
      push(...items) {
        const command = items[0] as ArrayLike<unknown>;

        if (command[0] === 'config') {
          queueMicrotask(() => {
            analyticsWindow.gtag = undefined;
          });
        }

        return items.length;
      },
    };
  });

  await page.goto('/v');
  await expect(page).toHaveURL(vitrineDestination);
});

test('vitrine QR route falls back when the GA callback never fires', async ({
  page,
}) => {
  await page.addInitScript(() => {
    type AnalyticsWindow = typeof globalThis & {
      dataLayer?: {push: (...items: unknown[]) => number};
      gtag?: (...args: unknown[]) => void;
    };

    const analyticsWindow = globalThis as AnalyticsWindow;

    function stalledGtag() {
      return undefined;
    }

    analyticsWindow.dataLayer = {
      push(...items) {
        const command = items[0] as ArrayLike<unknown>;

        if (command[0] === 'config') {
          queueMicrotask(() => {
            analyticsWindow.gtag = stalledGtag;
          });
        }

        return items.length;
      },
    };
  });

  await page.goto('/v');
  await expect(page).toHaveURL(vitrineDestination);
});

test('vitrine QR route replaces its browser history entry', async ({page}) => {
  await page.goto('/');
  await page.goto('/v');
  await expect(page).toHaveURL(vitrineDestination);

  await page.goBack();
  await expect(page).toHaveURL('/');
});

test('sitemap includes soins and excludes the legacy French massages URL', async ({
  request,
}) => {
  const response = await request.get('/sitemap-0.xml');
  const sitemap = await response.text();

  expect(response.status()).toBe(200);
  expect(sitemap).toContain('<loc>https://lesmainsdeserenite.fr/soins/</loc>');
  expect(sitemap).not.toContain(
    '<loc>https://lesmainsdeserenite.fr/massages/</loc>',
  );
  expect(sitemap).not.toContain('<loc>https://lesmainsdeserenite.fr/v/</loc>');
  expect(sitemap).toContain(
    '<loc>https://lesmainsdeserenite.fr/en/massages/</loc>',
  );
  expect(sitemap).toContain(
    '<loc>https://lesmainsdeserenite.fr/soins/drainage-lymphatique/</loc>',
  );
  expect(sitemap).toContain(
    '<loc>https://lesmainsdeserenite.fr/en/massages/lymphatic-drainage/</loc>',
  );
});

test('custom 404 page renders branded recovery links', async ({page}) => {
  await page.goto('/404.html');

  await expect(
    page.getByRole('heading', {
      name: 'Cette page n’existe plus ou a changé d’adresse.',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Retour à l’accueil'}),
  ).toHaveAttribute('href', '/');
  await expect(
    page.getByRole('link', {name: 'English homepage', exact: true}),
  ).toHaveAttribute('href', '/en/');
});

test('section overview pages render their main content', async ({page}) => {
  await page.goto('/soins/');

  await expect(
    page.getByRole('heading', {
      name: 'Massages et soins bien-être à Annecy',
    }),
  ).toBeVisible();
  await expect(
    page.getByText(
      'Drainage lymphatique selon la méthode Renata França, massage relaxant personnalisé et autres soins bien-être : chaque rendez-vous s’adapte à vos besoins du moment, entre légèreté, détente, relâchement et tonicité.',
    ),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Réserver un soin'}).first(),
  ).toHaveAttribute('href', '/reserver-en-ligne');
  await expect(
    page.getByRole('heading', {name: 'Des soins pensés pour vous'}),
  ).toBeVisible();
  await expect(page.getByText('Massages et soins ponctuels')).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Choisir le rituel juste'}),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Madérothérapie'}),
  ).toBeVisible();
  const treatmentCards = page.locator('#soins article');

  await expect(treatmentCards.locator('a')).toHaveCount(5);
  await expect(
    treatmentCards.getByRole('link', {name: 'En savoir plus'}),
  ).toHaveCount(2);
  await expect(
    treatmentCards.getByRole('link', {name: 'En savoir plus'}).first(),
  ).toHaveAttribute('href', '/soins/drainage-lymphatique/');
  await expect(
    treatmentCards.getByRole('link', {name: 'En savoir plus'}).last(),
  ).toHaveAttribute('href', '/soins/maderotherapie/');
  await expect(
    treatmentCards.getByRole('link', {name: 'Réserver'}),
  ).toHaveCount(3);
  await expect(
    treatmentCards
      .filter({hasText: 'Massage relaxant et personnalisé'})
      .getByRole('link', {name: 'Réserver'}),
  ).toHaveAttribute('href', '/reserver-en-ligne');
  await expect(
    page.getByRole('heading', {name: 'Vous ne savez pas quel soin choisir ?'}),
  ).toBeVisible();
  await expect(
    page.getByText('Une vraie écoute avant de commencer'),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Besoin d’un accompagnement plus régulier ?',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Réserver un soin'}).last(),
  ).toHaveAttribute('href', '/reserver-en-ligne');
  await expect(
    page.getByText('Une question avant de réserver ? Écrivez-moi sur'),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'WhatsApp'}).last(),
  ).toHaveAttribute('href', /wa\.me/v);
  await expect(
    page.getByRole('link', {name: 'Découvrir les programmes'}),
  ).toHaveAttribute('href', '/programmes/');
  await expect(page.getByText('Soin d’entretien')).toHaveCount(0);
  await expect(page.getByText('Demander un soin d’entretien')).toHaveCount(0);

  await page.goto('/programmes/');

  await expect(
    page.getByRole('heading', {name: 'Aller plus loin qu’une séance seule'}),
  ).toBeVisible();
  await expect(
    page.getByText('Des accompagnements bien-être réservés aux femmes'),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Découvrir les programmes'}).first(),
  ).toHaveAttribute('href', '#programmes');
  await expect(
    page.getByRole('heading', {name: 'Cure Fusion', exact: true}),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Découvrir la cure'}),
  ).toHaveAttribute('href', '/programmes/cure-fusion/');
  await expect(
    page.getByText(
      'Choisissez entre un programme de drainage avec accompagnement alimentaire bien-être sur 21 jours et une cure de 3 soins dont les techniques s’adaptent à chaque rendez-vous.',
    ),
  ).toBeVisible();
  await expect(
    page.getByText(
      'Drainage + accompagnement alimentaire bien-être · 21 jours',
    ),
  ).toBeVisible();
  await expect(
    page.getByText('Soins sur mesure · 3 rendez-vous'),
  ).toBeVisible();
  const cureCard = page
    .locator('#programmes article')
    .filter({hasText: 'Cure Fusion'});

  await expect(cureCard).toContainText('350 €');
  await expect(cureCard).toContainText(
    'une cure flexible dont les techniques s’adaptent à vos besoins et à vos sensations au fil des rendez-vous.',
  );
  await expect(
    page.getByRole('link', {name: 'Voir les soins'}),
  ).toHaveAttribute('href', '/soins/');
  await expect(
    page.getByText('Une question avant de choisir ? Écrivez-moi sur'),
  ).toBeVisible();
  await expect(page.getByRole('heading', {name: 'Et après ?'})).toBeVisible();
  await expect(
    page.getByText(
      'Certaines clientes choisissent de prolonger les bénéfices de leur programme grâce à un soin d’entretien ponctuel',
    ),
  ).toBeVisible();
  await expect(
    page.getByText(
      '1 h • 85 €, réservé aux clientes ayant déjà suivi un programme.',
    ),
  ).toBeVisible();
});

test('Light Belly programme CTAs start a guided WhatsApp conversation', async ({
  page,
}) => {
  await page.goto('/programmes/ventre-leger-jambes-legeres/');

  await expect(
    page.getByText(
      'Un programme structuré de 21 jours associant 5 drainages lymphatiques Renata França, un bilan, un accompagnement alimentaire bien-être et un suivi WhatsApp.',
    ),
  ).toBeVisible();
  await expect(
    page.getByText('Un guide alimentaire anti-ballonnements'),
  ).toBeVisible();
  await expect(page.getByText('Une liste de courses simplifiée')).toBeVisible();
  await expect(
    page.getByText('Un accompagnement WhatsApp pendant 21 jours', {
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByText('Valeur habituelle 470 €', {exact: true}),
  ).toBeVisible();

  const startLinks = page.getByRole('link', {
    name: 'Commencer mon accompagnement',
  });

  await expect(startLinks.first()).toHaveAttribute('href', /wa\.me/v);
  await expect(startLinks.last()).toHaveAttribute('href', /wa\.me/v);
  expect(await getWhatsappMessage(startLinks.first())).toBe(
    'Bonjour, je souhaite commencer le Programme Ventre Léger & Jambes Légères. J’aimerais savoir s’il est adapté à mes besoins.',
  );
  expect(await getWhatsappMessage(startLinks.last())).toBe(
    'Bonjour, je souhaite commencer le Programme Ventre Léger & Jambes Légères. J’aimerais savoir s’il est adapté à mes besoins.',
  );
  await expect(
    page.getByText('Une question avant de commencer ? Écrivez-moi sur'),
  ).toBeVisible();
  expect(
    await getWhatsappMessage(page.getByRole('link', {name: 'WhatsApp'}).last()),
  ).toBe(
    'Bonjour, j’ai quelques questions concernant le Programme Ventre Léger & Jambes Légères avant de me décider.',
  );
  await expect(
    page.getByRole('heading', {name: 'Après votre programme'}),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Soin d’entretien'}),
  ).toBeVisible();
  await expect(page.getByText('1 h • 85 €')).toBeVisible();
  await expect(
    page.getByText(
      'Chaque séance est adaptée à vos besoins du moment afin de prolonger les bénéfices de votre accompagnement.',
    ),
  ).toBeVisible();
  await expect(
    page.getByText(
      'Réservé aux clientes ayant déjà suivi la Cure Fusion ou le Programme Ventre Léger & Jambes Légères.',
    ),
  ).toBeVisible();

  const aftercareLink = page.getByRole('link', {
    name: 'Demander un soin d’entretien',
  });

  await expect(aftercareLink).toHaveAttribute('href', /wa\.me/v);
  expect(await getWhatsappMessage(aftercareLink)).toBe(
    'Bonjour, j’ai déjà suivi votre programme et je souhaiterais réserver un soin d’entretien.',
  );
});

test('Cure Fusion page explains the personalized package', async ({page}) => {
  await page.goto('/programmes/cure-fusion/');

  await expect(
    page.getByRole('heading', {name: 'Cure Fusion', exact: true}),
  ).toBeVisible();
  await expect(
    page.getByText('3 séances personnalisées').first(),
  ).toBeVisible();
  await expect(
    page.getByText('3 soins personnalisés', {exact: true}),
  ).toBeVisible();
  await expect(page.getByText('350 €').first()).toBeVisible();
  await expect(
    page.getByText('Accompagnement réservé exclusivement aux femmes'),
  ).toBeVisible();
  await expect(
    page.getByText('Vous n’avez pas à choisir le bon soin seule'),
  ).toBeVisible();
  await expect(
    page.getByText(
      'Vous n’avez pas à choisir seule entre drainage lymphatique, soin remodelant ou madérothérapie',
    ),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Votre accompagnement en 3 séances'}),
  ).toBeVisible();
  await expect(
    page.getByText('La troisième séance vient consolider les bienfaits'),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Vos besoins évoluent, votre accompagnement aussi',
    }),
  ).toBeVisible();
  await expect(
    page.getByText(
      '3 soins personnalisés, parfois différents d’une séance à l’autre, dont les techniques s’adaptent à vos besoins et à vos sensations au fil des rendez-vous.',
    ),
  ).toBeVisible();
  await expect(
    page
      .locator(
        'img[alt="Deux femmes marchent pieds nus au bord du lac d’Annecy"]',
      )
      .first(),
  ).toBeVisible();
  await expect(
    page
      .locator(
        'img[alt="Plumes blanches dans une ambiance douce et apaisante"]',
      )
      .first(),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Les soins pouvant être choisis',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Drainage lymphatique'}),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Soin remodelant'}),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Madérothérapie'}),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Un accompagnement attentif'}),
  ).toBeVisible();
  await expect(
    page.getByText('J’ai particulièrement apprécié l’écoute'),
  ).toBeVisible();
  await expect(page.getByText('Je suis ressortie avec')).toBeVisible();
  await expect(
    page.getByText('professionnelle et très rassurante'),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Pourquoi choisir une Cure Fusion plutôt que trois soins réservés séparément ?',
    }),
  ).toBeVisible();
  await expect(
    page.getByText('L’expérience globale est plus cohérente'),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Commencer mon accompagnement'}).last(),
  ).toHaveAttribute('href', /wa\.me/v);
  expect(
    await getWhatsappMessage(
      page.getByRole('link', {name: 'Commencer mon accompagnement'}).first(),
    ),
  ).toBe(
    'Bonjour, je souhaite commencer la Cure Fusion. J’aimerais savoir si elle est adaptée à mes besoins.',
  );
  expect(
    await getWhatsappMessage(
      page.getByRole('link', {name: 'Commencer mon accompagnement'}).last(),
    ),
  ).toBe(
    'Bonjour, je souhaite commencer la Cure Fusion. J’aimerais savoir si elle est adaptée à mes besoins.',
  );
  await expect(
    page.getByText('Une question avant de commencer ? Écrivez-moi sur'),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'WhatsApp'}).last(),
  ).toHaveAttribute('href', /wa\.me/v);
  expect(
    await getWhatsappMessage(page.getByRole('link', {name: 'WhatsApp'}).last()),
  ).toBe(
    'Bonjour, j’ai quelques questions concernant la Cure Fusion avant de me décider.',
  );
  await expect(
    page.getByRole('heading', {name: 'Après votre programme'}),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Soin d’entretien'}),
  ).toBeVisible();
  await expect(page.getByText('1 h • 85 €')).toBeVisible();
  await expect(
    page.getByText(
      'Chaque séance est adaptée à vos besoins du moment afin de prolonger les bénéfices de votre accompagnement.',
    ),
  ).toBeVisible();
  await expect(
    page.getByText(
      'Réservé aux clientes ayant déjà suivi la Cure Fusion ou le Programme Ventre Léger & Jambes Légères.',
    ),
  ).toBeVisible();

  const aftercareLink = page.getByRole('link', {
    name: 'Demander un soin d’entretien',
  });

  await expect(aftercareLink).toHaveAttribute('href', /wa\.me/v);
  expect(await getWhatsappMessage(aftercareLink)).toBe(
    'Bonjour, j’ai déjà suivi votre programme et je souhaiterais réserver un soin d’entretien.',
  );
  await expect(
    page.getByRole('link', {name: 'Voir les programmes'}),
  ).toHaveAttribute('href', '/programmes/');
  await expect(
    page.getByRole('link', {name: 'Voir les soins'}),
  ).toHaveAttribute('href', '/soins/');
  await expect(
    page.getByRole('link', {name: 'Programme Ventre Léger'}),
  ).toHaveAttribute('href', '/programmes/ventre-leger-jambes-legeres/');
});

test('online booking pages render the embedded scheduler shell @booking', async ({
  page,
}) => {
  await page.goto('/reserver-en-ligne');

  await expect(
    page.getByRole('heading', {name: 'Réservez votre soin bien-être'}),
  ).toBeVisible();
  await expect(page.locator('#cal-inline-lesmainsdeserenite')).toBeVisible();
  await expect(page.locator('[data-cal-reset]')).toHaveText(
    /←\s+Changer de durée/v,
  );
  await expect(
    page.getByRole('heading', {name: 'À savoir avant de réserver'}),
  ).toBeVisible();
  await expect(
    page.getByText(
      'Accueil privé sur rendez-vous · Une cliente à la fois · Règlement sur place en espèces',
    ),
  ).toBeVisible();
  await page.getByText('Informations pratiques', {exact: true}).click();
  await expect(
    page.getByText(
      'Merci de venir seule afin de préserver le calme et l’intimité du soin. Il n’y a pas de salle d’attente sur place. Merci également d’arriver à l’heure de votre rendez-vous. Les cartes bancaires ne sont pas acceptées.',
    ),
  ).toBeVisible();
  await expect(page.getByText(/à mon domicile/iv)).toHaveCount(0);
  await expect(
    page.getByText('Massage bien-être sans visée médicale'),
  ).toHaveCount(0);

  await page.goto('/en/book-online');

  await expect(
    page.getByRole('heading', {name: 'Book your wellness treatment'}),
  ).toBeVisible();
  await expect(page.locator('#cal-inline-lesmainsdeserenite')).toBeVisible();
  await expect(page.locator('[data-cal-reset]')).toHaveText(
    /←\s+Change duration/v,
  );
  await expect(
    page.getByRole('heading', {name: 'Before your appointment'}),
  ).toBeVisible();
  await expect(
    page.getByText(
      'Private appointment-based welcome · One client at a time · Payment on site in cash',
    ),
  ).toBeVisible();
  await page.getByText('Practical information', {exact: true}).click();
  await expect(
    page.getByText(
      'Please come alone to preserve the calm and privacy of your treatment. There is no waiting room on site. Please also arrive at the scheduled time. Bank cards are not accepted.',
    ),
  ).toBeVisible();
  await expect(
    page.getByText('Wellness massage with no medical purpose'),
  ).toHaveCount(0);
});

test('discovery-offer booking pages preserve localized promotional context @booking', async ({
  page,
}) => {
  await page.goto('/reserver-en-ligne/offre-decouverte');

  await expect(
    page.getByRole('heading', {
      name: 'Votre première séance de 45 min à 55 €',
    }),
  ).toBeVisible();
  await expect(page.getByText('Première séance', {exact: true})).toBeVisible();
  await expect(page.getByText('Réservé aux femmes')).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'À savoir avant de réserver'}),
  ).toBeVisible();
  await expect(
    page.getByText(
      'Accueil privé sur rendez-vous · Une cliente à la fois · Règlement sur place en espèces',
    ),
  ).toBeVisible();
  await expect(
    page.getByText('Informations pratiques', {exact: true}),
  ).toBeVisible();
  await expect(page.locator('[data-cal-reset]')).toHaveCount(0);
  await expect(
    page.getByRole('link', {name: 'Voir toutes les options de réservation'}),
  ).toHaveAttribute('href', '/reserver-en-ligne');

  await page.goto('/en/book-online/discovery-offer');

  await expect(
    page.getByRole('heading', {
      name: 'Your first 45-minute session for €55',
    }),
  ).toBeVisible();
  await expect(page.getByText('First session', {exact: true})).toBeVisible();
  await expect(page.getByText('For women only')).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Before your appointment'}),
  ).toBeVisible();
  await expect(
    page.getByText(
      'Private appointment-based welcome · One client at a time · Payment on site in cash',
    ),
  ).toBeVisible();
  await expect(
    page.getByText('Practical information', {exact: true}),
  ).toBeVisible();
  await expect(page.locator('[data-cal-reset]')).toHaveCount(0);
  await expect(
    page.getByRole('link', {name: 'View all booking options'}),
  ).toHaveAttribute('href', '/en/book-online');
});

test('maderotherapy discovery offers link to the embedded scheduler @booking', async ({
  page,
}) => {
  await page.goto('/soins/maderotherapie/');

  const frenchOffer = page.locator('section').filter({
    has: page.getByRole('heading', {
      name: 'Offre Découverte Soin de madérothérapie Jambes Légères',
    }),
  });

  await expect(
    frenchOffer.getByRole('link', {name: 'Réserver ce soin'}),
  ).toHaveAttribute('href', '/reserver-en-ligne');

  await page.goto('/en/massages/maderotherapy/');

  const englishOffer = page.locator('section').filter({
    has: page.getByRole('heading', {
      name: 'Light Legs Maderotherapy Treatment Discovery Offer',
    }),
  });

  await expect(
    englishOffer.getByRole('link', {name: 'Book this treatment'}),
  ).toHaveAttribute('href', '/en/book-online');
});

for (const {route, heading} of [
  {
    route: '/soins/drainage-lymphatique/',
    heading: 'Choisissez la durée de votre soin',
  },
  {
    route: '/soins/maderotherapie/',
    heading: 'Choisissez le temps qui vous convient',
  },
]) {
  test(`dedicated treatment pricing stays in sync on ${route}`, async ({
    page,
  }) => {
    await page.goto(route);

    const pricingSection = page.locator('section').filter({
      has: page.getByRole('heading', {name: heading}),
    });

    await expect(pricingSection.getByText('1 h', {exact: true})).toBeVisible();
    await expect(pricingSection.getByText('90 €', {exact: true})).toBeVisible();
    await expect(
      pricingSection.getByText('1 h 30', {exact: true}),
    ).toBeVisible();
    await expect(
      pricingSection.getByText('125 €', {exact: true}),
    ).toBeVisible();
    await expect(
      pricingSection.getByText('Durée conseillée', {exact: true}),
    ).toBeVisible();
    await expect(
      pricingSection.getByRole('link', {
        name:
          route === '/soins/drainage-lymphatique/'
            ? 'Réserver mon drainage lymphatique'
            : 'Réserver ce soin',
      }),
    ).toHaveAttribute('href', '/reserver-en-ligne');
  });
}

test('drainage page keeps booking decisions visible and consolidates secondary detail', async ({
  page,
}) => {
  await page.goto('/soins/drainage-lymphatique/');

  const sectionOrder = await page.evaluate(() => {
    const top = (selector: string) =>
      globalThis.document.querySelector(selector)?.getBoundingClientRect()
        .top ?? -1;

    return {
      suitability: top('#pour-vous'),
      pricing: top('#tarifs'),
      method: top('#tarifs + section'),
    };
  });

  expect(sectionOrder.suitability).toBeGreaterThanOrEqual(0);
  expect(sectionOrder.pricing).toBeGreaterThan(sectionOrder.suitability);
  expect(sectionOrder.method).toBeGreaterThan(sectionOrder.pricing);

  await expect(
    page.getByRole('heading', {name: 'Précautions avant de réserver'}),
  ).toBeVisible();
  await expect(
    page.getByText(
      'Ce drainage est un soin de bien-être. Il ne remplace pas un avis médical, un drainage thérapeutique, des soins infirmiers ou une prise en charge en kinésithérapie.',
    ),
  ).toBeVisible();

  const disclosures = page.locator('[data-drainage-disclosures] > details');

  await expect(disclosures).toHaveCount(4);
  expect(
    await disclosures.evaluateAll((items) =>
      items.every((item) => item instanceof HTMLDetailsElement && !item.open),
    ),
  ).toBe(true);

  const sessionSummary = page.locator('#seance > summary');

  await sessionSummary.focus();
  await sessionSummary.press('Enter');
  await expect(page.locator('#avant-apres')).toBeVisible();
  await expect(page.locator('#conseils-quotidiens')).toBeVisible();

  await page.locator('#situations-particulieres > summary').click();
  await expect(
    page.getByRole('heading', {name: 'Lipœdème', exact: true}),
  ).toBeVisible();

  await page.locator('#faq > summary').click();
  await expect(
    page.getByRole('heading', {
      name: 'Quelle durée choisir : 60 ou 90 minutes ?',
    }),
  ).toBeVisible();
});

for (const {title, anchorId} of [
  {
    title: 'Massage relaxant et personnalisé',
    anchorId: 'massage-anti-douleur',
  },
  {title: 'Soin remodelant', anchorId: 'massage-remodelant'},
  {title: 'Miracle Face', anchorId: 'massage-visage-liftant'},
]) {
  test(`homepage ${title} link lands on its stable overview card`, async ({
    page,
  }) => {
    await page.goto('/');

    await page
      .locator('#soins article')
      .filter({hasText: title})
      .getByRole('link', {name: 'Découvrir'})
      .click();

    await expect(page).toHaveURL(`/soins/#${anchorId}`);
    await expect(page.locator(`#${anchorId}`)).toBeVisible();

    const doesClearStickyHeader = await page
      .locator(`#${anchorId}`)
      .evaluate((card) => {
        const header = document.querySelector('[data-site-header]');

        return (
          header instanceof HTMLElement &&
          card.getBoundingClientRect().top >=
            header.getBoundingClientRect().bottom
        );
      });

    expect(doesClearStickyHeader).toBe(true);

    await page.goto(`/soins/#${anchorId}`);
    await expect(page.locator(`#${anchorId}`)).toBeVisible();
  });
}
