import type {Locale, ProgramsOverviewPageData} from '../types';
import {localizedPagePaths} from '../paths';
import {homePages} from './home';

export const programsPages = {
  fr: {
    path: localizedPagePaths.programs.fr,
    meta: {
      title: 'Programmes bien-être à Annecy | Les Mains de Sérénité',
      description:
        'Découvrez les programmes bien-être à Annecy : des accompagnements sur plusieurs séances pour aller plus loin qu’un soin ou massage seul.',
    },
    hero: {
      eyebrow: 'Programmes d’accompagnement',
      title: 'Aller plus loin qu’une séance seule',
      description:
        'Les programmes sont pensés pour les femmes qui souhaitent un accompagnement progressif, avec plusieurs séances et une attention portée aux ressentis entre les rendez-vous.',
      reassurance:
        'Des accompagnements bien-être réservés aux femmes, pensés pour répondre à vos besoins dans un cadre rassurant et personnalisé.',
      ctaText: 'Réserver un accompagnement',
      ctaHref: localizedPagePaths.reserve.fr,
      analyticsEvent: 'reserve_click',
    },
    distinction: {
      singleTitle: 'Un soin individuel',
      singleDescription:
        'Répond à un besoin ponctuel : détente, jambes lourdes, tensions ou découverte d’une technique de massage bien-être. Une séance, un besoin précis.',
      programTitle: 'Un programme',
      programDescription:
        'Associe plusieurs séances personnalisées pour soutenir les bienfaits dans la durée. Un accompagnement qui évolue avec vous.',
    },
    preview: {
      ...homePages.fr.programPreview,
      intro:
        'Deux accompagnements pour répondre à des besoins différents, selon votre objectif de bien-être.',
      items: homePages.fr.programPreview.items.map((item) => ({
        ...item,
        ctaLink:
          item.title === 'Cure Fusion'
            ? item.ctaLink
            : localizedPagePaths.program.fr,
      })),
    },
    massagesCrossLink: {
      title: 'Vous préférez une séance ponctuelle ?',
      description:
        'Les soins individuels permettent de répondre à un besoin précis sans vous engager dans un accompagnement complet.',
      text: 'Voir les soins',
      href: localizedPagePaths.massages.fr,
    },
    booking: {
      title: 'Besoin d’aide pour choisir ?',
      description:
        'Nous pouvons vous orienter vers le soin ou le programme le plus adapté à vos besoins du moment.',
      text: 'Réserver ou poser une question',
      href: localizedPagePaths.reserve.fr,
      analyticsEvent: 'reserve_click',
    },
  },
  en: {
    path: localizedPagePaths.programs.en,
    meta: {
      title: 'Wellness Programs in Annecy | Les Mains de Sérénité',
      description:
        'Discover women-only wellness programs in Annecy: multi-session support designed to go further than one wellness treatment or massage alone.',
    },
    hero: {
      eyebrow: 'Support programs',
      title: 'Go further than one session alone',
      description:
        'Programs are designed for women who want progressive support, with several sessions and attention to how the body feels between appointments.',
      reassurance:
        'Women-only wellness accompaniments, designed around your needs in a reassuring and personalized setting.',
      ctaText: 'Book an accompaniment',
      ctaHref: localizedPagePaths.reserve.en,
      analyticsEvent: 'reserve_click',
    },
    distinction: {
      singleTitle: 'An individual treatment',
      singleDescription:
        'Responds to a one-time need: relaxation, heavy legs, tension, or discovering a wellness massage technique. One session, one precise need.',
      programTitle: 'A program',
      programDescription:
        'Combines several personalized sessions to support the benefits over time. An accompaniment that evolves with you.',
    },
    preview: {
      ...homePages.en.programPreview,
      intro:
        'Two accompaniments designed for different needs, depending on your wellness goal.',
      items: homePages.en.programPreview.items.map((item) => ({
        ...item,
        ctaLink:
          item.title === 'Cure Fusion'
            ? item.ctaLink
            : localizedPagePaths.program.en,
      })),
    },
    massagesCrossLink: {
      title: 'Would you prefer a single session?',
      description:
        'Individual treatments are ideal for a specific need without committing to a full accompaniment.',
      text: 'View treatments',
      href: localizedPagePaths.massages.en,
    },
    booking: {
      title: 'Need help choosing?',
      description:
        'We can guide you toward the treatment or program that best fits your current needs.',
      text: 'Book or ask a question',
      href: localizedPagePaths.reserve.en,
      analyticsEvent: 'reserve_click',
    },
  },
} satisfies Record<Locale, ProgramsOverviewPageData>;
