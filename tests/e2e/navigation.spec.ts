import {expect, test} from '@playwright/test';

test('language switch points between localized homepages', async ({page}) => {
  await page.goto('/');

  await expect(page.getByRole('link', {name: 'FR'}).first()).toHaveAttribute(
    'aria-current',
    'page'
  );
  await expect(page.getByRole('link', {name: 'EN'}).first()).toHaveAttribute(
    'href',
    '/en/'
  );

  await page.goto('/en/');

  await expect(page.getByRole('link', {name: 'EN'}).first()).toHaveAttribute(
    'aria-current',
    'page'
  );
  await expect(page.getByRole('link', {name: 'FR'}).first()).toHaveAttribute(
    'href',
    '/'
  );
});

test('mobile menu opens, exposes localized links, and closes with Escape', async ({
  page,
}) => {
  await page.setViewportSize({width: 390, height: 844});
  await page.goto('/en/');

  const menuButton = page.getByRole('button', {name: 'Menu', exact: true});
  const drawer = page.getByRole('dialog', {name: 'Les Mains de Sérénité'});

  await expect(menuButton).toBeVisible();
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

  await menuButton.click();

  await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  await expect(drawer).toBeVisible();
  await expect(
    drawer.getByRole('link', {name: 'Maderotherapy'})
  ).toHaveAttribute('href', '/maderotherapie/');
  await expect(drawer.getByRole('link', {name: 'Program'})).toHaveAttribute(
    'href',
    '/en/light-belly-light-legs-program'
  );

  await page.keyboard.press('Escape');

  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  await expect(drawer).toBeHidden();
});
