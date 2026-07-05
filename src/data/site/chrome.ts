import type {Locale, SiteChromeData} from './types';

export const chrome = {
  fr: {
    header: {
      tagline: 'Praticienne bien-être',
      links: {
        home: 'Accueil',
        massages: 'Soins',
        program: 'Programmes',
        about: 'À propos',
        reserve: 'Réserver',
        contact: 'Contact',
      },
    },
    footer: {
      tagline: 'Soin bien-être',
      links: {
        massages: 'Soins',
        program: 'Programmes',
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
      tagline: 'Wellness practitioner',
      links: {
        home: 'Home',
        massages: 'Treatments',
        program: 'Programs',
        about: 'About',
        reserve: 'Book',
        contact: 'Contact',
      },
    },
    footer: {
      tagline: 'Wellness massage',
      links: {
        massages: 'Treatments',
        program: 'Programs',
        about: 'About',
        reserve: 'Book',
        contact: 'Contact',
        legal: 'Legal notice (FR)',
        privacy: 'Privacy policy (FR)',
      },
    },
  },
} satisfies Record<Locale, SiteChromeData>;
