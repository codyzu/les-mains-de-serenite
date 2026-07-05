import {expect, test} from './fixtures';

const routes = [
  '/',
  '/en/',
  '/massages/',
  '/en/massages/',
  '/massages/maderotherapie/',
  '/en/massages/maderotherapy/',
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
  '/reserver-en-ligne',
  '/en/book-online',
  '/mentions-legales',
  '/politique-de-confidentialite',
];

for (const route of routes) {
  test(`GET ${route} returns 200`, async ({request}) => {
    const response = await request.get(route);

    expect(response.status()).toBe(200);
  });
}

test('custom 404 page renders branded recovery links', async ({page}) => {
  await page.goto('/404.html');

  await expect(
    page.getByRole('heading', {
      name: 'Cette page n’existe plus ou a changé d’adresse.',
    })
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Retour à l’accueil'})
  ).toHaveAttribute('href', '/');
  await expect(
    page.getByRole('link', {name: 'English homepage', exact: true})
  ).toHaveAttribute('href', '/en/');
});

test('section overview pages render their main content', async ({page}) => {
  await page.goto('/massages/');

  await expect(
    page.getByRole('heading', {
      name: 'Chaque soin est pensé pour répondre à votre besoin du moment',
    })
  ).toBeVisible();
  await expect(
    page.getByText(
      'Des soins bien-être à Annecy réservés exclusivement aux femmes'
    )
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Réserver un soin'}).first()
  ).toHaveAttribute('href', '/reserver');
  await expect(
    page.getByRole('heading', {name: 'Un soin pensé pour vous'})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Madérothérapie'})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Vous ne savez pas quel soin choisir ?'})
  ).toBeVisible();
  await expect(
    page.getByText('Une vraie écoute avant de commencer')
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Vous souhaitez aller plus loin ?'})
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Réserver un soin'}).last()
  ).toHaveAttribute('href', '/reserver');
  await expect(
    page.getByText('Une question avant de réserver ? Écrivez-moi sur')
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'WhatsApp'}).last()
  ).toHaveAttribute('href', /wa\.me/);
  await expect(
    page.getByRole('link', {name: 'Découvrir les programmes'})
  ).toHaveAttribute('href', '/programmes/');

  await page.goto('/programmes/');

  await expect(
    page.getByRole('heading', {name: 'Aller plus loin qu’une séance seule'})
  ).toBeVisible();
  await expect(
    page.getByText('Des accompagnements bien-être réservés aux femmes')
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Réserver un programme'}).first()
  ).toHaveAttribute('href', '/reserver');
  await expect(
    page.getByRole('heading', {name: 'Cure Fusion', exact: true})
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Découvrir la cure'})
  ).toHaveAttribute('href', '/programmes/cure-fusion/');
  await expect(
    page.getByText(
      'Deux accompagnements pour répondre à des besoins différents'
    )
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Voir les soins'})
  ).toHaveAttribute('href', '/massages/');
  await expect(
    page.getByText('Une question avant de réserver ? Écrivez-moi sur')
  ).toBeVisible();
});

test('Cure Fusion page explains the personalized package', async ({page}) => {
  await page.goto('/programmes/cure-fusion/');

  await expect(
    page.getByRole('heading', {name: 'Cure Fusion', exact: true})
  ).toBeVisible();
  await expect(
    page.getByText('3 séances personnalisées').first()
  ).toBeVisible();
  await expect(
    page.getByText('3 soins personnalisés', {exact: true})
  ).toBeVisible();
  await expect(page.getByText('350 €').first()).toBeVisible();
  await expect(
    page.getByText('Accompagnement réservé exclusivement aux femmes')
  ).toBeVisible();
  await expect(
    page.getByText('Vous n’avez pas à choisir le bon soin seule')
  ).toBeVisible();
  await expect(
    page.getByText(
      'Vous n’avez pas à choisir seule entre drainage lymphatique, soin remodelant ou madérothérapie'
    )
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Votre accompagnement en 3 séances'})
  ).toBeVisible();
  await expect(
    page.getByText('La troisième séance vient consolider les bienfaits')
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Votre corps évolue, votre accompagnement aussi',
    })
  ).toBeVisible();
  await expect(
    page
      .locator(
        'img[alt="Deux femmes marchent pieds nus au bord du lac d’Annecy"]'
      )
      .first()
  ).toBeVisible();
  await expect(
    page
      .locator(
        'img[alt="Plumes blanches dans une ambiance douce et apaisante"]'
      )
      .first()
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Les soins pouvant être choisis',
    })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Drainage lymphatique'})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Soin remodelant'})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Madérothérapie'})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Un accompagnement attentif'})
  ).toBeVisible();
  await expect(
    page.getByText('J’ai particulièrement apprécié l’écoute')
  ).toBeVisible();
  await expect(page.getByText('Je suis ressortie avec')).toBeVisible();
  await expect(
    page.getByText('professionnelle et très rassurante')
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Pourquoi choisir une Cure Fusion plutôt que trois soins réservés séparément ?',
    })
  ).toBeVisible();
  await expect(
    page.getByText('L’expérience globale est plus cohérente')
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Réserver cette cure'}).last()
  ).toHaveAttribute('href', '/reserver');
  await expect(page.getByText('Vous hésitez ? Écrivez-moi sur')).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'WhatsApp'}).last()
  ).toHaveAttribute('href', /wa\.me/);
  await expect(
    page.getByRole('link', {name: 'Voir les programmes'})
  ).toHaveAttribute('href', '/programmes/');
  await expect(
    page.getByRole('link', {name: 'Voir les soins'})
  ).toHaveAttribute('href', '/massages/');
  await expect(
    page.getByRole('link', {name: 'Programme Ventre Léger'})
  ).toHaveAttribute('href', '/programmes/ventre-leger-jambes-legeres/');
});

test('online booking pages render the embedded scheduler shell', async ({
  page,
}) => {
  await page.goto('/reserver-en-ligne');

  await expect(
    page.getByRole('heading', {name: 'Réserver votre soin bien-être'})
  ).toBeVisible();
  await expect(page.locator('#my-cal-inline-reserver')).toBeVisible();

  await page.goto('/en/book-online');

  await expect(
    page.getByRole('heading', {name: 'Book your wellness treatment'})
  ).toBeVisible();
  await expect(page.locator('#my-cal-inline-reserver')).toBeVisible();
});
