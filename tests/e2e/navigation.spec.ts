import {expect, test} from './fixtures';

test('language switch points between localized homepages', async ({page}) => {
  await page.goto('/');

  const switcher = page.locator('[data-language-switcher]').first();

  await expect(switcher.getByRole('link', {name: 'FR'})).toHaveAttribute(
    'aria-current',
    'page'
  );
  await expect(switcher.getByRole('link', {name: 'EN'})).toHaveAttribute(
    'href',
    '/en/'
  );
  await page.goto('/en/');

  const englishSwitcher = page.locator('[data-language-switcher]').first();

  await expect(englishSwitcher.getByRole('link', {name: 'EN'})).toHaveAttribute(
    'aria-current',
    'page'
  );
  await expect(englishSwitcher.getByRole('link', {name: 'FR'})).toHaveAttribute(
    'href',
    '/'
  );
});

test('configures only homepage and service paths for view transitions', async ({
  page,
}) => {
  await page.goto('/');

  const paths = await page
    .locator('[data-transition-paths]')
    .getAttribute('data-transition-paths');
  const configuredPaths = JSON.parse(paths!) as string[];

  expect(configuredPaths).toEqual(
    expect.arrayContaining([
      '/',
      '/en/',
      '/soins/',
      '/en/massages/',
      '/programmes/',
      '/en/programs/',
      '/soins/maderotherapie/',
      '/en/massages/maderotherapy/',
    ])
  );
  expect(configuredPaths).not.toContain('/reserver');
});

for (const width of [390, 430]) {
  test(`mobile language switcher has clear tap targets at ${width}px @mobile`, async ({
    page,
  }) => {
    await page.setViewportSize({width, height: 844});
    await page.goto('/');

    const switcher = page.locator('[data-language-switcher]');
    const languageLinks = switcher.getByRole('link');
    const inactiveLanguage = switcher.getByRole('link', {name: 'EN'});
    const menuButton = page.locator('button[data-mobile-menu-open]');

    await expect(languageLinks).toHaveCount(2);
    await expect(languageLinks).toHaveText(['FR', 'EN']);
    await expect(switcher).not.toContainText('/');
    await inactiveLanguage.focus();
    await expect(inactiveLanguage).toBeFocused();
    expect(
      await inactiveLanguage.evaluate(
        (link) => getComputedStyle(link).boxShadow
      )
    ).not.toBe('none');

    const links = await languageLinks.all();
    const linkBoxes = await Promise.all(
      links.map(async (link) => link.boundingBox())
    );
    const switcherBox = await switcher.boundingBox();
    const menuBox = await menuButton.boundingBox();

    expect(linkBoxes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({height: 32, width: 32}),
        expect.objectContaining({height: 32, width: 32}),
      ])
    );
    expect(switcherBox).not.toBeNull();
    expect(menuBox).not.toBeNull();
    expect(switcherBox!.height).toBeLessThan(menuBox!.height);
    expect(
      menuBox!.x - (switcherBox!.x + switcherBox!.width)
    ).toBeGreaterThanOrEqual(16);
  });
}

test('mobile menu opens, exposes localized links, and closes with Escape @critical @mobile', async ({
  page,
}) => {
  await page.setViewportSize({width: 390, height: 844});
  await page.goto('/en/');

  const menuButton = page.locator('button[data-mobile-menu-open]');
  const drawer = page.getByRole('dialog', {name: 'Les Mains de Sérénité'});

  await expect(menuButton).toBeVisible();
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

  await menuButton.click();

  await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  await expect(drawer).toBeVisible();
  await expect(drawer.getByRole('link', {name: 'Maderotherapy'})).toHaveCount(
    0
  );
  await expect(drawer.getByRole('link', {name: 'Treatments'})).toHaveAttribute(
    'href',
    '/en/massages/'
  );
  await expect(drawer.getByRole('link', {name: 'Programs'})).toHaveAttribute(
    'href',
    '/en/programs/'
  );

  await page.keyboard.press('Escape');

  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  await expect(drawer).toBeHidden();
});

for (const {route, desktopLabel, mobileLabel, bookingPath} of [
  {
    route: '/',
    desktopLabel: 'Réserver',
    mobileLabel: 'Réserver un soin',
    bookingPath: '/reserver-en-ligne',
  },
  {
    route: '/en/',
    desktopLabel: 'Book',
    mobileLabel: 'Book a treatment',
    bookingPath: '/en/book-online',
  },
]) {
  test(`booking navigation uses the localized embedded page from ${route} @critical @booking`, async ({
    page,
  }) => {
    await page.goto(route);

    const desktopBooking = page.locator(
      `header nav a[data-analytics-event="reserve_click"]:has-text("${desktopLabel}")`
    );
    const footerBooking = page.locator(
      `footer a[data-analytics-event="reserve_click"]:has-text("${desktopLabel}")`
    );

    await Promise.all(
      [desktopBooking, footerBooking].flatMap((link) => [
        expect(link).toHaveAttribute('href', bookingPath),
        expect(link).toHaveAttribute('data-analytics-event', 'reserve_click'),
        expect(link).not.toHaveAttribute('target', '_blank'),
      ])
    );

    await page.setViewportSize({width: 390, height: 844});
    await page.locator('button[data-mobile-menu-open]').click();

    const mobileBooking = page
      .getByRole('dialog', {name: 'Les Mains de Sérénité'})
      .getByRole('link', {name: mobileLabel});

    await expect(mobileBooking).toHaveAttribute('href', bookingPath);
    await expect(mobileBooking).toHaveAttribute(
      'data-analytics-event',
      'reserve_click'
    );
    await expect(mobileBooking).not.toHaveAttribute('target', '_blank');
  });
}

for (const {route, desktopLabel, mobileLabel, bookingPath} of [
  {
    route: '/reserver-en-ligne/offre-decouverte',
    desktopLabel: 'Réserver',
    mobileLabel: 'Réserver un soin',
    bookingPath: '/reserver-en-ligne',
  },
  {
    route: '/en/book-online/discovery-offer',
    desktopLabel: 'Book',
    mobileLabel: 'Book a treatment',
    bookingPath: '/en/book-online',
  },
]) {
  test(`active booking navigation returns to the generic page from ${route} @critical @booking`, async ({
    page,
  }) => {
    await page.goto(route);

    const desktopBooking = page.locator(
      `header nav a[data-analytics-event="reserve_click"]:has-text("${desktopLabel}")`
    );

    await expect(desktopBooking).toHaveAttribute('href', bookingPath);
    await expect(desktopBooking).not.toHaveAttribute('aria-current');
    await expect(desktopBooking).toHaveClass(/font-medium/);

    await page.setViewportSize({width: 390, height: 844});
    await page.locator('button[data-mobile-menu-open]').click();

    const mobileBooking = page
      .getByRole('dialog', {name: 'Les Mains de Sérénité'})
      .getByRole('link', {name: mobileLabel});

    await expect(mobileBooking).toHaveAttribute('href', bookingPath);
    await expect(mobileBooking).toHaveAttribute(
      'data-analytics-event',
      'reserve_click'
    );
  });
}

test('mobile menu contains focus and handles a rapid close @mobile', async ({
  page,
}) => {
  await page.setViewportSize({width: 390, height: 844});
  await page.goto('/');

  const menuButton = page.locator('button[data-mobile-menu-open]');
  const drawer = page.getByRole('dialog', {name: 'Les Mains de Sérénité'});
  const closeButton = drawer.getByRole('button', {name: 'Fermer le menu'});

  await menuButton.focus();
  await page.keyboard.press('Enter');
  await page.keyboard.press('Escape');

  await expect(drawer).toBeHidden();
  await expect(menuButton).toBeFocused();

  await menuButton.click();
  await expect(closeButton).toBeFocused();

  await menuButton.focus();
  await page.keyboard.press('Tab');

  await expect(closeButton).toBeFocused();
});
