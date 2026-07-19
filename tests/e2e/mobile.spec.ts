import {expect, test, type Page} from './fixtures';

const expectNoHorizontalOverflow = async (page: Page) => {
  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));

  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
};

test(
  'homepage exposes the essential booking and contact paths',
  {tag: ['@critical', '@mobile']},
  async ({page}) => {
    await page.goto('/');

    await expect(
      page.getByRole('heading', {name: 'Les Mains de Sérénité'}).first()
    ).toBeVisible();
    await expect(
      page.getByRole('link', {name: 'Réserver un soin'}).first()
    ).toHaveAttribute('href', '/reserver-en-ligne');
    await expect(
      page.getByRole('link', {name: 'WhatsApp'}).first()
    ).toHaveAttribute('href', /^https:\/\/wa\.me\/33766612017\?text=/);
    await expect(
      page.getByRole('link', {name: 'Appeler'}).first()
    ).toHaveAttribute('href', 'tel:+33766612017');
    await expectNoHorizontalOverflow(page);
  }
);

test(
  'representative treatment and programme pages remain usable on mobile',
  {tag: '@mobile'},
  async ({page}) => {
    await page.goto('/soins/maderotherapie/');

    await expect(
      page
        .getByRole('heading', {
          name: 'Soin de madérothérapie Jambes Légères',
        })
        .first()
    ).toBeVisible();
    await expect(
      page.locator('main').getByRole('link', {name: 'Réserver ce soin'}).first()
    ).toHaveAttribute('href', '/reserver-en-ligne');
    await expectNoHorizontalOverflow(page);

    await page.goto('/programmes/ventre-leger-jambes-legeres/');

    await expect(
      page
        .getByRole('heading', {
          name: 'Programme Ventre Léger & Jambes Légères',
        })
        .first()
    ).toBeVisible();
    await expect(
      page.getByRole('link', {name: 'Commencer mon accompagnement'}).first()
    ).toHaveAttribute('href', /^https:\/\/wa\.me\/33766612017\?text=/);
    await expectNoHorizontalOverflow(page);
  }
);

test(
  'booking selector and controls clear the sticky header on mobile',
  {tag: ['@mobile', '@booking']},
  async ({page}) => {
    await page.route('https://app.cal.eu/embed/embed.js', async (route) => {
      await route.abort('blockedbyclient');
    });
    await page.goto('/reserver-en-ligne');

    const bookingSection = page.locator('[data-booking-selector]');
    const header = page.locator('[data-site-header]');

    await bookingSection.scrollIntoViewIfNeeded();
    await expect(
      page.getByRole('heading', {name: 'Choisissez la durée de votre séance'})
    ).toBeVisible();
    await expect(
      page.getByRole('link', {name: 'Réserver directement sur Cal.eu'})
    ).toBeVisible();

    const headerBox = await header.boundingBox();
    const headingBox = await bookingSection
      .getByRole('heading')
      .first()
      .boundingBox();

    expect(headerBox).not.toBeNull();
    expect(headingBox).not.toBeNull();
    expect(headingBox!.y).toBeGreaterThanOrEqual(
      headerBox!.y + headerBox!.height
    );
    await expectNoHorizontalOverflow(page);
  }
);
