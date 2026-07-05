import type {Locale, SiteChromeData} from './types';

export const chrome = {
  fr: {
    header: {
      tagline: 'Praticienne bien-être',
      links: {
        home: 'Accueil',
        soins: 'Soins',
        program: 'Programmes',
        about: 'À propos',
        reserve: 'Réserver',
        contact: 'Contact',
      },
    },
    footer: {
      tagline: 'Soin bien-être',
      links: {
        soins: 'Soins',
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
        soins: 'Treatments',
        program: 'Programs',
        about: 'About',
        reserve: 'Book',
        contact: 'Contact',
      },
    },
    footer: {
      tagline: 'Wellness massage',
      links: {
        soins: 'Treatments',
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
