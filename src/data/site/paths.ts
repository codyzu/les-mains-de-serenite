import type {LocalePathMap} from './types';

export const localizedPagePaths = {
  home: {
    fr: '/',
    en: '/en/',
  },
  program: {
    fr: '/programme-ventre-leger-jambes-legeres',
    en: '/en/light-belly-light-legs-program',
  },
  maderotherapie: {
    fr: '/maderotherapie/',
    en: '/en/maderotherapy/',
  },
  reserve: {
    fr: '/reserver',
    en: '/en/book',
  },
  reserveOnline: {
    fr: '/reserver-en-ligne',
    en: '/en/book-online',
  },
} satisfies Record<string, LocalePathMap>;

export const globalPagePaths = {
  mentionsLegales: '/mentions-legales',
  politiqueConfidentialite: '/politique-de-confidentialite',
};
