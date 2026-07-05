// @unocss-include
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
      body: 'Ce programme s’adresse aux femmes qui souhaitent aller plus loin qu’une séance seule. Il associe 5 drainages lymphatiques Renata França à un bilan bien-être, des conseils simples du quotidien et un suivi WhatsApp pendant 21 jours.',
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
        'Un suivi WhatsApp pendant 21 jours',
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
      title: 'Pourquoi j’ai créé cette méthode',
      body: 'Au fil de mes accompagnements, j’ai compris qu’une séance seule ne suffisait pas toujours. Les habitudes du quotidien jouent elles aussi un rôle essentiel. C’est ainsi qu’est née la Méthode Ventre Léger : une approche simple, bienveillante et accessible qui associe le drainage lymphatique, les habitudes de vie et une meilleure écoute de soi.',
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
            'Le suivi permet de poser vos questions, d’ajuster les conseils à votre quotidien et de garder un lien entre les séances.',
        },
      ],
    },
    cta: {
      title: 'Vous souhaitez retrouver plus de légèreté ?',
      description:
        'Commencez votre accompagnement personnalisé pour retrouver une sensation de légèreté durable.',
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
      body: 'This program is for women who would like to go further than a single session. It combines 5 Renata França lymphatic drainage sessions with a wellness check-in, simple everyday guidance, and WhatsApp follow-up for 21 days.',
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
        'WhatsApp follow-up for 21 days',
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
      title: 'Why I created this method',
      body: 'Through my sessions, I understood that one treatment alone was not always enough. Everyday habits also play an important role. This is how the Light Belly Method was born: a simple, caring, and accessible approach combining lymphatic drainage, everyday habits, and better body awareness.',
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
            'The follow-up lets you ask questions, adapt the guidance to your everyday life, and stay connected between sessions.',
        },
      ],
    },
    cta: {
      title: 'Would you like to feel lighter?',
      description:
        'Start your personalized accompaniment to reconnect with lasting lightness.',
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
