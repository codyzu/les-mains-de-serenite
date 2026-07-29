/* eslint-disable no-await-in-loop -- Screenshot captures are intentionally sequential to keep output deterministic. */
/* eslint-disable unicorn/isolated-functions -- Playwright evaluation callbacks intentionally run in the browser context. */
import {mkdir} from 'node:fs/promises';
import net from 'node:net';
import path from 'node:path';
import process from 'node:process';
import {dev} from 'astro';
import {
  chromium,
  type Browser,
  type BrowserContextOptions,
  type Page,
} from '@playwright/test';

const host = '127.0.0.1';
const navigationTimeout = 30_000;
const root = process.cwd();
const screenshotRoutes = [
  '/',
  '/soins/',
  '/programmes/',
  '/soins/drainage-lymphatique/',
  '/soins/maderotherapie/',
  '/programmes/ventre-leger-jambes-legeres/',
  '/programmes/cure-fusion/',
] as const satisfies readonly string[];

const profiles = [
  {
    name: 'desktop',
    options: {
      viewport: {width: 1440, height: 1200},
      deviceScaleFactor: 1,
      reducedMotion: 'reduce',
    },
  },
  {
    name: 'mobile',
    options: {
      viewport: {width: 390, height: 844},
      deviceScaleFactor: 1,
      reducedMotion: 'reduce',
      isMobile: true,
      hasTouch: true,
    },
  },
] as const satisfies ReadonlyArray<{
  name: string;
  options: BrowserContextOptions;
}>;

type CaptureTarget = {
  name: string;
  url: string;
};

type AstroDevServer = Awaited<ReturnType<typeof dev>>;

let astroServer: AstroDevServer | undefined;
let browser: Browser | undefined;
let cleanupPromise: Promise<void> | undefined;

class UsageError extends Error {}

function usage(message: string): never {
  throw new UsageError(message);
}

function screenshotName(pathname: string): string {
  const segments = pathname
    .split('/')
    .filter(Boolean)
    .map((segment) => {
      try {
        return decodeURIComponent(segment);
      } catch {
        return segment;
      }
    })
    .map((segment) => segment.replaceAll(/[^\w.]+/gv, '-'))
    .filter(Boolean);

  return segments.length === 0 ? 'home.png' : `${segments.join('--')}.png`;
}

function timestamp(): string {
  return new Date()
    .toISOString()
    .replaceAll(':', '-')
    .replace(/\.\d{3}Z$/v, 'Z');
}

async function availablePort(): Promise<number> {
  const server = net.createServer();
  await new Promise<void>((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, host, resolve);
  });

  const address = server.address();
  if (address === null || typeof address === 'string') {
    server.close();
    throw new Error('Could not allocate a local port for Astro.');
  }

  await new Promise<void>((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });

  return address.port;
}

async function startAstro(): Promise<string> {
  const port = await availablePort();
  astroServer = await dev({
    root,
    server: {host, port},
  });
  const baseUrl = `http://${host}:${astroServer.address.port}`;
  console.log(`Astro ready at ${baseUrl}`);
  return baseUrl;
}

async function settlePage(page: Page): Promise<void> {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-delay: 0s !important;
        animation-duration: 0s !important;
        transition-delay: 0s !important;
        transition-duration: 0s !important;
      }
    `,
  });

  await page.evaluate(async () => {
    await Promise.race([
      document.fonts.ready,
      new Promise<void>((resolve) => {
        setTimeout(resolve, 10_000);
      }),
    ]);

    const scrollStep = Math.max(Math.floor(window.innerHeight * 0.8), 400);
    let steps = 0;
    for (
      let top = 0;
      top < document.documentElement.scrollHeight && steps < 200;
      top += scrollStep
    ) {
      window.scrollTo(0, top);
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 75);
      });
      steps += 1;
    }

    await Promise.race([
      Promise.all(
        [...document.images].map(async (image) => {
          if (!image.complete) {
            await new Promise<void>((resolve) => {
              const finish = () => {
                clearTimeout(timeout);
                resolve();
              };

              const timeout = setTimeout(finish, 5000);
              image.addEventListener('load', finish, {once: true});
              image.addEventListener('error', finish, {once: true});
            });
          }

          try {
            await image.decode();
          } catch {}
        }),
      ),
      new Promise<void>((resolve) => {
        setTimeout(resolve, 5000);
      }),
    ]);

    window.scrollTo(0, 0);
    await new Promise<void>((resolve) => {
      setTimeout(resolve, 250);
    });
  });
}

async function capturePage(
  page: Page,
  target: CaptureTarget,
  outputPath: string,
): Promise<void> {
  const response = await page.goto(target.url, {
    waitUntil: 'domcontentloaded',
    timeout: navigationTimeout,
  });

  if (!response) {
    throw new Error('Navigation did not return an HTTP response.');
  }

  if (!response.ok()) {
    throw new Error(`Navigation returned HTTP ${response.status()}.`);
  }

  await settlePage(page);
  await mkdir(path.dirname(outputPath), {recursive: true});
  await page.screenshot({path: outputPath, fullPage: true});
}

async function cleanup(): Promise<void> {
  cleanupPromise ??= (async () => {
    try {
      await browser?.close();
    } catch {}

    browser = undefined;

    try {
      await astroServer?.stop();
    } catch {
      // The server may already be closed after an initialization failure.
    }

    astroServer = undefined;
  })();

  await cleanupPromise;
}

function installSignalHandlers(): void {
  for (const [signal, exitCode] of [
    ['SIGINT', 130],
    ['SIGTERM', 143],
  ] as const) {
    process.once(signal, () => {
      console.error(`\nReceived ${signal}; cleaning up.`);
      void (async () => {
        try {
          await cleanup();
        } finally {
          process.exit(exitCode);
        }
      })();
    });
  }
}

async function main(): Promise<void> {
  const rawArguments = process.argv.slice(2);
  const arguments_ =
    rawArguments[0] === '--' ? rawArguments.slice(1) : rawArguments;
  const unknownFlag = arguments_.find((argument) => argument.startsWith('--'));
  if (unknownFlag !== undefined) {
    usage(`Unknown option: ${unknownFlag}`);
  }

  if (arguments_.length > 1) {
    usage('Expected zero or one path or URL argument.');
  }

  const argument = arguments_[0];
  let targets: CaptureTarget[];

  if (argument === undefined || argument.startsWith('/')) {
    if (argument?.startsWith('//')) {
      usage('Relative paths must begin with one slash.');
    }

    const baseUrl = await startAstro();
    const routes = argument === undefined ? [...screenshotRoutes] : [argument];
    targets = routes.map((route) => ({
      name: screenshotName(new URL(route, baseUrl).pathname),
      url: new URL(route, baseUrl).href,
    }));
  } else {
    let url: URL;
    try {
      url = new URL(argument);
    } catch {
      usage(`Invalid path or URL: ${argument}`);
    }

    if (!['http:', 'https:'].includes(url.protocol)) {
      usage(`URL must use HTTP or HTTPS: ${argument}`);
    }

    targets = [{name: screenshotName(url.pathname), url: url.href}];
  }

  const runDirectory = path.join(root, 'screenshots', timestamp());
  const failures: string[] = [];
  let completed = 0;

  browser = await chromium.launch();

  for (const profile of profiles) {
    const context = await browser.newContext(profile.options);
    try {
      await context.route(
        /https:\/\/(?:[^\/]+\.)?(?:googletagmanager\.com|google-analytics\.com|analytics\.google\.com|cloudflareinsights\.com)\//v,
        async (route) => {
          await route.fulfill({status: 204, body: ''});
        },
      );

      for (const target of targets) {
        const page = await context.newPage();
        const outputPath = path.join(runDirectory, profile.name, target.name);

        try {
          await capturePage(page, target, outputPath);
          completed += 1;
          console.log(`Created ${path.relative(root, outputPath)}`);
        } catch (error) {
          const message =
            error instanceof Error ? error.message : String(error);
          failures.push(`${profile.name} ${target.url}: ${message}`);
          console.error(`Failed ${profile.name} ${target.url}: ${message}`);
        } finally {
          await page.close();
        }
      }
    } finally {
      await context.close();
    }
  }

  console.log(
    `\nCreated ${completed} screenshot${completed === 1 ? '' : 's'} in ${path.relative(root, runDirectory)}`,
  );
  if (failures.length > 0) {
    console.error(
      `${failures.length} capture${failures.length === 1 ? '' : 's'} failed.`,
    );
    process.exitCode = 1;
  }
}

installSignalHandlers();

try {
  await main();
} catch (error) {
  if (error instanceof UsageError) {
    console.error(error.message);
    console.error(
      'Usage: pnpm screenshots -- [/path/ | https://example.com/path/]',
    );
    process.exitCode = 1;
  } else {
    throw error;
  }
} finally {
  await cleanup();
}

// Astro's development API can retain background handles after stop(). This is
// a one-shot CLI, so exit explicitly once browser and server cleanup finishes.
// eslint-disable-next-line unicorn/no-process-exit -- This file is an executable CLI.
process.exit(process.exitCode ?? 0);
