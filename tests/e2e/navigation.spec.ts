import {expect, test} from './fixtures';

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
      '/maderotherapie/',
      '/en/maderotherapy/',
    ])
  );
  expect(configuredPaths).not.toContain('/reserver');
});

for (const width of [390, 430]) {
  test(`mobile language switcher has clear tap targets at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({width, height: 844});
    await page.goto('/');

    const switcher = page.locator('[data-language-switcher]');
    const languageLinks = switcher.getByRole('link');
    const inactiveLanguage = switcher.getByRole('link', {name: 'EN'});
    const menuButton = page.getByRole('button', {name: 'Menu', exact: true});

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
  ).toHaveAttribute('href', '/en/maderotherapy/');
  await expect(drawer.getByRole('link', {name: 'Program'})).toHaveAttribute(
    'href',
    '/en/light-belly-light-legs-program'
  );

  await page.keyboard.press('Escape');

  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  await expect(drawer).toBeHidden();
});

test('mobile menu contains focus and handles a rapid close', async ({page}) => {
  await page.setViewportSize({width: 390, height: 844});
  await page.goto('/');

  const menuButton = page.getByRole('button', {name: 'Menu', exact: true});
  const drawer = page.getByRole('dialog', {name: 'Les Mains de Sérénité'});
  const closeButton = drawer.getByRole('button', {name: 'Fermer le menu'});

  await menuButton.click();
  await page.keyboard.press('Escape');

  await expect(drawer).toBeHidden();
  await expect(menuButton).toBeFocused();

  await menuButton.click();
  await expect(closeButton).toBeFocused();

  await menuButton.focus();
  await page.keyboard.press('Tab');

  await expect(closeButton).toBeFocused();
});
