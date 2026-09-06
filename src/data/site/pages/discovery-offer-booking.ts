import type {DiscoveryOfferBookingPageData, Locale} from '../types';
import {localizedPagePaths} from '../paths';
import {discoveryOfferCalLink} from '../shared';

export const discoveryOfferBookingPages = {
  fr: {
    meta: {
      title: 'Réserver l’offre de rentrée à Annecy | Les Mains de Sérénité',
      description:
        'Réservez un massage relaxant de 1 h à 70 € au lieu de 80 € chez Les Mains de Sérénité à Annecy. Offre réservée aux femmes, paiement sur place.',
    },
    calLink: discoveryOfferCalLink,
    hero: {
      kicker: 'Offre de rentrée',
      title: 'Votre massage relaxant de 1 h à 70 €',
      description:
        'Et si, à la rentrée, vous preniez aussi soin de vous\u{A0}? Entre la reprise du travail, l’organisation du quotidien et l’attention portée aux autres, la rentrée laisse parfois peu de place pour soi. Offrez-vous une heure de massage relaxant et personnalisé pour relâcher les tensions, souffler et retrouver un moment de calme. 70 € au lieu de 80 €, soit 10 € de réduction pour la rentrée.',
      reassuranceItems: [
        {icon: 'i-lucide-clock-3', label: '60 minutes'},
        {icon: 'i-lucide-tag', label: '70 €'},
        {icon: 'i-lucide-sparkles', label: 'Offre de rentrée'},
        {icon: 'i-lucide-flower', label: 'Réservé aux femmes'},
      ],
    },
    scheduler: {
      title: 'Choisissez votre créneau',
      description: 'Sélectionnez la date et l’heure qui vous conviennent.',
      regionLabel: 'Réservation de l’offre de rentrée en ligne',
    },
    allOptions: {
      label: 'Voir toutes les options de réservation',
      href: localizedPagePaths.reserveOnline.fr,
    },
  },
  en: {
    meta: {
      title: 'Book the Back-to-School Offer | Les Mains de Sérénité Annecy',
      description:
        'Book a one-hour relaxing massage for €70 instead of €80 at Les Mains de Sérénité in Annecy. Women-only service, payment on site.',
    },
    calLink: discoveryOfferCalLink,
    hero: {
      kicker: 'Back-to-school offer',
      title: 'Your one-hour relaxing massage for €70',
      description:
        'This back-to-school season, make time for yourself too. Between returning to work, organising everyday life and caring for others, the back-to-school season can leave little time for yourself. Enjoy an hour of relaxing, personalised massage to release tension, take a breath and find a moment of calm. €70 instead of €80 — save €10 for the back-to-school season.',
      reassuranceItems: [
        {icon: 'i-lucide-clock-3', label: '60 minutes'},
        {icon: 'i-lucide-tag', label: '€70'},
        {icon: 'i-lucide-sparkles', label: 'Back-to-school offer'},
        {icon: 'i-lucide-flower', label: 'For women only'},
      ],
    },
    scheduler: {
      title: 'Choose your time',
      description: 'Select the date and time that suit you.',
      regionLabel: 'Online booking for the back-to-school offer',
    },
    allOptions: {
      label: 'View all booking options',
      href: localizedPagePaths.reserveOnline.en,
    },
  },
} satisfies Record<Locale, DiscoveryOfferBookingPageData>;
