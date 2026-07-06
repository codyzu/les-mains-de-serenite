import type {Locale, SoinsOverviewPageData} from '../types';
import {getOverviewTreatmentItems} from '../catalog/treatments';
import {localizedPagePaths} from '../paths';
import {getBusinessWhatsappHref} from '../shared';

export const soinsPages = {
  fr: {
    path: localizedPagePaths.soins.fr,
    meta: {
      title: 'Soins bien-être à Annecy | Les Mains de Sérénité',
      description:
        'Découvrez les soins bien-être et massages à Annecy : drainage lymphatique, soin relaxant, soin thérapeutique, remodelant, Miracle Face soin visage liftant et madérothérapie.',
    },
    hero: {
      eyebrow: 'Soins bien-être à Annecy',
      title: 'Chaque soin est pensé pour répondre à votre besoin du moment',
      description:
        'À chaque rendez-vous, le soin s’adapte à vos besoins actuels, à vos sensations et à votre intention du moment : légèreté, détente, relâchement ou tonicité.',
      reassurance:
        'Des soins bien-être à Annecy réservés exclusivement aux femmes, dans un cadre calme, bienveillant et confidentiel.',
      ctaText: 'Réserver un soin',
      ctaHref: localizedPagePaths.reserve.fr,
      analyticsEvent: 'reserve_click',
    },
    philosophy: {
      title: 'Un soin pensé pour vous',
      description:
        'Chaque rendez-vous commence par un échange pour comprendre vos besoins, vos ressentis et ce que votre corps exprime ce jour-là. L’objectif n’est pas seulement de choisir une technique, mais de vous proposer le soin le plus adapté à votre moment.',
    },
    transitionImageAlt:
      'Théière asiatique et petites tasses sur une terrasse avec vue sur le lac et les montagnes à Annecy',
    section: {
      title: 'Soin ponctuel : choisir le rituel juste',
      intro:
        'Les soins sont des séances individuelles. Ils permettent de répondre à un besoin précis, de découvrir une technique de soin bien-être ou de vous offrir un moment de détente ponctuel.',
      introLinks: [
        {
          text: 'soins bien-être à Annecy',
          href: localizedPagePaths.soins.fr,
        },
      ],
      recommendedLabel: 'Durée conseillée',
      items: getOverviewTreatmentItems('fr'),
    },
    choiceHelp: {
      title: 'Vous ne savez pas quel soin choisir ?',
      description:
        'C’est normal. Si vous hésitez, nous pouvons confirmer ensemble le soin le plus adapté à vos besoins lors de la réservation ou au début du rendez-vous.',
      text: 'Réserver un soin',
      href: localizedPagePaths.reserve.fr,
      analyticsEvent: 'reserve_click',
      reassurance: {
        prefix: 'Une question avant de réserver ? Écrivez-moi sur ',
        linkText: 'WhatsApp',
        suffix: '.',
        href: getBusinessWhatsappHref(
          "Bonjour, j'ai une question avant de réserver un soin."
        ),
        analyticsEvent: 'whatsapp_click',
      },
    },
    testimonials: {
      title: 'Elles ont pris le temps de s’écouter',
      intro:
        'Quelques retours de femmes venues pour un besoin précis, une pause ou un moment de recentrage.',
      items: [
        {
          text: 'Une vraie écoute avant de commencer, puis un soin adapté à ce dont j’avais besoin ce jour-là.',
          author: 'Claire',
        },
        {
          text: 'Je suis ressortie profondément détendue, avec une sensation de relâchement que je n’avais pas ressentie depuis longtemps.',
          author: 'Marion',
        },
        {
          text: 'Le lieu est calme, rassurant et très soigné. On se sent tout de suite en confiance.',
          author: 'Sophie',
        },
      ],
    },
    programCrossLink: {
      title: 'Vous souhaitez aller plus loin ?',
      description:
        'Lorsque plusieurs séances sont plus adaptées à vos besoins, découvrez nos programmes d’accompagnement pour prolonger les bienfaits dans le temps.',
      text: 'Découvrir les programmes',
      href: localizedPagePaths.programs.fr,
    },
    booking: {
      title: 'Besoin d’aide pour choisir ?',
      description:
        'Nous pouvons vous orienter vers le soin le plus adapté à vos besoins du moment.',
      text: 'Réserver un soin',
      href: localizedPagePaths.reserve.fr,
      analyticsEvent: 'reserve_click',
      reassurance: {
        prefix: 'Vous hésitez ? Écrivez-moi sur ',
        linkText: 'WhatsApp',
        suffix: ', je serai ravie de vous orienter.',
        href: getBusinessWhatsappHref(
          "Bonjour, j'ai une question avant de réserver un soin."
        ),
        analyticsEvent: 'whatsapp_click',
      },
    },
  },
  en: {
    path: localizedPagePaths.soins.en,
    meta: {
      title: 'Wellness Massages in Annecy | Les Mains de Sérénité',
      description:
        'Discover women-only wellness treatments and massages in Annecy: lymphatic drainage, relaxing treatment, tension relief, body sculpting, Miracle Face lifting facial treatment, and maderotherapy.',
    },
    hero: {
      eyebrow: 'Wellness massages in Annecy',
      title: 'Each treatment is designed around what you need today',
      description:
        'At every appointment, the treatment adapts to your current needs, sensations, and intention for the session: lightness, relaxation, tension relief, or tone.',
      reassurance:
        'Wellness treatments and massages are reserved exclusively for women, in a calm, caring, and confidential setting.',
      ctaText: 'Book a treatment',
      ctaHref: localizedPagePaths.reserve.en,
      analyticsEvent: 'reserve_click',
    },
    philosophy: {
      title: 'A treatment designed for you',
      description:
        'Each appointment begins with a conversation to understand your needs, how you feel, and what your body is expressing that day. The goal is not only to choose a technique, but to offer the treatment that best fits your moment.',
    },
    transitionImageAlt:
      'Asian teapot and small cups on a terrace overlooking the lake and mountains in Annecy',
    section: {
      title: 'Single treatment: choose the right ritual',
      intro:
        'Treatments are individual sessions. They are ideal for a specific need, discovering a wellness massage technique, or giving yourself a focused moment of well-being.',
      introLinks: [
        {
          text: 'wellness treatments in Annecy',
          href: localizedPagePaths.soins.en,
        },
      ],
      recommendedLabel: 'Recommended',
      items: getOverviewTreatmentItems('en'),
    },
    choiceHelp: {
      title: 'Not sure which treatment to choose?',
      description:
        'That is normal. If you are unsure, we can confirm together which treatment best fits your needs when booking or at the beginning of your appointment.',
      text: 'Book a treatment',
      href: localizedPagePaths.reserve.en,
      analyticsEvent: 'reserve_click',
      reassurance: {
        prefix: 'A question before booking? Message me on ',
        linkText: 'WhatsApp',
        suffix: '.',
        href: getBusinessWhatsappHref(
          'Hello, I have a question before booking a treatment.'
        ),
        analyticsEvent: 'whatsapp_click',
      },
    },
    testimonials: {
      title: 'They took time to listen to themselves',
      intro:
        'A few words from women who came for a specific need, a pause, or a moment to reconnect.',
      items: [
        {
          text: 'There was real listening before we started, then a treatment adapted to what I needed that day.',
          author: 'Claire',
        },
        {
          text: 'I left deeply relaxed, with a sense of release I had not felt in a long time.',
          author: 'Marion',
        },
        {
          text: 'The place is calm, reassuring, and beautifully cared for. You immediately feel at ease.',
          author: 'Sophie',
        },
      ],
    },
    programCrossLink: {
      title: 'Would you like to go further?',
      description:
        'When several sessions are better suited to your needs, discover our support programs to extend the benefits over time.',
      text: 'Discover the programs',
      href: localizedPagePaths.programs.en,
    },
    booking: {
      title: 'Need help choosing?',
      description:
        'We can guide you toward the treatment that best fits your current needs.',
      text: 'Book a treatment',
      href: localizedPagePaths.reserve.en,
      analyticsEvent: 'reserve_click',
      reassurance: {
        prefix: 'Unsure? Message me on ',
        linkText: 'WhatsApp',
        suffix: ', I will be happy to guide you.',
        href: getBusinessWhatsappHref(
          'Hello, I have a question before booking a treatment.'
        ),
        analyticsEvent: 'whatsapp_click',
      },
    },
  },
} satisfies Record<Locale, SoinsOverviewPageData>;
