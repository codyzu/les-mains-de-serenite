import type {BookingPracticalInfoData, Locale} from './types';

export const bookingPracticalInfo = {
  fr: {
    title: 'Un accueil privé, sur rendez-vous',
    description:
      'Vous serez accueillie dans un espace calme et privé à Annecy, réservé à une seule cliente à la fois.',
    paymentTitle: 'Règlement',
    paymentDescription:
      'Aucun paiement en ligne. Le règlement s’effectue sur place en espèces. Les cartes bancaires ne sont pas acceptées.',
    practicalTitle: 'Informations pratiques',
    practicalDescription:
      'Merci de venir seule, sauf accord préalable, et d’arriver à l’heure de votre rendez-vous. Il n’y a pas de salle d’attente sur place.',
  },
  en: {
    title: 'A private, appointment-only welcome',
    description:
      'You will be welcomed in a calm and private space in Annecy, reserved for one client at a time.',
    paymentTitle: 'Payment',
    paymentDescription:
      'No online payment is required. Payment is made on site in cash. Bank cards are not accepted.',
    practicalTitle: 'Practical information',
    practicalDescription:
      'Please come alone unless agreed otherwise, and arrive at the scheduled time. There is no waiting room on site.',
  },
} satisfies Record<Locale, BookingPracticalInfoData>;
