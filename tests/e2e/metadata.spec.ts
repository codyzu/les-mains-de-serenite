import {expect, test, type Page} from './fixtures';

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
  const frenchPath = '/programmes/ventre-leger-jambes-legeres/';
  const englishPath = '/en/programs/light-belly-light-legs/';

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

test('program overview pages expose matching localized alternates', async ({
  page,
}) => {
  const frenchPath = '/programmes/';
  const englishPath = '/en/programs/';

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

test('massage overview pages expose matching localized alternates', async ({
  page,
}) => {
  const frenchPath = '/massages/';
  const englishPath = '/en/massages/';

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

test('maderotherapy pages expose matching localized alternates', async ({
  page,
}) => {
  const frenchPath = '/massages/maderotherapie/';
  const englishPath = '/en/massages/maderotherapy/';

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
