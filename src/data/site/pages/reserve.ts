// @unocss-include
import type {Locale, ReservePageData} from '../types';

export const reservePages = {
  fr: {
    meta: {
      title: 'Redirection...',
      description: 'Redirection vers la reservation en ligne.',
    },
    redirect: {
      title: 'Redirection...',
      kicker: 'Reservation',
      heading: 'Redirection en cours...',
      description: 'Vous allez etre redirige(e) vers la reservation en ligne.',
      ctaText: 'Continuer maintenant',
      delayMs: 600,
    },
  },
  en: {
    meta: {
      title: 'Booking Redirect | Les Mains de Sérénité',
      description:
        'Redirecting you to the online booking page for Les Mains de Sérénité.',
    },
    redirect: {
      title: 'Redirecting...',
      kicker: 'Booking',
      heading: 'Redirecting...',
      description: 'You are being redirected to online booking.',
      ctaText: 'Continue now',
      delayMs: 600,
    },
  },
} satisfies Record<Locale, ReservePageData>;
