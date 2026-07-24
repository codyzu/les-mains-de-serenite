// @ts-check
import process from 'node:process';

/**
 Normalize an optional deployment base path.

 @param {string | undefined} base - Configured deployment base path.
 @returns {string} The normalized base path.
 */
function normalizeBasePath(base) {
  if (!base || base === '/') {
    return '/';
  }

  const withLeadingSlash = base.startsWith('/') ? base : `/${base}`;

  return withLeadingSlash.endsWith('/')
    ? withLeadingSlash.slice(0, -1)
    : withLeadingSlash;
}

/**
 Read the site's configured deployment base path.

 @returns {string} The normalized site base path.
 */
export function getSiteBasePath() {
  return normalizeBasePath(process.env.SITE_BASE);
}

/**
 Join a pathname to the configured deployment base path.

 @param {string} pathname - Site-relative pathname to join.
 @returns {string} The base-aware pathname.
 */
export function joinBasePath(pathname) {
  const basePath = getSiteBasePath();
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;

  return basePath === '/' ? normalizedPath : `${basePath}${normalizedPath}`;
}
