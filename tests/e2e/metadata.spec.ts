import {expect, test, type Page} from '@playwright/test';

const siteUrl = 'https://lesmainsdeserenite.fr';

async function expectCanonical(page: Page, href: string) {
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    href
  );
}

async function expectAlternate(page: Page, hreflang: string, href: string) {
  await expect(
    page.locator(`link[rel="alternate"][hreflang="${hreflang}"]`)
  ).toHaveAttribute('href', href);
}

test('homepages expose canonical and alternate language links', async ({
  page,
}) => {
  await page.goto('/');

  await expectCanonical(page, `${siteUrl}/`);
  await expectAlternate(page, 'fr', `${siteUrl}/`);
  await expectAlternate(page, 'en', `${siteUrl}/en/`);
  await expectAlternate(page, 'x-default', `${siteUrl}/`);

  await page.goto('/en/');

  await expectCanonical(page, `${siteUrl}/en/`);
  await expectAlternate(page, 'fr', `${siteUrl}/`);
  await expectAlternate(page, 'en', `${siteUrl}/en/`);
  await expectAlternate(page, 'x-default', `${siteUrl}/`);
});

test('program pages expose matching localized alternates', async ({page}) => {
  const frenchPath = '/programme-ventre-leger-jambes-legeres';
  const englishPath = '/en/light-belly-light-legs-program';

  await page.goto(frenchPath);

  await expectCanonical(page, `${siteUrl}${frenchPath}`);
  await expectAlternate(page, 'fr', `${siteUrl}${frenchPath}`);
  await expectAlternate(page, 'en', `${siteUrl}${englishPath}`);
  await expectAlternate(page, 'x-default', `${siteUrl}${frenchPath}`);

  await page.goto(englishPath);

  await expectCanonical(page, `${siteUrl}${englishPath}`);
  await expectAlternate(page, 'fr', `${siteUrl}${frenchPath}`);
  await expectAlternate(page, 'en', `${siteUrl}${englishPath}`);
  await expectAlternate(page, 'x-default', `${siteUrl}${frenchPath}`);
});
