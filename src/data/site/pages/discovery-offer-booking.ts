import type {DiscoveryOfferBookingPageData, Locale} from '../types';
import {localizedPagePaths} from '../paths';
import {discoveryOfferCalLink} from '../shared';

export const discoveryOfferBookingPages = {
  fr: {
    meta: {
      title: 'Réserver un massage du dos à Annecy | Les Mains de Sérénité',
      description:
        'Réservez un massage du dos et des épaules de 45\u{A0}min à 60\u{A0}€ chez Les Mains de Sérénité à Annecy. Offre réservée aux femmes, paiement sur place.',
    },
    calLink: discoveryOfferCalLink,
    hero: {
      kicker: 'Récupération musculaire',
      title: 'Votre massage du dos de 45\u{A0}min à 60\u{A0}€',
      description:
        'Après un effort ou une journée intense, accordez une pause à votre dos. Un massage ciblé du dos et des épaules, avec une pression adaptée à vos besoins, pour détendre les muscles et retrouver une sensation de souplesse.',
      reassuranceItems: [
        {icon: 'i-lucide-clock-3', label: '45\u{A0}minutes'},
        {icon: 'i-lucide-tag', label: '60\u{A0}€'},
        {icon: 'i-lucide-sparkles', label: 'Récupération musculaire'},
        {icon: 'i-lucide-flower', label: 'Réservé aux femmes'},
      ],
    },
    scheduler: {
      title: 'Choisissez votre créneau',
      description: 'Sélectionnez la date et l’heure qui vous conviennent.',
      regionLabel: 'Réservation du massage du dos en ligne',
    },
    allOptions: {
      label: 'Voir toutes les options de réservation',
      href: localizedPagePaths.reserveOnline.fr,
    },
  },
  en: {
    meta: {
      title: 'Book a Back Massage | Les Mains de Sérénité Annecy',
      description:
        'Book a 45-minute back and shoulder massage for €60 at Les Mains de Sérénité in Annecy. Women-only service, payment on site.',
    },
    calLink: discoveryOfferCalLink,
    hero: {
      kicker: 'Muscle recovery',
      title: 'Your 45-minute back massage for €60',
      description:
        'After exercise or a demanding day, give your back a break. A targeted back and shoulder massage, with pressure adapted to your needs, to relax your muscles and help you feel more supple.',
      reassuranceItems: [
        {icon: 'i-lucide-clock-3', label: '45\u{A0}minutes'},
        {icon: 'i-lucide-tag', label: '€60'},
        {icon: 'i-lucide-sparkles', label: 'Muscle recovery'},
        {icon: 'i-lucide-flower', label: 'For women only'},
      ],
    },
    scheduler: {
      title: 'Choose your time',
      description: 'Select the date and time that suit you.',
      regionLabel: 'Online booking for the back massage',
    },
    allOptions: {
      label: 'View all booking options',
      href: localizedPagePaths.reserveOnline.en,
    },
  },
} satisfies Record<Locale, DiscoveryOfferBookingPageData>;
