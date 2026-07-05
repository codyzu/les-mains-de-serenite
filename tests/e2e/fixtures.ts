/* eslint-disable react-hooks/rules-of-hooks */
import {test as base} from '@playwright/test';

const analyticsHosts =
  /https:\/\/(?:[^/]+\.)?(?:googletagmanager\.com|google-analytics\.com|analytics\.google\.com|cloudflareinsights\.com)\//;

export const test = base.extend({
  async page({page}, use) {
    // Browser tests run against production build output, where analytics scripts
    // can be present. Fulfill those requests locally so smoke tests never send
    // Google Analytics or Cloudflare Web Analytics traffic.
    await page.route(analyticsHosts, async (route) => {
      await route.fulfill({status: 204, body: ''});
    });

    await use(page);
  },
});

export {expect} from '@playwright/test';
export type {Locator, Page} from '@playwright/test';
