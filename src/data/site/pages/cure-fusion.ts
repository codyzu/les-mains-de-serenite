// @unocss-include
import type {Locale, ProgramPageData} from '../types';
import {localizedPagePaths} from '../paths';
import {cureFusionEnWhatsappHref, cureFusionFrWhatsappHref} from '../shared';

export const cureFusionPages = {
  fr: {
    path: localizedPagePaths.cureFusion.fr,
    meta: {
      title:
        'Cure Fusion à Annecy | 3 séances personnalisées | Les Mains de Sérénité',
      description:
        'Découvrez Cure Fusion à Annecy : une cure bien-être réservée aux femmes, avec 3 séances personnalisées pouvant associer drainage lymphatique, massage remodelant et madérothérapie.',
    },
    hero: {
      eyebrow: 'Cure personnalisée à Annecy',
      title: 'Cure Fusion',
      description:
        'Un accompagnement bien-être en 3 séances personnalisées, pensé pour vous aider à retrouver une sensation de légèreté, de tonicité et de confort dans votre corps.',
      reassurance:
        'Cure réservée aux femmes, adaptée à vos besoins, vos ressentis et vos objectifs de bien-être.',
      primaryCta: 'Poser une question sur la cure',
      secondaryCta: 'Voir comment fonctionne la cure',
    },
    intro: {
      title: 'Une cure pensée pour aller plus loin qu’une séance seule',
      body: 'Cure Fusion s’adresse aux femmes qui souhaitent un accompagnement plus complet, sans protocole figé. Chaque séance est ajustée selon vos sensations, votre confort et l’objectif bien-être que vous souhaitez soutenir.',
    },
    forWhom: {
      title: 'Cette cure est idéale si vous souhaitez',
      items: [
        'Retrouver une sensation de légèreté',
        'Vous sentir plus tonique et plus à l’aise dans votre corps',
        'Apaiser les sensations de lourdeur ou d’inconfort',
        'Être accompagnée sur plusieurs séances plutôt qu’une seule',
        'Combiner plusieurs approches selon vos besoins du moment',
      ],
    },
    includes: {
      title: 'La cure comprend',
      items: [
        '3 séances personnalisées',
        'Un échange sur vos besoins avant ou au début de la cure',
        'Le choix des soins selon vos ressentis et vos objectifs',
        'Une progression adaptée d’une séance à l’autre',
        'Des conseils simples pour prolonger les bienfaits au quotidien',
      ],
    },
    price: {
      label: 'Tarif',
      amount: '350 €',
      detail: '3 séances personnalisées',
    },
    method: {
      title: 'Comment fonctionne la Cure Fusion ?',
      body: 'La cure commence par un échange pour comprendre vos besoins, vos sensations et ce que vous recherchez : plus de légèreté, de confort, de tonicité ou simplement un accompagnement plus guidé. Les soins sont ensuite choisis et ajustés au fil des 3 séances, afin de rester au plus près de votre corps et de votre ressenti.',
    },
    story: {
      title: 'Une approche personnalisée, pas une formule fixe',
      body: 'Cure Fusion peut associer drainage lymphatique, massage remodelant et madérothérapie, mais ces techniques restent des outils. L’objectif n’est pas d’appliquer la même recette à chaque femme, mais de construire une expérience bien-être cohérente avec vos besoins du moment.',
    },
    techniques: {
      title: 'Les soins pouvant être associés',
      intro:
        'Selon votre objectif et vos sensations, la cure peut s’appuyer sur une ou plusieurs approches complémentaires.',
      items: [
        {
          title: 'Drainage lymphatique',
          description:
            'Pour accompagner une sensation de légèreté, soutenir le confort corporel et favoriser une impression de relâchement.',
          icon: 'i-lucide-droplets',
        },
        {
          title: 'Massage remodelant',
          description:
            'Pour une séance plus tonique, centrée sur les zones où vous souhaitez retrouver davantage de fermeté et de confort.',
          icon: 'i-lucide-scan',
        },
        {
          title: 'Madérothérapie',
          description:
            'Pour un travail ciblé avec instruments en bois, choisi lorsque cette approche correspond à vos besoins et à vos ressentis.',
          icon: 'i-lucide-leaf',
        },
      ],
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        {
          question: 'Est-ce que les 3 séances sont identiques ?',
          answer:
            'Non. La cure est personnalisée : les séances peuvent évoluer selon vos ressentis, vos besoins et ce que vous souhaitez privilégier.',
        },
        {
          question:
            'Comment choisir entre Cure Fusion et Programme Ventre Léger ?',
          answer:
            'Le Programme Ventre Léger & Jambes Légères suit un cadre de 21 jours avec 5 drainages, un bilan et un suivi WhatsApp. Cure Fusion est plus courte et plus souple, avec 3 séances personnalisées pouvant associer plusieurs soins.',
        },
        {
          question:
            'Est-ce adapté si je veux surtout une sensation de légèreté ?',
          answer:
            'Oui, si vous recherchez une approche progressive autour de la légèreté, du confort corporel et de la détente. L’échange initial permet de vérifier si la cure correspond à votre besoin.',
        },
        {
          question: 'Puis-je poser une question avant de réserver ?',
          answer:
            'Oui. Vous pouvez écrire sur WhatsApp pour expliquer ce que vous recherchez et recevoir une réponse personnalisée avant de réserver.',
        },
      ],
    },
    cta: {
      title: 'Vous souhaitez savoir si la Cure Fusion est adaptée ?',
      description:
        'Envoyez un message à Zahara pour poser vos questions ou préparer votre première séance personnalisée.',
      text: 'Poser une question sur la cure',
      note: 'Réponse personnalisée par WhatsApp.',
      href: cureFusionFrWhatsappHref,
      analyticsEvent: 'whatsapp_click',
      secondaryText: 'Réserver un créneau',
      secondaryHref: localizedPagePaths.reserve.fr,
      secondaryAnalyticsEvent: 'reserve_click',
    },
    maderotherapieCrossLink: {
      title: 'Envie de comparer avec une séance ciblée ?',
      description:
        'Si vous préférez commencer par un soin ponctuel, la madérothérapie propose une séance ciblée avec instruments en bois.',
      text: 'Découvrir la madérothérapie',
      href: localizedPagePaths.maderotherapie.fr,
    },
    relatedLinks: {
      eyebrow: 'À découvrir aussi',
      title: 'Comparer les accompagnements et les soins',
      description:
        'Explorez les autres pages pour choisir le format le plus adapté à votre besoin du moment.',
      items: [
        {
          text: 'Voir les programmes',
          href: localizedPagePaths.programs.fr,
        },
        {
          text: 'Voir les massages',
          href: localizedPagePaths.massages.fr,
        },
        {
          text: 'Programme Ventre Léger',
          href: localizedPagePaths.program.fr,
        },
      ],
    },
  },
  en: {
    path: localizedPagePaths.cureFusion.en,
    meta: {
      title:
        'Cure Fusion in Annecy | 3 Personalized Sessions | Les Mains de Sérénité',
      description:
        'Discover Cure Fusion in Annecy: a women-only wellness package with 3 personalized sessions that may include lymphatic drainage, body sculpting massage, and maderotherapy.',
    },
    hero: {
      eyebrow: 'Personalized package in Annecy',
      title: 'Cure Fusion',
      description:
        'A 3-session personalized wellness accompaniment designed to help you reconnect with a feeling of lightness, tone, and body comfort.',
      reassurance:
        'A women-only package adapted to your needs, sensations, and wellness goals.',
      primaryCta: 'Ask about the package',
      secondaryCta: 'See how it works',
    },
    intro: {
      title: 'A package designed to go further than one session',
      body: 'Cure Fusion is for women who want a more complete accompaniment without a fixed protocol. Each session is adjusted to your sensations, your comfort, and the wellness goal you would like to support.',
    },
    forWhom: {
      title: 'This package is ideal if you would like to',
      items: [
        'Reconnect with a feeling of lightness',
        'Feel more toned and more at ease in your body',
        'Ease feelings of heaviness or discomfort',
        'Be supported over several sessions rather than one',
        'Combine several approaches according to your current needs',
      ],
    },
    includes: {
      title: 'The package includes',
      items: [
        '3 personalized sessions',
        'A conversation about your needs before or at the beginning',
        'Approach choices based on your sensations and goals',
        'A progression adapted from one session to the next',
        'Simple tips to extend the benefits in everyday life',
      ],
    },
    price: {
      label: 'Price',
      amount: '350 €',
      detail: '3 personalized sessions',
    },
    method: {
      title: 'How does Cure Fusion work?',
      body: 'The package begins with a conversation to understand your needs, how your body feels, and what you are looking for: more lightness, comfort, tone, or simply more guided support. The approaches are then chosen and adjusted across the 3 sessions to stay close to your body and your sensations.',
    },
    story: {
      title: 'A personalized approach, not a fixed formula',
      body: 'Cure Fusion may combine lymphatic drainage, body sculpting massage, and maderotherapy, but these techniques remain supporting tools. The goal is not to apply the same recipe to every woman, but to build a wellness experience that fits your current needs.',
    },
    techniques: {
      title: 'Approaches that may be combined',
      intro:
        'Depending on your goal and sensations, the package may use one or several complementary approaches.',
      items: [
        {
          title: 'Lymphatic drainage',
          description:
            'To support a feeling of lightness, body comfort, and an overall sense of release.',
          icon: 'i-lucide-droplets',
        },
        {
          title: 'Body sculpting massage',
          description:
            'For a more toning session focused on areas where you would like more firmness and comfort.',
          icon: 'i-lucide-scan',
        },
        {
          title: 'Maderotherapy',
          description:
            'For targeted work with wooden instruments, chosen when this approach fits your needs and sensations.',
          icon: 'i-lucide-leaf',
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'Are the 3 sessions identical?',
          answer:
            'No. The package is personalized: sessions can evolve according to your sensations, needs, and what you would like to focus on.',
        },
        {
          question:
            'How should I choose between Cure Fusion and the Light Belly Program?',
          answer:
            'The Light Belly & Light Legs Program follows a 21-day framework with 5 drainage sessions, a wellness check-in, and WhatsApp follow-up. Cure Fusion is shorter and more flexible, with 3 personalized sessions that may combine several approaches.',
        },
        {
          question: 'Is it suitable if I mainly want a feeling of lightness?',
          answer:
            'Yes, if you are looking for a progressive approach around lightness, body comfort, and relaxation. The first conversation helps confirm whether the package fits your need.',
        },
        {
          question: 'Can I ask a question before booking?',
          answer:
            'Yes. You can send a WhatsApp message to explain what you are looking for and receive a personalized reply before booking.',
        },
      ],
    },
    cta: {
      title: 'Would you like to know if Cure Fusion is right for you?',
      description:
        'Send Zahara a message to ask your questions or prepare your first personalized session.',
      text: 'Ask about the package',
      note: 'Personal reply by WhatsApp.',
      href: cureFusionEnWhatsappHref,
      analyticsEvent: 'whatsapp_click',
      secondaryText: 'Book a time slot',
      secondaryHref: localizedPagePaths.reserve.en,
      secondaryAnalyticsEvent: 'reserve_click',
    },
    maderotherapieCrossLink: {
      title: 'Would you like to compare with a targeted session?',
      description:
        'If you prefer to begin with a single session, maderotherapy offers targeted work using wooden instruments.',
      text: 'Discover maderotherapy',
      href: localizedPagePaths.maderotherapie.en,
    },
    relatedLinks: {
      eyebrow: 'Also explore',
      title: 'Compare programs and massages',
      description:
        'Browse the other pages to choose the format that best fits your current need.',
      items: [
        {
          text: 'View programs',
          href: localizedPagePaths.programs.en,
        },
        {
          text: 'View massages',
          href: localizedPagePaths.massages.en,
        },
        {
          text: 'Light Belly Program',
          href: localizedPagePaths.program.en,
        },
      ],
    },
  },
} satisfies Record<Locale, ProgramPageData>;
