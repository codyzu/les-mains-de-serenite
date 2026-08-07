import type {BookingPracticalInfoData, Locale} from './types';

export const bookingPracticalInfo = {
  fr: {
    title: 'À savoir avant de réserver',
    summary:
      'Accueil privé sur rendez-vous · Une cliente à la fois · Règlement sur place en espèces',
    detailsLabel: 'Informations pratiques',
    details:
      'Merci de venir seule afin de préserver le calme et l’intimité du soin. Il n’y a pas de salle d’attente sur place. Merci également d’arriver à l’heure de votre rendez-vous. Les cartes bancaires ne sont pas acceptées. Afin de garantir une tarification juste et équitable pour toutes, nos tarifs sont fixes et non négociables.',
  },
  en: {
    title: 'Before your appointment',
    summary:
      'Private appointment-based welcome · One client at a time · Payment on site in cash',
    detailsLabel: 'Practical information',
    details:
      'Please come alone to preserve the calm and privacy of your treatment. There is no waiting room on site. Please also arrive at the scheduled time. Bank cards are not accepted. To ensure fair and consistent pricing for everyone, our rates are fixed and non-negotiable.',
  },
} satisfies Record<Locale, BookingPracticalInfoData>;
