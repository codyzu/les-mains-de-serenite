import {expect, test} from './fixtures';

const routes = [
  '/',
  '/404.html',
  '/en/',
  '/maderotherapie/',
  '/en/maderotherapy/',
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
