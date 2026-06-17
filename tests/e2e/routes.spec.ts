import {expect, test} from './fixtures';

const routes = [
  '/',
  '/en/',
  '/maderotherapie/',
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
