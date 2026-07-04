import type {Locale, SiteChromeData} from './types';

export const chrome = {
  fr: {
    header: {
      tagline: 'Massothérapeute',
      links: {
        home: 'Accueil',
        massages: 'Massages',
        program: 'Programmes',
        about: 'À propos',
        reserve: 'Réserver',
        contact: 'Contact',
      },
    },
    footer: {
      tagline: 'Massage bien-être',
      links: {
        massages: 'Massages',
        about: 'À propos',
        reserve: 'Réserver',
        contact: 'Contact',
        legal: 'Mentions légales',
        privacy: 'Politique de confidentialité',
      },
    },
  },
  en: {
    header: {
      tagline: 'Massothérapeute',
      links: {
        home: 'Home',
        massages: 'Massages',
        program: 'Programs',
        about: 'About',
        reserve: 'Book',
        contact: 'Contact',
      },
    },
    footer: {
      tagline: 'Wellness massage',
      links: {
        massages: 'Massages',
        about: 'About',
        reserve: 'Book',
        contact: 'Contact',
        legal: 'Legal notice (FR)',
        privacy: 'Privacy policy (FR)',
      },
    },
  },
} satisfies Record<Locale, SiteChromeData>;
