import {expect, test} from './fixtures';

test('French homepage renders the main business content and booking CTA', async ({
  page,
}) => {
  await page.goto('/');

  await expect(page).toHaveTitle(
    'Drainage lymphatique et massages à Annecy | Les Mains de Sérénité',
  );
  await expect(
    page.getByRole('heading', {
      name: 'Drainage lymphatique et massages bien-être à Annecy',
    }),
  ).toBeVisible();
  await expect(
    page.getByText('EXPERTE EN DRAINAGE LYMPHATIQUE RENATA FRANÇA'),
  ).toBeVisible();
  await expect(page.getByText('27 avenue de la Plaine')).toHaveCount(2);
  await expect(page.getByText('74000 Annecy')).toHaveCount(2);
  await expect(page.getByText('Sur rendez-vous uniquement')).toBeVisible();
  await expect(page.getByText(/environ 30 minutes de Genève/v)).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Massages et soins ponctuels : choisir le rituel juste',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Massage relaxant et personnalisé'}),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {
      name: 'drainage lymphatique à Annecy',
      exact: true,
    }),
  ).toHaveAttribute('href', '/soins/drainage-lymphatique/');
  await expect(
    page.getByRole('link', {name: 'Découvrir les soins'}),
  ).toHaveAttribute('href', '/soins/');
  const treatmentCards = page.locator('#soins article');

  await expect(
    treatmentCards.getByRole('link', {name: 'Découvrir'}),
  ).toHaveCount(5);
  await expect(
    treatmentCards
      .filter({hasText: 'Drainage lymphatique'})
      .getByRole('link', {name: 'Découvrir'}),
  ).toHaveAttribute('href', '/soins/drainage-lymphatique/');
  await expect(
    treatmentCards
      .filter({hasText: 'Massage relaxant et personnalisé'})
      .getByRole('link', {name: 'Découvrir'}),
  ).toHaveAttribute('href', '/soins/#massage-anti-douleur');
  await expect(
    treatmentCards
      .filter({hasText: 'Soin remodelant'})
      .getByRole('link', {name: 'Découvrir'}),
  ).toHaveAttribute('href', '/soins/#massage-remodelant');
  await expect(
    treatmentCards
      .filter({hasText: 'Miracle Face'})
      .getByRole('link', {name: 'Découvrir'}),
  ).toHaveAttribute('href', '/soins/#massage-visage-liftant');
  await expect(
    treatmentCards
      .filter({hasText: 'Soin de madérothérapie'})
      .getByRole('link', {name: 'Découvrir'}),
  ).toHaveAttribute('href', '/soins/maderotherapie/');
  await expect(treatmentCards.getByText('Durée conseillée')).toHaveCount(0);
  await expect(page.getByText('Prendre le temps')).toBeVisible();
  await expect(page.getByText('S’accorder une vraie pause')).toBeVisible();
  await expect(
    page.getByText(
      'Un moment pour ralentir, écouter votre corps et retrouver une sensation de calme.',
    ),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Accompagnement : aller plus loin sur plusieurs séances',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Programme Ventre Léger & Jambes Légères',
    }),
  ).toBeVisible();
  await expect(page.getByRole('heading', {name: 'Cure Fusion'})).toBeVisible();
  await expect(page.getByText('350 €').last()).toBeVisible();
  await expect(page.getByText('3 séances', {exact: true})).toBeVisible();
  await expect(
    page.getByText(
      'L’accompagnement associe drainage lymphatique, écoute du corps',
    ),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Découvrir les programmes'}),
  ).toHaveAttribute('href', '/programmes/');
  await expect(
    page.getByRole('link', {name: 'Découvrir le programme', exact: true}),
  ).toHaveAttribute('href', '/programmes/ventre-leger-jambes-legeres/');
  await expect(
    page.getByRole('link', {name: 'Découvrir la cure'}),
  ).toHaveAttribute('href', '/programmes/cure-fusion/');
  await expect(
    page.getByRole('heading', {name: 'Quel est votre besoin aujourd’hui ?'}),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Je souhaite un accompagnement'}),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Réserver un soin'}).first(),
  ).toHaveAttribute('href', '/reserver-en-ligne');
  await expect(
    page.getByRole('link', {name: 'Réserver l’offre'}),
  ).toHaveAttribute('href', '/reserver-en-ligne/offre-decouverte');
  await expect(page.getByText('Soin d’entretien')).toHaveCount(0);
  await expect(page.getByText('Demander un soin d’entretien')).toHaveCount(0);
});

test('English homepage renders localized content and booking CTA', async ({
  page,
}) => {
  await page.goto('/en/');

  await expect(page).toHaveTitle(
    'Women’s Wellness Massage in Annecy | Les Mains de Sérénité',
  );
  await expect(
    page.getByRole('heading', {name: 'Les Mains de Sérénité'}).first(),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Single massages and treatments: choose the right ritual',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Relaxing personalized massage',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Discover the treatments'}),
  ).toHaveAttribute('href', '/en/massages/');
  await expect(
    page.locator('#soins article').getByRole('link', {name: 'Discover'}),
  ).toHaveCount(5);
  await expect(page.getByText('Take your time')).toBeVisible();
  await expect(page.getByText('Allow yourself a real pause')).toBeVisible();
  await expect(
    page.getByText(
      'A moment to slow down, listen to your body, and return to a sense of calm.',
    ),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Support: go further across several sessions',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Light Belly & Light Legs Program'}),
  ).toBeVisible();
  await expect(page.getByRole('heading', {name: 'Cure Fusion'})).toBeVisible();
  await expect(page.getByText('350 €').last()).toBeVisible();
  await expect(page.getByText('3 sessions', {exact: true})).toBeVisible();
  await expect(
    page.getByText(
      'The accompaniment combines lymphatic drainage, body awareness',
    ),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Discover the programs'}),
  ).toHaveAttribute('href', '/en/programs/');
  await expect(
    page.getByRole('link', {name: 'Discover the program', exact: true}),
  ).toHaveAttribute('href', '/en/programs/light-belly-light-legs/');
  await expect(
    page.getByRole('link', {name: 'Discover the package'}),
  ).toHaveAttribute('href', '/en/programs/cure-fusion/');
  await expect(
    page.getByRole('heading', {name: 'What do you need today?'}),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'I want support'}),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Book a treatment'}).first(),
  ).toHaveAttribute('href', '/en/book-online');
  await expect(
    page.getByRole('link', {name: 'Book the offer'}),
  ).toHaveAttribute('href', '/en/book-online/discovery-offer');
});
