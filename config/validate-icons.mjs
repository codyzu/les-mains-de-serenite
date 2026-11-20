// @ts-check
import {glob, readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {joinBasePath} from './base-path.mjs';

const iconClassPattern = /^i-lucide-[\w\-]+$/v;

/**
 Read the Lucide classes backed by UnoCSS SVG rules.

 @param {string} css - Compiled stylesheet content.
 */
function getStyledIcons(css) {
  const rules = css.matchAll(
    /(?:^|[\{\}])(?<selectors>[^\{\}]+)\{(?=[^\{\}]*--un-icon:\s*url\(["']?data:image\/svg\+xml)/gv,
  );

  return rules
    .flatMap((rule) => (rule.groups?.selectors ?? '').split(','))
    .map((selector) => selector.trim())
    .filter((selector) => selector.startsWith('.'))
    .map((selector) => selector.slice(1))
    .filter((name) => iconClassPattern.test(name));
}

/**
 Check that each rendered Lucide class has an SVG rule in the page's CSS.

 @param {{dir: URL}} options - Astro's build output location.
 */
async function checkRenderedIcons({dir}) {
  const outputDirectory = fileURLToPath(dir);
  const base = joinBasePath('/');
  /** @type {Map<string, Promise<string[]>>} */
  const stylesheets = new Map();

  const pages = await Array.fromAsync(
    glob('**/*.html', {cwd: outputDirectory}),
  );
  const missingByPage = await Promise.all(
    pages.map(async (page) => {
      const html = await readFile(path.join(outputDirectory, page), 'utf8');
      const usedIcons = new Set(
        html
          .matchAll(/\sclass="(?<classes>[^"]*)"/gv)
          .flatMap(([, value]) => value.split(/\s+/v))
          .filter((name) => iconClassPattern.test(name)),
      );
      if (usedIcons.size === 0) {
        return [];
      }

      const localStylesheets = html
        .matchAll(/<link rel="stylesheet" href="(?<href>[^"]+)"/gv)
        .map(([, href]) => href)
        .filter((href) => href.startsWith(base) && !href.startsWith('//'));

      const linkedIcons = await Promise.all(
        localStylesheets.map((href) => {
          const cached = stylesheets.get(href);
          if (cached) {
            return cached;
          }

          const icons = readFile(
            path.join(outputDirectory, href.slice(base.length)),
            'utf8',
          ).then((css) => getStyledIcons(css).toArray());
          stylesheets.set(href, icons);
          return icons;
        }),
      );
      const inlineIcons = html
        .matchAll(/<style(?:\s[^>]*)?>(?<css>.*?)<\/style>/gsv)
        .flatMap(([, css]) => getStyledIcons(css));
      const styledIcons = new Set([...linkedIcons.flat(), ...inlineIcons]);

      return usedIcons
        .values()
        .filter((name) => !styledIcons.has(name))
        .map((name) => `${page}: ${name}`)
        .toArray();
    }),
  );
  const missing = missingByPage.flat();
  if (missing.length > 0) {
    throw new Error(
      `Missing Lucide icon CSS:\n${missing.toSorted((left, right) => left.localeCompare(right)).join('\n')}\nCheck the icon names and UnoCSS content scanning.`,
    );
  }
}

export const validateIcons = {
  name: 'validate-icons',
  hooks: {'astro:build:done': checkRenderedIcons},
};
