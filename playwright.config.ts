/* eslint-disable @typescript-eslint/naming-convention */
import process from 'node:process';
import {defineConfig} from '@playwright/test';

const port = 4321;
const baseUrl = `http://127.0.0.1:${port}`;

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
  webServer: {
    command: `pnpm run build && pnpm run preview --host 127.0.0.1 --port ${port}`,
    url: baseUrl,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
