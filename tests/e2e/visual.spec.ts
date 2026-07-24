import {expect, test, type Page} from './fixtures';

const visualPages = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'treatments-overview',
    path: '/soins/',
  },
  {
    name: 'programs-overview',
    path: '/programmes/',
  },
  {
    name: 'booking',
    path: '/reserver-en-ligne/',
  },
] as const;

const preparePageForScreenshot = async (page: Page) => {
  await page.evaluate(async () => {
    await globalThis.document.fonts.ready;

    for (const image of globalThis.document.images) {
      image.loading = 'eager';
    }

    const scrollThroughPage = async (scrollPosition = 0): Promise<void> => {
      if (scrollPosition >= globalThis.document.documentElement.scrollHeight) {
        return;
      }

      globalThis.scrollTo(0, scrollPosition);
      await new Promise<void>((resolve) => {
        globalThis.requestAnimationFrame(() => {
          globalThis.requestAnimationFrame(() => {
            resolve();
          });
        });
      });

      await scrollThroughPage(scrollPosition + globalThis.innerHeight);
    };

    await scrollThroughPage();
    globalThis.scrollTo(0, 0);
  });

  await page.locator('img:visible').evaluateAll(async (images) => {
    await Promise.all(
      (images as HTMLImageElement[]).map(async (image) => {
        try {
          await image.decode();
        } catch {
          // Broken optional images should not prevent the page shell snapshot.
        }
      }),
    );
  });
};

test.describe('visual snapshots', () => {
  test.describe.configure({mode: 'serial'});

  test.use({
    colorScheme: 'light',
    deviceScaleFactor: 1,
    viewport: {
      width: 1280,
      height: 900,
    },
  });

  for (const visualPage of visualPages) {
    test(`${visualPage.name} matches its reference`, async ({page}) => {
      if (visualPage.name === 'booking') {
        await page.route('https://app.cal.eu/embed/embed.js', async (route) => {
          await route.abort('blockedbyclient');
        });
      }

      await page.goto(visualPage.path);
      await expect(page.locator('main')).toBeVisible();

      if (visualPage.name === 'booking') {
        await expect(
          page.getByText(
            'Le module de réservation ne peut pas s’afficher pour le moment.',
          ),
        ).toBeVisible();
      }

      await preparePageForScreenshot(page);
      await expect(page.locator('main')).toHaveScreenshot(
        `${visualPage.name}.png`,
        {
          animations: 'disabled',
          caret: 'hide',
          maxDiffPixelRatio: 0.01,
          scale: 'css',
          threshold: 0.2,
        },
      );
    });
  }
});
