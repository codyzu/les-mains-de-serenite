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
      kicker: 'Massage bien-être à Annecy',
      title: 'Réserver votre soin bien-être',
      description:
        'Choisissez votre soin et votre créneau en toute simplicité. Les séances sont proposées sur rendez-vous, dans un cadre calme, bienveillant et apaisant.',
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
          icon: 'i-lucide-briefcase-medical',
          label: 'Table et matériel inclus',
        },
        {
          icon: 'i-lucide-wallet',
          label: 'Paiement sur place',
        },
      ],
      testimonialQuote: 'Un vrai moment de détente, je recommande vivement.',
      testimonialAuthor: 'Marie, Annecy',
    },
    scheduler: {
      title: 'Choisissez votre créneau',
      description:
        'Choisissez votre soin puis votre créneau en quelques secondes.',
      detail:
        'Chaque séance est adaptée à vos besoins du moment, pour vous offrir un véritable moment de détente.',
      paymentNote: 'Aucun paiement en ligne. Règlement sur place.',
      disclaimer:
        'Service réservé aux femmes · Massage bien-être sans visée médicale',
    },
    contact: {
      title: 'Une question avant de réserver ?',
      subtitle:
        'Je vous réponds rapidement pour vous aider à choisir le soin le plus adapté.',
      whatsappTitle: 'WhatsApp',
      phoneTitle: 'Téléphone',
      emailTitle: 'Email',
      locationTitle: 'Lieu',
      whatsappDescription:
        'Réponse rapide pour toute question avant réservation.',
      phoneDescription: 'Pour échanger rapidement avant votre réservation.',
      emailDescription:
        'Idéal si vous préférez poser votre question par écrit.',
      whatsappLabel: 'Écrire sur WhatsApp',
      whatsappHref: getBusinessWhatsappHref(
        "Bonjour, j'ai une question avant de réserver un soin."
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
      kicker: 'Wellness massage for women in Annecy',
      title: 'Book your wellness treatment',
      description:
        'Choose your treatment and your preferred time slot with ease. Sessions are available by appointment in a calm, caring, and soothing setting.',
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
          icon: 'i-lucide-briefcase-medical',
          label: 'Massage table and equipment provided',
        },
        {
          icon: 'i-lucide-wallet',
          label: 'Pay on site',
        },
      ],
      testimonialQuote: 'A truly relaxing moment, I highly recommend it.',
      testimonialAuthor: 'Marie, Annecy',
    },
    scheduler: {
      title: 'Choose your time slot',
      description:
        'Pick your treatment and your appointment time in just a few seconds.',
      detail:
        'Each session is tailored to your needs at the moment, so you can enjoy a true moment of relaxation.',
      paymentNote: 'No online payment. Please pay on site.',
      disclaimer:
        'Women-only service · Wellness massage with no medical purpose',
    },
    contact: {
      title: 'A question before booking?',
      subtitle:
        'I reply quickly to help you choose the treatment that best fits your needs.',
      whatsappTitle: 'WhatsApp',
      phoneTitle: 'Phone',
      emailTitle: 'Email',
      locationTitle: 'Location',
      whatsappDescription: 'Quick reply for any question before your booking.',
      phoneDescription: 'For a quick chat before booking.',
      emailDescription: 'Best if you prefer to ask your question in writing.',
      whatsappLabel: 'Message on WhatsApp',
      whatsappHref: getBusinessWhatsappHref(
        'Hello, I have a question before booking a treatment.'
      ),
    },
  },
} satisfies Record<Locale, ReserveOnlinePageData>;
