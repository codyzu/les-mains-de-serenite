import type {Locale, MassagesOverviewPageData} from '../types';
import {localizedPagePaths} from '../paths';
import {homePages} from './home';

const withFrenchCtas = homePages.fr.massagesSection.items.map((item) => ({
  ...item,
  ctaText:
    item.anchorId === 'maderotherapie'
      ? (item.ctaText ?? 'Découvrir')
      : 'Réserver ce massage',
  ctaLink:
    item.anchorId === 'maderotherapie'
      ? localizedPagePaths.maderotherapie.fr
      : localizedPagePaths.reserve.fr,
}));

const withEnglishCtas = homePages.en.massagesSection.items.map((item) => ({
  ...item,
  ctaText:
    item.anchorId === 'maderotherapy'
      ? (item.ctaText ?? 'Discover')
      : 'Book this massage',
  ctaLink:
    item.anchorId === 'maderotherapy'
      ? localizedPagePaths.maderotherapie.en
      : localizedPagePaths.reserve.en,
}));

export const massagesPages = {
  fr: {
    path: localizedPagePaths.massages.fr,
    meta: {
      title: 'Massages bien-être à Annecy | Les Mains de Sérénité',
      description:
        'Découvrez les massages bien-être proposés à Annecy : drainage lymphatique, massage relaxant ou anti-douleur, remodelant, visage liftant et madérothérapie.',
    },
    hero: {
      eyebrow: 'Massages bien-être à Annecy',
      title: 'Chaque massage est pensé pour répondre à votre besoin du moment',
      description:
        'À chaque rendez-vous, le soin s’adapte à ce dont votre corps a besoin aujourd’hui : légèreté, détente, relâchement des tensions ou tonicité.',
      reassurance:
        'Massages réservés exclusivement aux femmes, dans un cadre calme, bienveillant et confidentiel.',
      ctaText: 'Réserver un massage',
      ctaHref: localizedPagePaths.reserve.fr,
      analyticsEvent: 'reserve_click',
    },
    section: {
      ...homePages.fr.massagesSection,
      intro:
        'Les massages sont des séances individuelles. Ils permettent de répondre à un besoin précis, de découvrir une technique ou de vous offrir un moment de bien-être ponctuel.',
      items: withFrenchCtas,
    },
    programCrossLink: {
      title: 'Besoin d’un accompagnement sur plusieurs séances ?',
      description:
        'Les programmes associent plusieurs rendez-vous et un suivi plus progressif pour prolonger les bienfaits dans le temps.',
      text: 'Découvrir les programmes',
      href: localizedPagePaths.programs.fr,
    },
    booking: {
      title: 'Besoin d’aide pour choisir ?',
      description:
        'Nous pouvons vous orienter vers le massage le plus adapté à vos besoins du moment.',
      text: 'Réserver ou poser une question',
      href: localizedPagePaths.reserve.fr,
      analyticsEvent: 'reserve_click',
    },
  },
  en: {
    path: localizedPagePaths.massages.en,
    meta: {
      title: 'Wellness Massages in Annecy | Les Mains de Sérénité',
      description:
        'Discover women-only wellness massages in Annecy: lymphatic drainage, relaxation or tension relief, body sculpting, lifting facial massage, and maderotherapy.',
    },
    hero: {
      eyebrow: 'Wellness massages in Annecy',
      title: 'Each massage is designed around what you need today',
      description:
        'At every appointment, the treatment adapts to how your body feels now: lightness, relaxation, tension relief, or tone.',
      reassurance:
        'Massages are reserved exclusively for women, in a calm, caring, and confidential setting.',
      ctaText: 'Book a massage',
      ctaHref: localizedPagePaths.reserve.en,
      analyticsEvent: 'reserve_click',
    },
    section: {
      ...homePages.en.massagesSection,
      intro:
        'Massages are individual sessions. They are ideal for a specific need, discovering a technique, or giving yourself a focused moment of well-being.',
      items: withEnglishCtas,
    },
    programCrossLink: {
      title: 'Looking for support over several sessions?',
      description:
        'Programs combine several appointments with a more progressive approach to help extend the benefits over time.',
      text: 'Discover the programs',
      href: localizedPagePaths.programs.en,
    },
    booking: {
      title: 'Need help choosing?',
      description:
        'We can guide you toward the massage that best fits your current needs.',
      text: 'Book or ask a question',
      href: localizedPagePaths.reserve.en,
      analyticsEvent: 'reserve_click',
    },
  },
} satisfies Record<Locale, MassagesOverviewPageData>;
