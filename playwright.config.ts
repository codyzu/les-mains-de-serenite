/* eslint-disable @typescript-eslint/naming-convention -- Playwright's public config keys use established camel-case names. */
import process from 'node:process';
import {defineConfig, devices} from '@playwright/test';

const port = Number(process.env.PLAYWRIGHT_PORT ?? 4321);
const baseUrl = `http://127.0.0.1:${port}`;
const previewCommand = `pnpm run preview --host 127.0.0.1 --port ${port}`;
const isCi = process.env.CI !== undefined;
// CI builds first so tests preview the exact dist/ artifact that will be
// deployed. Local test runs still build automatically from a clean checkout.
const webServerCommand = isCi
  ? previewCommand
  : `pnpm run build && ${previewCommand}`;

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: isCi,
  retries: isCi ? 2 : 0,
  reporter: isCi ? 'github' : 'list',
  timeout: 30_000,
  expect: {
    timeout: 5000,
  },
  use: {
    baseURL: baseUrl,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'desktop-chromium',
      use: {...devices['Desktop Chrome']},
    },
    {
      name: 'mobile-safari',
      grep: /@(?:critical|mobile|booking)/v,
      use: {...devices['iPhone 15']},
    },
    {
      name: 'mobile-chrome',
      grep: /@critical/v,
      use: {...devices['Pixel 7']},
    },
  ],
  webServer: {
    command: webServerCommand,
    url: baseUrl,
    reuseExistingServer: !isCi,
    timeout: 120_000,
  },
});
