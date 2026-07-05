import type {LocalePathMap} from './types';

export const localizedPagePaths = {
  home: {
    fr: '/',
    en: '/en/',
  },
  soins: {
    fr: '/soins/',
    en: '/en/massages/',
  },
  programs: {
    fr: '/programmes/',
    en: '/en/programs/',
  },
  program: {
    fr: '/programmes/ventre-leger-jambes-legeres/',
    en: '/en/programs/light-belly-light-legs/',
  },
  cureFusion: {
    fr: '/programmes/cure-fusion/',
    en: '/en/programs/cure-fusion/',
  },
  maderotherapie: {
    fr: '/soins/maderotherapie/',
    en: '/en/massages/maderotherapy/',
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
