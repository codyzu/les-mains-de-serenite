// @unocss-include
import CureFusionLakeWalk from '../../../assets/cure-fusion-lake-walk.png';
import type {Locale, ProgramPageData} from '../types';
import {localizedPagePaths} from '../paths';
import {
  programEnQuestionWhatsappHref,
  programEnStartWhatsappHref,
  programFrQuestionWhatsappHref,
  programFrStartWhatsappHref,
} from '../shared';

export const programPages = {
  fr: {
    path: localizedPagePaths.program.fr,
    meta: {
      title:
        'Programme Ventre Léger & Jambes Légères à Annecy | Les Mains de Sérénité',
      description:
        'Un accompagnement bien-être de 21 jours à Annecy associant drainage lymphatique Renata França, bilan bien-être, conseils simples et suivi WhatsApp.',
    },
    hero: {
      eyebrow: 'Programme 21 jours',
      title: 'Programme Ventre Léger & Jambes Légères',
      description:
        'Retrouvez des jambes plus légères, un ventre plus confortable et davantage d’énergie grâce à une approche globale du bien-être féminin.',
      primaryCta: 'Commencer mon accompagnement',
      secondaryCta: 'Voir ce qui est inclus',
    },
    intro: {
      title: 'Un accompagnement pour prolonger les bienfaits du drainage',
      body: 'Ce programme s’adresse aux femmes qui souhaitent aller plus loin qu’une séance seule, avec un cadre doux et facile à suivre. Il associe 5 drainages lymphatiques Renata França à un bilan bien-être, des conseils simples du quotidien et un accompagnement WhatsApp pendant 21 jours pour vous aider à garder le cap entre les séances.',
    },
    forWhom: {
      title: 'Ce programme est idéal si vous souhaitez',
      items: [
        'Retrouver des jambes plus légères',
        'Réduire les sensations de gonflement',
        'Diminuer la sensation de rétention d’eau',
        'Retrouver plus de confort au quotidien',
        'Être accompagnée avec douceur et simplicité',
      ],
    },
    includes: {
      title: 'Le programme comprend',
      items: [
        '5 séances de drainage lymphatique Renata França d’1h',
        'Un bilan bien-être de 20 minutes',
        'Un guide alimentaire anti-ballonnements et rétention d’eau',
        'Une liste de courses simplifiée',
        'Un accompagnement WhatsApp pendant 21 jours',
        'Des conseils personnalisés adaptés à votre quotidien',
      ],
    },
    price: {
      label: 'Tarif lancement',
      amount: '350 €',
      usualValueLabel: 'Valeur habituelle',
      usualValue: '470 €',
    },
    method: {
      title: 'Pourquoi associer drainage et habitudes du quotidien ?',
      body: 'Le drainage lymphatique procure une sensation de légèreté et aide à relâcher les tensions corporelles. Entre les séances, certaines habitudes simples peuvent soutenir ce confort : hydratation, repas plus digestes, écoute des sensations et rythme plus régulier. L’objectif n’est pas la perfection, mais un accompagnement doux et réaliste.',
    },
    story: {
      title: 'Retrouver durablement une sensation de légèreté',
      body: 'L’objectif n’est pas d’ajouter des contraintes à votre quotidien, mais de vous proposer des repères simples pour prolonger la sensation de légèreté entre les séances. Les conseils sont pensés pour rester réalistes, faciles à intégrer et adaptés à votre rythme. C’est dans cet esprit que Zahara a créé la Méthode Ventre Léger : une approche douce, attentive et pratique, pour que le confort ressenti en séance trouve naturellement sa place dans votre vie de tous les jours.',
    },
    visuals: {
      storyImage: {
        src: CureFusionLakeWalk,
        alt: 'Deux femmes marchent pieds nus au bord du lac d’Annecy',
        className:
          'h-[320px] w-full object-cover object-[50%_58%] sm:h-[380px] lg:h-[420px] lg:object-[50%_54%]',
      },
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        {
          question: 'Est-ce un régime ?',
          answer:
            'Non. Les conseils proposés sont simples, progressifs et pensés pour soutenir votre confort au quotidien, sans pression ni perfection.',
        },
        {
          question: 'Faut-il avoir déjà fait un drainage ?',
          answer:
            'Non. Le programme peut être une première découverte si vous souhaitez un accompagnement plus complet dès le départ.',
        },
        {
          question: 'Comment se passe le suivi WhatsApp ?',
          answer:
            'Cet accompagnement entre les séances vous permet de poser vos questions, d’ajuster les conseils à votre quotidien et de rester soutenue avec douceur pendant les 21 jours.',
        },
      ],
    },
    cta: {
      title: 'Prête à retrouver une sensation de légèreté durable ?',
      description:
        'Commencez votre accompagnement pour avancer avec des repères simples, un soutien attentif et plus de confort au quotidien.',
      text: 'Commencer mon accompagnement',
      note: '',
      href: programFrStartWhatsappHref,
      analyticsEvent: 'whatsapp_click',
      reassurance: {
        prefix: 'Une question avant de commencer ? Écrivez-moi sur ',
        linkText: 'WhatsApp',
        suffix: '.',
        href: programFrQuestionWhatsappHref,
        analyticsEvent: 'whatsapp_click',
      },
    },
    maderotherapieCrossLink: {
      title: 'Envie de découvrir la madérothérapie ?',
      description:
        'Pour une première approche ciblée sur les jambes légères, découvrez aussi le soin Madérothérapie, une séance de 60 minutes avec instruments en bois.',
      text: 'Découvrir la madérothérapie',
      href: localizedPagePaths.maderotherapie.fr,
    },
  },
  en: {
    path: localizedPagePaths.program.en,
    meta: {
      title:
        'Light Belly & Light Legs Program in Annecy | Les Mains de Sérénité',
      description:
        'A 21-day wellness accompaniment in Annecy combining Renata França lymphatic drainage, a wellness check-in, simple guidance, and WhatsApp follow-up.',
    },
    hero: {
      eyebrow: '21-day program',
      title: 'Light Belly & Light Legs Program',
      description:
        'Reconnect with lighter legs, a more comfortable belly, and more everyday energy through a holistic women’s wellness approach.',
      primaryCta: 'Start my accompaniment',
      secondaryCta: 'See what is included',
    },
    intro: {
      title: 'An accompaniment to extend the benefits of drainage',
      body: 'This program is for women who would like to go further than a single session, with gentle support that is easy to follow. It combines 5 Renata França lymphatic drainage sessions with a wellness check-in, simple everyday guidance, and WhatsApp accompaniment for 21 days to help you stay on track between sessions.',
    },
    forWhom: {
      title: 'This program is ideal if you would like to',
      items: [
        'Reconnect with lighter legs',
        'Reduce feelings of bloating',
        'Ease the feeling of water retention',
        'Feel more comfortable in everyday life',
        'Be supported with a gentle and simple approach',
      ],
    },
    includes: {
      title: 'The program includes',
      items: [
        '5 one-hour Renata França lymphatic drainage sessions',
        'A 20-minute wellness check-in',
        'A simple food guide for bloating and water retention',
        'A simplified shopping list',
        'WhatsApp accompaniment for 21 days',
        'Personalized tips adapted to your everyday life',
      ],
    },
    price: {
      label: 'Launch price',
      amount: '350 €',
      usualValueLabel: 'Usual value',
      usualValue: '470 €',
    },
    method: {
      title: 'Why combine drainage and everyday habits?',
      body: 'Lymphatic drainage can bring a pleasant feeling of lightness and help release body tension. Between sessions, simple habits can support this comfort: hydration, easier-to-digest meals, listening to your body, and a steadier rhythm. The goal is not perfection, but gentle and realistic support.',
    },
    story: {
      title: 'Reconnect with a lasting feeling of lightness',
      body: 'The aim is not to add strict rules to your daily life, but to offer simple markers that help extend the feeling of lightness between sessions. The guidance is designed to stay realistic, easy to integrate, and adapted to your rhythm. This is the spirit behind Zahara’s Light Belly Method: a gentle, attentive, and practical approach so the comfort you feel during the session can naturally become part of everyday life.',
    },
    visuals: {
      storyImage: {
        src: CureFusionLakeWalk,
        alt: 'Two women walking barefoot along Lake Annecy',
        className:
          'h-[320px] w-full object-cover object-[50%_58%] sm:h-[380px] lg:h-[420px] lg:object-[50%_54%]',
      },
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'Is this a diet?',
          answer:
            'No. The guidance is simple, progressive, and designed to support everyday comfort without pressure or perfection.',
        },
        {
          question: 'Do I need to have tried drainage before?',
          answer:
            'No. The program can be a first discovery if you would like a more complete accompaniment from the start.',
        },
        {
          question: 'How does the WhatsApp follow-up work?',
          answer:
            'This accompaniment between sessions lets you ask questions, adapt the guidance to your everyday life, and feel gently supported throughout the 21 days.',
        },
      ],
    },
    cta: {
      title: 'Ready to reconnect with lasting lightness?',
      description:
        'Start your accompaniment with simple guidance, attentive support, and more everyday comfort.',
      text: 'Start my accompaniment',
      note: '',
      href: programEnStartWhatsappHref,
      analyticsEvent: 'whatsapp_click',
      reassurance: {
        prefix: 'A question before starting? Message me on ',
        linkText: 'WhatsApp',
        suffix: '.',
        href: programEnQuestionWhatsappHref,
        analyticsEvent: 'whatsapp_click',
      },
    },
    maderotherapieCrossLink: {
      title: 'Curious about maderotherapy?',
      description:
        'For a first targeted approach to lighter legs, you can also discover Maderotherapy, a 60-minute session using wooden instruments.',
      text: 'Discover maderotherapy',
      href: localizedPagePaths.maderotherapie.en,
    },
  },
} satisfies Record<Locale, ProgramPageData>;
