import {expect, test} from './fixtures';

const destination =
  '/?utm_source=apel_les_tilleuls&utm_medium=qr&utm_campaign=noel_2026';

test('sponsor QR preserves campaign, canonical and no-JavaScript fallback', async ({
  request,
}) => {
  const response = await request.get('/s');
  const body = await response.text();

  expect(response.status()).toBe(200);
  expect(body).toMatch(/name="robots" content="noindex, (?:follow|nofollow)"/v);
  expect(body).toContain(
    '<link rel="canonical" href="https://lesmainsdeserenite.fr/">',
  );
  expect(body).toContain(
    'http-equiv="refresh" content="0; url=/?utm_source=apel_les_tilleuls&amp;utm_medium=qr&amp;utm_campaign=noel_2026"',
  );
  const sitemap = await request.get('/sitemap-0.xml');
  expect(await sitemap.text()).not.toContain(
    '<loc>https://lesmainsdeserenite.fr/s/</loc>',
  );
});

test('sponsor QR records its placement and campaign then redirects @critical', async ({
  page,
}) => {
  const events: unknown[][] = [];
  await page.exposeFunction('captureQrEvent', (...args: unknown[]) => {
    events.push(args);
  });
  await page.addInitScript(() => {
    type AnalyticsWindow = typeof globalThis & {
      captureQrEvent: (...args: unknown[]) => Promise<void>;
      gtag?: (...args: unknown[]) => void;
      dataLayer?: {push: (...items: unknown[]) => number};
    };

    const analyticsWindow = globalThis as AnalyticsWindow;
    const mockGtag = (...args: unknown[]) => {
      if (args[0] !== 'event' || args[1] !== 'qr_redirect') {
        return;
      }

      const options = args[2] as Record<string, unknown>;
      void analyticsWindow
        .captureQrEvent(args[1], options.qr_location, options.campaign)
        .then(() => {
          const callback = options.event_callback;
          if (typeof callback === 'function') {
            (callback as () => void)();
          }
        });
    };

    analyticsWindow.gtag = mockGtag;
    analyticsWindow.dataLayer = {
      push(...items) {
        const command = items[0] as ArrayLike<unknown>;
        if (command[0] === 'config') {
          queueMicrotask(() => {
            analyticsWindow.gtag = mockGtag;
          });
        }

        return items.length;
      },
    };
  });

  await page.goto('/s');
  await expect(page).toHaveURL(destination);
  expect(events).toEqual([['qr_redirect', 'sponsor', 'noel_2026']]);
});

test('sponsor QR still redirects when analytics never responds @critical', async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(globalThis, 'gtag', {
      configurable: true,
      get: () => () => undefined,
      set() {
        return undefined;
      },
    });
  });

  await page.goto('/s');
  await expect(page).toHaveURL(destination);
});

test('sponsor QR redirects without JavaScript', async ({browser}) => {
  const context = await browser.newContext({javaScriptEnabled: false});
  const page = await context.newPage();
  try {
    await page.goto('/s');
    await expect(page).toHaveURL(destination);
  } finally {
    await context.close();
  }
});
