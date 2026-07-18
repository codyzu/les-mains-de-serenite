/* eslint-disable @typescript-eslint/naming-convention */
import {expect, test} from './fixtures';

test('configures the namespaced Cal.eu embed and tracks one privacy-safe conversion event', async ({
  page,
}) => {
  await page.addInitScript(() => {
    const calls: Array<{args: unknown[]; namespace?: string}> = [];
    const listeners: Record<string, (...args: unknown[]) => void> = {};
    const analyticsCalls: unknown[][] = [];
    const namespaces: Record<string, (...args: unknown[]) => void> = {};
    const cal = (...args: unknown[]) => {
      calls.push({args});

      if (args[0] === 'init' && typeof args[1] === 'string') {
        const namespace = args[1];

        namespaces[namespace] = (...namespaceArgs: unknown[]) => {
          calls.push({args: namespaceArgs, namespace});

          if (
            namespaceArgs[0] === 'inline' &&
            typeof namespaceArgs[1] === 'object' &&
            namespaceArgs[1] !== null
          ) {
            const inlineOptions = namespaceArgs[1] as {
              elementOrSelector: string;
            };
            const mount = document.querySelector(
              inlineOptions.elementOrSelector
            );

            const iframe = document.createElement('iframe');

            iframe.src =
              'https://www.cal.eu/lesmainsdeserenite/embed?layout=month_view&useSlotsViewOnSmallScreen=true&embedType=inline&embed=lesmainsdeserenite';
            mount?.append(iframe);
          }

          if (
            namespaceArgs[0] === 'on' &&
            typeof namespaceArgs[1] === 'object' &&
            namespaceArgs[1] !== null
          ) {
            const listener = namespaceArgs[1] as {
              action: string;
              callback: (...callbackArgs: unknown[]) => void;
            };

            listeners[listener.action] = listener.callback;
          }
        };
      }
    };

    Object.assign(cal, {ns: namespaces});
    Object.assign(globalThis, {
      Cal: cal,
      gtag: (...args: unknown[]) => analyticsCalls.push(args),
      __calEmbedTest: {analyticsCalls, calls, listeners},
    });
  });

  await page.goto('/reserver-en-ligne');

  const embedRoot = page.locator('[data-cal-embed]');

  await expect(embedRoot).toHaveAttribute(
    'data-cal-embed-link',
    'lesmainsdeserenite'
  );
  await expect(embedRoot).not.toHaveAttribute('data-cal-link');

  const embedConfiguration = await page.evaluate(() => {
    const testState = (
      globalThis as unknown as {
        __calEmbedTest: {
          calls: Array<{args: unknown[]; namespace?: string}>;
        };
      }
    ).__calEmbedTest;

    return testState.calls;
  });

  expect(embedConfiguration).toContainEqual({
    args: ['init', 'lesmainsdeserenite', {origin: 'https://www.cal.eu'}],
  });
  expect(embedConfiguration).toContainEqual({
    namespace: 'lesmainsdeserenite',
    args: [
      'inline',
      {
        elementOrSelector: '#cal-inline-lesmainsdeserenite',
        calLink: 'lesmainsdeserenite',
        config: {
          layout: 'month_view',
          useSlotsViewOnSmallScreen: true,
        },
      },
    ],
  });

  const uiCall = embedConfiguration.find(
    ({args, namespace}) =>
      namespace === 'lesmainsdeserenite' && args[0] === 'ui'
  );
  expect(uiCall?.args[1]).toMatchObject({
    theme: 'light',
    hideEventTypeDetails: false,
    cssVarsPerTheme: {
      light: {
        'cal-brand': '#7C9F8A',
        'cal-bg': '#FFFFFF',
        'cal-border-booker-width': '1px',
        radius: '0.75rem',
      },
    },
  });

  await page.evaluate(() => {
    const testState = (
      globalThis as unknown as {
        __calEmbedTest: {
          analyticsCalls: unknown[][];
          listeners: Record<string, (...args: unknown[]) => void>;
        };
      }
    ).__calEmbedTest;

    Object.assign(globalThis, {
      gtag: (...args: unknown[]) => testState.analyticsCalls.push(args),
    });
    testState.listeners.linkReady();
    const payload = {
      detail: {
        data: {
          email: 'not-sent@example.com',
          name: 'Not sent',
          phone: '+33000000000',
        },
      },
    };
    testState.listeners.bookingSuccessfulV2(payload);
    testState.listeners.bookingSuccessfulV2(payload);
  });

  await expect(page.locator('[data-cal-embed]')).toHaveAttribute(
    'data-cal-state',
    'ready'
  );

  const analyticsCalls = await page.evaluate(
    () =>
      (
        globalThis as unknown as {
          __calEmbedTest: {analyticsCalls: unknown[][]};
        }
      ).__calEmbedTest.analyticsCalls
  );

  expect(analyticsCalls).toEqual([
    [
      'event',
      'booking_completed',
      {
        booking_surface: 'embedded_selector',
        cal_link: 'lesmainsdeserenite',
      },
    ],
  ]);

  const resetButton = page.getByRole('button', {
    name: 'Choisir un autre soin',
  });

  await expect(resetButton).toBeHidden();

  await page.evaluate(() => {
    const testState = (
      globalThis as unknown as {
        __calEmbedTest: {
          listeners: Record<string, (...args: unknown[]) => void>;
        };
      }
    ).__calEmbedTest;

    testState.listeners.eventTypeSelected();
  });

  await expect(resetButton).toBeVisible();
  await expect(resetButton).toBeEnabled();
  await resetButton.click();
  await expect(page.locator('[data-cal-embed]')).toHaveAttribute(
    'data-cal-state',
    'loading'
  );
  await expect(resetButton).toBeHidden();
  await expect(page.locator('#cal-inline-lesmainsdeserenite')).toBeFocused();
  await expect(
    page.getByText('Retour à la sélection des soins…')
  ).toBeVisible();

  await page.evaluate(() => {
    const testState = (
      globalThis as unknown as {
        __calEmbedTest: {
          listeners: Record<string, (...args: unknown[]) => void>;
        };
      }
    ).__calEmbedTest;

    testState.listeners.linkReady();
    testState.listeners.eventTypeSelected();
  });

  await expect(resetButton).toBeVisible();
  await resetButton.click();

  const resetResults = await page.evaluate(() => {
    const testState = (
      globalThis as unknown as {
        __calEmbedTest: {
          analyticsCalls: unknown[][];
          calls: Array<{args: unknown[]; namespace?: string}>;
          listeners: Record<string, (...args: unknown[]) => void>;
        };
      }
    ).__calEmbedTest;

    testState.listeners.linkReady();

    return {
      analyticsCalls: testState.analyticsCalls,
      iframeCount: document.querySelectorAll(
        '#cal-inline-lesmainsdeserenite iframe'
      ).length,
      initCallCount: testState.calls.filter(({args}) => args[0] === 'init')
        .length,
      inlineCallCount: testState.calls.filter(
        ({args, namespace}) =>
          namespace === 'lesmainsdeserenite' && args[0] === 'inline'
      ).length,
      listenerCallCounts: Object.fromEntries(
        [
          'eventTypeSelected',
          'linkReady',
          'linkFailed',
          'bookingSuccessfulV2',
        ].map((action) => [
          action,
          testState.calls.filter(
            ({args, namespace}) =>
              namespace === 'lesmainsdeserenite' &&
              args[0] === 'on' &&
              (args[1] as {action?: string})?.action === action
          ).length,
        ])
      ),
    };
  });

  expect(resetResults).toEqual({
    analyticsCalls: [
      [
        'event',
        'booking_completed',
        {
          booking_surface: 'embedded_selector',
          cal_link: 'lesmainsdeserenite',
        },
      ],
      [
        'event',
        'booking_selector_reset',
        {
          booking_surface: 'embedded_selector',
          cal_link: 'lesmainsdeserenite',
        },
      ],
      [
        'event',
        'booking_selector_reset',
        {
          booking_surface: 'embedded_selector',
          cal_link: 'lesmainsdeserenite',
        },
      ],
    ],
    iframeCount: 1,
    initCallCount: 1,
    inlineCallCount: 1,
    listenerCallCounts: {
      eventTypeSelected: 1,
      linkReady: 1,
      linkFailed: 1,
      bookingSuccessfulV2: 1,
    },
  });
});

test('shows the localized direct-booking fallback if the Cal script is blocked', async ({
  page,
}) => {
  await page.route('https://app.cal.eu/embed/embed.js', async (route) => {
    await route.abort('blockedbyclient');
  });

  await page.goto('/en/book-online');

  await expect(
    page.getByText('The booking calendar cannot be displayed at the moment.')
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Book directly on Cal.eu'})
  ).toHaveAttribute('href', 'https://www.cal.eu/lesmainsdeserenite');
});
