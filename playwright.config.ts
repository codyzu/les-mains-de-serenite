/* eslint-disable @typescript-eslint/naming-convention */
import process from 'node:process';
import {defineConfig, devices} from '@playwright/test';

const port = 4321;
const baseUrl = `http://127.0.0.1:${port}`;
const previewCommand = `pnpm run preview --host 127.0.0.1 --port ${port}`;
// CI builds first so tests preview the exact dist/ artifact that will be
// deployed. Local test runs still build automatically from a clean checkout.
const webServerCommand = process.env.CI
  ? previewCommand
  : `pnpm run build && ${previewCommand}`;

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
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
      grep: /@(?:critical|mobile|booking)/,
      use: {...devices['iPhone 15']},
    },
    {
      name: 'mobile-chrome',
      grep: /@critical/,
      use: {...devices['Pixel 7']},
    },
  ],
  webServer: {
    command: webServerCommand,
    url: baseUrl,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
