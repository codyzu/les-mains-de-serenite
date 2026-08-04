import type {Locale, SoinsOverviewPageData} from '../types';
import {getOverviewTreatmentItems} from '../catalog/treatments';
import {localizedPagePaths} from '../paths';
import {getBusinessWhatsappHref} from '../shared';

export const soinsPages = {
  fr: {
    path: localizedPagePaths.soins.fr,
    meta: {
      title: 'Massages et soins bien-être à Annecy | Les Mains de Sérénité',
      description:
        'Découvrez les massages et soins bien-être à Annecy réservés aux femmes : drainage lymphatique Renata França, massage relaxant, remodelant, Miracle Face et madérothérapie.',
    },
    hero: {
      eyebrow: 'Des rituels personnalisés, réservés aux femmes',
      title: 'Massages et soins bien-être à Annecy',
      description:
        'Drainage lymphatique Renata França, massage relaxant et autres soins bien-être : chaque rendez-vous s’adapte à votre besoin de légèreté, de détente, de relâchement ou de tonicité.',
      reassurance:
        'Des rendez-vous personnalisés, réservés aux femmes, dans un cadre calme, bienveillant et confidentiel à Annecy.',
      ctaText: 'Réserver un soin',
      ctaHref: localizedPagePaths.reserveOnline.fr,
      analyticsEvent: 'reserve_click',
    },
    philosophy: {
      title: 'Des soins pensés pour vous',
      description:
        'Chaque rendez-vous commence par un échange sur vos besoins, vos ressentis et ce que votre corps exprime, afin d’adapter le soin à vos besoins du moment.',
    },
    transitionImageAlt:
      'Théière asiatique et petites tasses sur une terrasse avec vue sur le lac et les montagnes à Annecy',
    section: {
      eyebrow: 'Massages et soins ponctuels',
      title: 'Choisir le rituel juste',
      intro:
        'Comparez les séances selon votre besoin, leur durée et leur tarif. Chaque rendez-vous reste personnalisé selon votre ressenti du moment.',
      recommendedLabel: 'Durée conseillée',
      startingPriceLabel: 'À partir de',
      items: getOverviewTreatmentItems('fr'),
    },
    choiceHelp: {
      title: 'Vous ne savez pas quel soin choisir ?',
      description:
        'Si vous hésitez, nous pouvons confirmer ensemble le soin le plus adapté lors de la réservation ou au début du rendez-vous.',
      text: 'Réserver un soin',
      href: localizedPagePaths.reserveOnline.fr,
      analyticsEvent: 'reserve_click',
      reassurance: {
        prefix: 'Une question avant de réserver ? Écrivez-moi sur ',
        linkText: 'WhatsApp',
        suffix: '.',
        href: getBusinessWhatsappHref(
          "Bonjour, j'ai une question avant de réserver un soin.",
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
      title: 'Besoin d’un accompagnement plus régulier ?',
      description:
        'Découvrez les programmes conçus pour inscrire les soins dans la durée, avec un accompagnement plus progressif et régulier.',
      text: 'Découvrir les programmes',
      href: localizedPagePaths.programs.fr,
    },
    booking: {
      title: 'Besoin d’aide pour choisir ?',
      description:
        'Zahara peut vous orienter vers le soin le plus adapté à vos besoins, avant la réservation ou le rendez-vous.',
      text: 'Réserver un soin',
      href: localizedPagePaths.reserveOnline.fr,
      analyticsEvent: 'reserve_click',
      reassurance: {
        prefix: 'Vous hésitez ? Écrivez-moi sur ',
        linkText: 'WhatsApp',
        suffix: ', je serai ravie de vous orienter.',
        href: getBusinessWhatsappHref(
          "Bonjour, j'ai une question avant de réserver un soin.",
        ),
        analyticsEvent: 'whatsapp_click',
      },
    },
  },
  en: {
    path: localizedPagePaths.soins.en,
    meta: {
      title:
        'Massages and Wellness Treatments in Annecy | Les Mains de Sérénité',
      description:
        'Discover women-only massages and wellness treatments in Annecy: Renata França lymphatic drainage, relaxing massage, body sculpting, Miracle Face, and maderotherapy.',
    },
    hero: {
      eyebrow: 'Personalized rituals for women',
      title: 'Massages and wellness treatments in Annecy',
      description:
        'Renata França lymphatic drainage, relaxing massage, and other wellness treatments: every appointment adapts to your need for lightness, relaxation, tension relief, or tone.',
      reassurance:
        'Personalized appointments for women, in a calm, caring, and confidential setting in Annecy.',
      ctaText: 'Book a treatment',
      ctaHref: localizedPagePaths.reserveOnline.en,
      analyticsEvent: 'reserve_click',
    },
    philosophy: {
      title: 'Treatments designed for you',
      description:
        'Each appointment begins with a conversation about your needs, how you feel, and what your body is expressing, so the treatment can be adapted to what you need at the time.',
    },
    transitionImageAlt:
      'Asian teapot and small cups on a terrace overlooking the lake and mountains in Annecy',
    section: {
      eyebrow: 'Single massages and treatments',
      title: 'Choose the right ritual',
      intro:
        'Compare the sessions by need, duration, and price. Every appointment remains personalized around how you feel at the time.',
      recommendedLabel: 'Recommended',
      startingPriceLabel: 'From',
      items: getOverviewTreatmentItems('en'),
    },
    choiceHelp: {
      title: 'Not sure which treatment to choose?',
      description:
        'If you are unsure, we can confirm together which treatment best suits you when booking or at the beginning of your appointment.',
      text: 'Book a treatment',
      href: localizedPagePaths.reserveOnline.en,
      analyticsEvent: 'reserve_click',
      reassurance: {
        prefix: 'A question before booking? Message me on ',
        linkText: 'WhatsApp',
        suffix: '.',
        href: getBusinessWhatsappHref(
          'Hello, I have a question before booking a treatment.',
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
      title: 'Looking for more regular support?',
      description:
        'Discover programs designed to bring treatments into a more progressive and regular form of support.',
      text: 'Discover the programs',
      href: localizedPagePaths.programs.en,
    },
    booking: {
      title: 'Need help choosing?',
      description:
        'Zahara can guide you toward the treatment that best suits your needs before booking or before your appointment.',
      text: 'Book a treatment',
      href: localizedPagePaths.reserveOnline.en,
      analyticsEvent: 'reserve_click',
      reassurance: {
        prefix: 'Unsure? Message me on ',
        linkText: 'WhatsApp',
        suffix: ', I will be happy to guide you.',
        href: getBusinessWhatsappHref(
          'Hello, I have a question before booking a treatment.',
        ),
        analyticsEvent: 'whatsapp_click',
      },
    },
  },
} satisfies Record<Locale, SoinsOverviewPageData>;
