import {expect, test} from '@playwright/test';

test('French homepage renders the main business content and booking CTA', async ({
  page,
}) => {
  await page.goto('/');

  await expect(page).toHaveTitle(
    'Les Mains de Sérénité | Massage bien-être à Annecy pour femmes'
  );
  await expect(
    page.getByRole('heading', {name: 'Les Mains de Sérénité'}).first()
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Massages proposés'})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Programme Ventre Léger & Jambes Légères',
    })
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Réserver un massage'}).first()
  ).toHaveAttribute('href', '/reserver');
});

test('English homepage renders localized content and booking CTA', async ({
  page,
}) => {
  await page.goto('/en/');

  await expect(page).toHaveTitle(
    'Women’s Wellness Massage in Annecy | Les Mains de Sérénité'
  );
  await expect(
    page.getByRole('heading', {name: 'Les Mains de Sérénité'}).first()
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Available massages'})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Light Belly & Light Legs Program'})
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Book a massage'}).first()
  ).toHaveAttribute('href', '/en/book');
});
