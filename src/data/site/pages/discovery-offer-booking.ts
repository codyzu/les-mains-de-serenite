import type {DiscoveryOfferBookingPageData, Locale} from '../types';
import {localizedPagePaths} from '../paths';
import {discoveryOfferCalLink} from '../shared';

export const discoveryOfferBookingPages = {
  fr: {
    meta: {
      title: 'Réserver l’offre découverte à Annecy | Les Mains de Sérénité',
      description:
        'Réservez une première séance personnalisée de 45 minutes à 55 € chez Les Mains de Sérénité à Annecy. Offre réservée aux femmes, paiement sur place.',
    },
    calLink: discoveryOfferCalLink,
    hero: {
      kicker: 'Offre découverte',
      title: 'Votre première séance de 45 min à 55 €',
      description:
        'Une première séance personnalisée pour découvrir l’approche, relâcher les tensions et prendre un vrai moment pour vous.',
      reassuranceItems: [
        {icon: 'i-lucide-clock-3', label: '45 minutes'},
        {icon: 'i-lucide-tag', label: '55 €'},
        {icon: 'i-lucide-sparkles', label: 'Première séance'},
        {icon: 'i-lucide-flower', label: 'Réservé aux femmes'},
      ],
    },
    scheduler: {
      title: 'Choisissez votre créneau',
      description:
        'Vous réservez directement l’offre découverte : il ne reste qu’à choisir la date et l’heure qui vous conviennent.',
      regionLabel: 'Réservation de l’offre découverte en ligne',
    },
    allOptions: {
      label: 'Voir toutes les options de réservation',
      href: localizedPagePaths.reserveOnline.fr,
    },
  },
  en: {
    meta: {
      title: 'Book the Discovery Offer | Les Mains de Sérénité Annecy',
      description:
        'Book a personalized first 45-minute session for €55 at Les Mains de Sérénité in Annecy. Women-only service, payment on site.',
    },
    calLink: discoveryOfferCalLink,
    hero: {
      kicker: 'Discovery offer',
      title: 'Your first 45-minute session for €55',
      description:
        'A personalized first session to discover the approach, release tension, and take a real moment for yourself.',
      reassuranceItems: [
        {icon: 'i-lucide-clock-3', label: '45 minutes'},
        {icon: 'i-lucide-tag', label: '€55'},
        {icon: 'i-lucide-sparkles', label: 'First session'},
        {icon: 'i-lucide-flower', label: 'For women only'},
      ],
    },
    scheduler: {
      title: 'Choose your time',
      description:
        'You are booking the discovery offer directly; simply choose the date and time that suit you.',
      regionLabel: 'Online booking for the discovery offer',
    },
    allOptions: {
      label: 'View all booking options',
      href: localizedPagePaths.reserveOnline.en,
    },
  },
} satisfies Record<Locale, DiscoveryOfferBookingPageData>;
