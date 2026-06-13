# Repository Guidelines

## Project Overview

This is an Astro static site for Les Mains de Serenite. The site is bilingual, with French pages at the root and English pages under `src/pages/en/`.

Core stack:

- Astro 5 with strict TypeScript config.
- UnoCSS via `@unocss/astro`.
- UnoCSS Tailwind 4-style utilities through `presetWind4`.
- XO for linting, with Astro ESLint recommended rules.
- pnpm for dependency and script management.

## Commands

Run commands from the repository root.

- Install dependencies: `pnpm install`
- Start the local dev server: `pnpm run dev --host`
- Build: `pnpm run build`
- Preview a built site: `pnpm run preview`
- Lint: `pnpm run lint`
- Refresh committed local font assets after font config changes: `pnpm run fonts:refresh`

When passing `--host` to the dev server, pass it directly as shown above. Do not add an extra `--` separator.

## Project Structure

- `src/pages/`: Astro routes. French routes live at the root; English routes live in `src/pages/en/`.
- `src/page-templates/`: Shared page compositions used by locale-specific route files.
- `src/components/`: Reusable Astro components for sections and site chrome.
- `src/layouts/`: Base document layout and site layout wrappers.
- `src/data/site.ts`: Centralized business data, localized page content, links, metadata, and typed content structures.
- `src/utils/`: Small helpers for URLs, phone numbers, and address formatting.
- `src/assets/`: Images imported by Astro components/pages.
- `assets/`: Source/design assets that are not necessarily imported directly.
- `public/`: Static files served as-is, including favicons, manifest, robots file, and committed local font files.
- `config/base-path.mjs`: Base path helpers driven by `SITE_BASE`.

## Astro Patterns

- Keep route files thin. They should usually select the locale, load data from `src/data/site.ts`, and pass it into a page template.
- Put shared page assembly in `src/page-templates/`. Page templates exist so French and English route files can render the same structure with different localized data.
- Keep repeated UI in `src/components/`.
- Use `Layout.astro`/`BaseLayout.astro` for SEO, canonical/alternate links, analytics, and document-level behavior.
- Prefer imported image assets from `src/assets/` when Astro should optimize or fingerprint them.
- Use `public/` only for files that must be served at a stable path.

## Content And Localization

- Treat `src/data/site.ts` as the source of truth for business details, localized copy, CTAs, SEO metadata, route paths, booking/WhatsApp links, and typed page data.
- Keep French and English content in sync when changing user-facing content, navigation, page paths, metadata, or CTAs.
- When adding a new localized page, add thin route files for each locale and a shared page template when the page structure is the same.
- The route files should map locale-specific URLs to shared templates; the templates should receive typed localized data rather than embedding copy directly.
- Use the existing `Locale`, path map, and localized data helpers instead of hard-coded locale branching in components.

## Styling

- Use UnoCSS utility classes and the project shortcuts defined in `uno.config.ts`.
- The UnoCSS setup uses:
  - `presetWind4` for Tailwind 4-style utilities.
  - `presetTypography`.
  - `presetIcons` with the Lucide icon collection.
  - `presetWebFonts` with local font processing.
  - `transformerDirectives` and `transformerVariantGroup`.
- Prefer theme tokens from `uno.config.ts` such as `brand`, `surface`, `accent`, and `ink`.
- Reuse shortcuts such as `container-page`, `section-pad`, `heading-xl`, `heading-lg`, `body-base`, `btn-primary`, and `card-soft`.
- Avoid introducing a parallel CSS system unless the existing UnoCSS setup cannot express the requirement.

## Fonts

UnoCSS `preset-web-fonts` writes local font assets to `public/assets/fonts/`. These generated font files are committed so clean builds have the assets available.

Run `pnpm run fonts:refresh` only when intentionally changing font configuration or regenerating local font files.

## Base Paths And URLs

- `SITE_BASE` controls the Astro `base` path through `config/base-path.mjs`.
- Use the existing URL helpers in `src/utils/url.ts` and `config/base-path.mjs` for base-aware links.
- Be careful with canonical URLs, alternate language links, static asset paths, and manifest/favicon links when changing routing.

## Code Style

- Use TypeScript types for shared data shapes.
- Follow the existing Astro component style: frontmatter first, typed props, then markup, then scoped styles if needed.
- Keep semicolons and formatting consistent with XO/Prettier.
- Component filenames are PascalCase. Page filenames are kebab-case, except `index.astro`.
- Do not manually edit generated build output in `dist/`.

## Validation

Before handing off code changes, run:

```sh
pnpm run lint
```

Run `pnpm run build` when changes affect routes, layouts, Astro config, images, metadata, fonts, base paths, or production-only behavior.
