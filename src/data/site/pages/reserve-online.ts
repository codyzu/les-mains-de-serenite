// @unocss-include
import type {Locale, ReserveOnlinePageData} from '../types';
import {localizedPagePaths} from '../paths';
import {getBusinessWhatsappHref} from '../shared';

export const reserveOnlinePages = {
  fr: {
    meta: {
      title: 'Réserver un soin et massage à Annecy | Les Mains de Sérénité',
      description:
        'Réservez votre soin bien-être à Annecy, avec techniques de massage personnalisées. Service réservé aux femmes, réservation simple en ligne, paiement sur place.',
    },
    reserveLink: localizedPagePaths.reserveOnline.fr,
    hero: {
      kicker: 'Réservation en ligne',
      title: 'Réservez votre soin bien-être',
      description:
        'Prenez rendez-vous en quelques instants pour votre prochain moment de bien-être.',
      reassuranceItems: [
        {
          icon: 'i-lucide-flower',
          label: 'Réservé aux femmes',
        },
        {
          icon: 'i-lucide-home',
          label: 'Cadre calme et privé',
        },
        {
          icon: 'i-lucide-sparkles',
          label: 'Séance personnalisée',
        },
        {
          icon: 'i-lucide-clock-3',
          label: '4 durées disponibles',
        },
      ],
      testimonialQuote: 'Un vrai moment de détente, je recommande vivement.',
      testimonialAuthor: 'Marie, Annecy',
    },
    // The public Cal selector is intentionally described by duration. Its
    // option descriptions are owned in Cal.eu and must not be duplicated here.
    scheduler: {
      title: 'Choisissez la durée de votre soin',
      instructionTitle: 'Choisissez votre durée de soin',
      instructionDescription:
        'Touchez une durée ci-dessous pour afficher les créneaux disponibles.',
      selectedInstructionTitle: 'Choisissez votre créneau',
      selectedInstructionDescription:
        'Sélectionnez ensuite la date et l’heure qui vous conviennent.',
      regionLabel: 'Sélecteur de rendez-vous en ligne',
      resetLabel: 'Changer de durée',
      resetStatus: 'Retour à la sélection des durées…',
    },
    contact: {
      title: 'Une question ?',
      subtitle: 'Je vous réponds avec plaisir.',
      whatsappTitle: 'WhatsApp',
      phoneTitle: 'Téléphone',
      emailTitle: 'Email',
      locationTitle: 'Lieu',
      whatsappDescription:
        'Le moyen le plus simple pour obtenir une réponse rapide.',
      phoneDescription: 'Pour en parler directement de vive voix.',
      emailDescription: 'Pour poser votre question tranquillement par écrit.',
      whatsappLabel: 'Écrire sur WhatsApp',
      whatsappEmphasis: true,
      whatsappHref: getBusinessWhatsappHref(
        "Bonjour, j'ai une question sur la durée à choisir avant de réserver."
      ),
    },
  },
  en: {
    meta: {
      title: 'Book Online | Les Mains de Sérénité Annecy',
      description:
        'Book your women-only wellness treatment and massage in Annecy. Easy online scheduling and payment on site.',
    },
    reserveLink: localizedPagePaths.reserveOnline.en,
    hero: {
      kicker: 'Online booking',
      title: 'Book your wellness treatment',
      description: 'Book your next moment of well-being in just a few steps.',
      reassuranceItems: [
        {
          icon: 'i-lucide-flower',
          label: 'Women-only service',
        },
        {
          icon: 'i-lucide-home',
          label: 'Calm and private setting',
        },
        {
          icon: 'i-lucide-sparkles',
          label: 'Personalized session',
        },
        {
          icon: 'i-lucide-clock-3',
          label: '4 durations available',
        },
      ],
      testimonialQuote: 'A truly relaxing moment, I highly recommend it.',
      testimonialAuthor: 'Marie, Annecy',
    },
    // The public Cal selector is intentionally described by duration. Its
    // option descriptions are owned in Cal.eu and must not be duplicated here.
    scheduler: {
      title: 'Choose your treatment duration',
      instructionTitle: 'Choose your treatment duration',
      instructionDescription: 'Tap a duration below to view available times.',
      selectedInstructionTitle: 'Choose your time',
      selectedInstructionDescription:
        'Then select the date and time that suit you.',
      regionLabel: 'Online appointment selector',
      resetLabel: 'Change duration',
      resetStatus: 'Returning to duration selection…',
    },
    contact: {
      title: 'A question?',
      subtitle: 'I’ll be happy to help.',
      whatsappTitle: 'WhatsApp',
      phoneTitle: 'Phone',
      emailTitle: 'Email',
      locationTitle: 'Location',
      whatsappDescription: 'The simplest way to get a quick answer.',
      phoneDescription: 'For a quick conversation by phone.',
      emailDescription: 'To ask your question in writing, at your own pace.',
      whatsappLabel: 'Message on WhatsApp',
      whatsappEmphasis: true,
      whatsappHref: getBusinessWhatsappHref(
        'Hello, I have a question about which session length to choose before booking.'
      ),
    },
  },
} satisfies Record<Locale, ReserveOnlinePageData>;
