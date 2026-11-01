import {expect, test} from './fixtures';

for (const item of [
  {
    home: '/',
    path: '/bons-cadeaux/',
    otherPath: '/en/gift-certificates/',
    label: 'Bons cadeaux',
    offerLabel: 'Découvrir les bons cadeaux',
    heading: 'Offrez un massage à Annecy',
    title: 'Bon cadeau massage à Annecy | Les Mains de Sérénité',
    cta: 'Demander un bon cadeau',
    message:
      'Bonjour, je souhaite offrir un bon cadeau pour un massage. Pouvez-vous m’aider à le préparer ?',
    validity: 'Quelle est la durée de validité du bon cadeau ?',
    validityText:
      'Le bon cadeau est valable 3 mois à compter de la date d’achat.',
    payment: 'Comment régler et recevoir mon bon cadeau ?',
    paymentText: 'virement bancaire ou Wero',
  },
  {
    home: '/en/',
    path: '/en/gift-certificates/',
    otherPath: '/bons-cadeaux/',
    label: 'Gift certificates',
    offerLabel: 'Explore gift certificates',
    heading: 'Give a massage in Annecy',
    title: 'Massage Gift Certificates in Annecy | Les Mains de Sérénité',
    cta: 'Enquire about a gift certificate',
    message:
      'Hello, I’d like to give a gift certificate for a massage. Could you help me arrange it?',
    validity: 'How long is the gift certificate valid?',
    validityText:
      'Gift certificates are valid for 3 months from the date of purchase.',
    payment: 'How do I pay and receive my gift certificate?',
    paymentText: 'bank transfer or Wero',
  },
]) {
  test(`gift certificates are discoverable and localized from ${item.home} @critical @mobile`, async ({
    page,
  }) => {
    await page.goto(item.home);
    await page.getByRole('link', {name: item.offerLabel, exact: true}).click();
    await expect(page).toHaveURL(new RegExp(`${item.path}$`, 'v'));
    await expect(page).toHaveTitle(item.title);
    await expect(
      page.getByRole('heading', {level: 1, name: item.heading}),
    ).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `https://lesmainsdeserenite.fr${item.path}`,
    );
    await expect(
      page.locator(
        `link[rel="alternate"][hreflang="${item.home === '/' ? 'en' : 'fr'}"]`,
      ),
    ).toHaveAttribute('href', `https://lesmainsdeserenite.fr${item.otherPath}`);
    await expect(
      page
        .locator('[data-language-switcher] a')
        .filter({hasText: item.home === '/' ? 'EN' : 'FR'}),
    ).toHaveAttribute('href', item.otherPath);
    const preview = page.locator('main figure img');
    await expect(preview).toHaveAttribute(
      'src',
      /^\/_astro\/gift-certificate-example-front.*\.webp$/v,
    );
    await expect(preview).toHaveJSProperty('complete', true);
    const enlargedHref = await page
      .locator('main figcaption a')
      .getAttribute('href');
    expect(enlargedHref).toMatch(
      /^\/_astro\/gift-certificate-example-front.*\.webp$/v,
    );
    const enlargedResponse = await page.request.get(enlargedHref!);
    expect(enlargedResponse.ok()).toBe(true);
    expect(enlargedResponse.headers()['content-type']).toContain('image/webp');
    const cta = page.getByRole('link', {name: item.cta, exact: true});
    const href = new URL((await cta.getAttribute('href'))!);
    expect(href.origin + href.pathname).toBe('https://wa.me/33766612017');
    expect(href.searchParams.get('text')).toBe(item.message);
    await expect(cta).toHaveAttribute('data-analytics-event', 'whatsapp_click');
    await page.getByText(item.validity, {exact: true}).click();
    await expect(page.locator('details[open]')).toContainText(
      item.validityText,
    );
    await page.getByText(item.payment, {exact: true}).click();
    await expect(
      page.locator('details').filter({hasText: item.payment}),
    ).toContainText(item.paymentText);
    await expect(page.locator('main')).toContainText('80 €');
    await expect(page.locator('main')).toContainText('115 €');
    expect(
      await page.evaluate(
        () =>
          globalThis.document.documentElement.scrollWidth <=
          globalThis.innerWidth,
      ),
    ).toBe(true);
    await expect(
      page.locator('footer').getByRole('link', {name: item.label, exact: true}),
    ).toHaveAttribute('href', item.path);
    await page.goto(item.home);
    if (await page.locator('header nav').isVisible()) {
      await page
        .locator('header nav')
        .getByRole('link', {name: item.label, exact: true})
        .click();
    } else {
      await page.locator('[data-mobile-menu-open]').click();
      await page
        .getByRole('dialog')
        .getByRole('link', {name: item.label, exact: true})
        .click();
    }

    await expect(
      page.getByRole('heading', {level: 1, name: item.heading}),
    ).toBeVisible();
  });
}

test('gift certificate pages are included in the sitemap', async ({
  request,
}) => {
  const response = await request.get('/sitemap-0.xml');
  expect(response.ok()).toBe(true);
  const body = await response.text();
  expect(body).toContain('/bons-cadeaux/');
  expect(body).toContain('/en/gift-certificates/');
});
