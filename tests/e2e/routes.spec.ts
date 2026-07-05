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
      name: 'Chaque massage est pensé pour répondre à votre besoin du moment',
    })
  ).toBeVisible();
  await expect(
    page.getByText('Massages réservés exclusivement aux femmes')
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Réserver un massage'})
  ).toHaveAttribute('href', '/reserver');
  await expect(
    page.getByRole('heading', {name: 'Madérothérapie'})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Besoin d’aide pour choisir ?'})
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Réserver ou poser une question'})
  ).toHaveAttribute('href', '/reserver');
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
    page.getByRole('link', {name: 'Réserver un accompagnement'})
  ).toHaveAttribute('href', '/reserver');
  await expect(
    page.getByRole('heading', {name: 'Cure Fusion', exact: true})
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Découvrir la cure'})
  ).toHaveAttribute('href', '/programmes/cure-fusion/');
  await expect(
    page.getByText(
      'Deux accompagnements permettent d’aller plus loin, selon vos besoins et votre objectif de bien-être.'
    )
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Voir les massages'})
  ).toHaveAttribute('href', '/massages/');
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
    page.getByText('3 massages personnalisés', {exact: true})
  ).toBeVisible();
  await expect(page.getByText('350 €').first()).toBeVisible();
  await expect(page.getByText('Cure réservée aux femmes')).toBeVisible();
  await expect(
    page.getByText('Vous n’avez pas à choisir le bon massage')
  ).toBeVisible();
  await expect(
    page.getByText(
      'Vous n’avez pas à choisir entre drainage lymphatique, massage remodelant ou madérothérapie'
    )
  ).toBeVisible();
  await expect(
    page.getByText('Une expertise au service de votre corps')
  ).toBeVisible();
  await expect(page.getByText(/deuxième séance/)).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Les massages pouvant composer votre cure',
    })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Drainage lymphatique'})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Massage remodelant'})
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
  await expect(
    page.getByRole('heading', {
      name: 'Pourquoi choisir une Cure Fusion plutôt que trois massages réservés séparément ?',
    })
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Poser une question sur la cure'}).last()
  ).toHaveAttribute('href', /wa\.me/);
  await expect(
    page.getByRole('link', {name: 'Réserver un créneau'})
  ).toHaveAttribute('href', '/reserver');
  await expect(
    page.getByRole('link', {name: 'Voir les programmes'})
  ).toHaveAttribute('href', '/programmes/');
  await expect(
    page.getByRole('link', {name: 'Voir les massages'})
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
    page.getByRole('heading', {name: 'Réserver votre massage bien-être'})
  ).toBeVisible();
  await expect(page.locator('#my-cal-inline-reserver')).toBeVisible();

  await page.goto('/en/book-online');

  await expect(
    page.getByRole('heading', {name: 'Book your wellness massage'})
  ).toBeVisible();
  await expect(page.locator('#my-cal-inline-reserver')).toBeVisible();
});
