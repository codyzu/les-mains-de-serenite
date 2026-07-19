# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm fonts:refresh`   | Regenerates committed local web fonts in `public/assets/fonts/` |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm test:e2e`        | Runs the Playwright smoke tests against build output |
| `pnpm test`            | Runs lint, build, and Playwright smoke tests     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## Testing

Playwright smoke tests live in `tests/e2e/` and run against production build
output. Browser-based specs should import `test` and `expect` from
`tests/e2e/fixtures.ts` instead of directly from `@playwright/test`; the shared
fixture blocks Google Analytics and Cloudflare Web Analytics requests during
local and CI test runs.

The default Playwright run uses three projects: Desktop Chromium runs the full
suite, Mobile Safari (WebKit with an iPhone 15 profile) runs tests tagged
`@critical`, `@mobile`, or `@booking`, and Mobile Chrome (Chromium with a Pixel
7 profile) runs only `@critical` tests. Useful focused commands are:

```sh
pnpm exec playwright test
pnpm exec playwright test --project=desktop-chromium
pnpm exec playwright test --project=mobile-safari
pnpm exec playwright test --project=mobile-chrome
pnpm exec playwright test --grep @critical
```

## Fonts

This project uses UnoCSS `preset-web-fonts` with the local font processor.

Generated font files are committed from `public/assets/fonts/` because a clean Astro build may generate them too late to be copied into `dist/` on the first build.

Use `pnpm fonts:refresh` when you intentionally change the font config and want to regenerate the committed font assets.

See [`THIRD_PARTY_LICENSES.md`](./THIRD_PARTY_LICENSES.md) for font licensing details.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
