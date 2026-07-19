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
        'Choisissez la durée qui vous convient, puis sélectionnez votre créneau. Chaque séance est adaptée à vos besoins du moment.',
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
          icon: 'i-lucide-wallet',
          label: 'Paiement sur place',
        },
      ],
      testimonialQuote: 'Un vrai moment de détente, je recommande vivement.',
      testimonialAuthor: 'Marie, Annecy',
    },
    // The public Cal selector is intentionally described by duration. Its
    // option descriptions are owned in Cal.eu and must not be duplicated here.
    scheduler: {
      title: 'Choisissez la durée de votre séance',
      description:
        'Sélectionnez la durée qui vous convient. La séance sera adaptée à vos besoins lors du rendez-vous.',
      regionLabel: 'Sélecteur de rendez-vous en ligne',
      resetLabel: 'Choisir une autre durée',
      resetStatus: 'Retour à la sélection des durées…',
    },
    contact: {
      title: 'Une question avant de réserver ?',
      subtitle:
        'Je vous réponds rapidement si vous avez besoin d’aide pour choisir la durée ou préparer votre rendez-vous.',
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
      description:
        'Choose the session length that suits you, then select your time. Each session is tailored to what you need on the day.',
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
          icon: 'i-lucide-wallet',
          label: 'Pay on site',
        },
      ],
      testimonialQuote: 'A truly relaxing moment, I highly recommend it.',
      testimonialAuthor: 'Marie, Annecy',
    },
    // The public Cal selector is intentionally described by duration. Its
    // option descriptions are owned in Cal.eu and must not be duplicated here.
    scheduler: {
      title: 'Choose your session length',
      description:
        'Select the duration that suits you. Your session will be adapted to your needs during the appointment.',
      regionLabel: 'Online appointment selector',
      resetLabel: 'Choose another duration',
      resetStatus: 'Returning to duration selection…',
    },
    contact: {
      title: 'A question before booking?',
      subtitle:
        'I reply quickly if you need help choosing a duration or preparing for your appointment.',
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
