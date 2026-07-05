// @unocss-include
import CureFusionFeathers from '../../../assets/cure-fusion-feathers.png';
import CureFusionLakeWalk from '../../../assets/cure-fusion-lake-walk.png';
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
        '3 massages personnalisés, parfois différents d’une séance à l’autre, choisis selon vos besoins, vos sensations et l’évolution de votre corps pour retrouver légèreté, confort, tonicité et bien-être.',
      reassurance:
        'Accompagnement réservé exclusivement aux femmes, adapté à vos objectifs bien-être.',
      primaryCta: 'Poser une question sur la cure',
      secondaryCta: 'Voir comment fonctionne la cure',
    },
    intro: {
      title: 'Vous n’avez pas à choisir le bon massage',
      body: 'La Cure Fusion est un accompagnement personnalisé pour les femmes qui souhaitent être guidées. Chaque corps est différent, et chaque séance est choisie selon vos besoins, vos objectifs et la façon dont votre corps répond au fil des trois rendez-vous. Vous n’avez pas à choisir entre drainage lymphatique, massage remodelant ou madérothérapie : le massage le plus adapté est sélectionné pour vous. À la fin de l’accompagnement, des conseils personnalisés vous aident à prolonger les bienfaits ressentis.',
    },
    forWhom: {
      title: 'Cette cure est idéale si vous souhaitez',
      items: [
        'Retrouver une sensation de légèreté',
        'Vous sentir plus tonique et plus à l’aise dans votre corps',
        'Apaiser les sensations de lourdeur ou d’inconfort',
        'Être guidée sans devoir choisir seule la technique la plus adaptée',
        'Bénéficier d’un accompagnement qui évolue sur 3 séances',
      ],
    },
    includes: {
      title: 'La cure comprend',
      items: [
        '3 massages personnalisés',
        'Le choix du soin le plus adapté à chaque séance',
        'Un accompagnement fondé sur vos ressentis et vos objectifs',
        'Une adaptation selon la façon dont votre corps évolue',
        'Des conseils personnalisés pour prolonger les bienfaits après les trois séances',
      ],
    },
    price: {
      label: 'Tarif',
      amount: '350 €',
      detail: '3 séances personnalisées',
    },
    method: {
      title: 'Votre accompagnement en 3 séances',
      body: 'La première séance commence par un échange pour comprendre vos besoins, vos sensations et vos objectifs, puis par un premier massage personnalisé. Lors de la deuxième séance, votre corps a déjà réagi : le massage est adapté selon votre évolution et ce que vous ressentez depuis le premier rendez-vous. La troisième séance vient consolider les bienfaits ressentis et se termine par des conseils personnalisés pour prolonger cette sensation de légèreté, de confort et de tonicité.',
    },
    story: {
      title: 'Votre corps évolue, votre accompagnement aussi',
      body: 'Chaque femme est différente, et chaque corps réagit différemment. La Cure Fusion ne suit donc pas un protocole figé : l’accompagnement repose sur l’écoute, l’observation et le choix du massage le plus juste à chaque étape. Ce suivi sur trois séances crée une expérience plus cohérente, plus premium et plus rassurante qu’une simple succession de massages indépendants.',
    },
    visuals: {
      methodImage: {
        src: CureFusionFeathers,
        alt: 'Plumes blanches dans une ambiance douce et apaisante',
      },
      storyImage: {
        src: CureFusionLakeWalk,
        alt: 'Deux femmes marchent pieds nus au bord du lac d’Annecy',
      },
    },
    techniques: {
      title: 'Les massages pouvant être choisis',
      intro:
        'Chaque Cure Fusion est unique. Ces massages sont des outils de l’accompagnement, sélectionnés selon vos besoins, vos ressentis et la façon dont vous vous sentez au fil des trois séances.',
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
    testimonials: {
      title: 'Un accompagnement attentif',
      intro:
        'Trois ressentis qui reflètent l’esprit de cet accompagnement : écoute, confort et confiance.',
      items: [
        {
          text: 'J’ai particulièrement apprécié l’écoute et la personnalisation de la séance. Zahara s’adapte aux besoins du moment plutôt que d’appliquer un protocole identique à tout le monde.',
          author: 'Julie, Annecy',
        },
        {
          text: 'Je suis ressortie avec une vraie sensation de légèreté, le corps plus détendu et plus confortable. J’ai aimé sentir que la séance répondait vraiment à ce dont j’avais besoin ce jour-là.',
          author: 'Sarah, Annecy',
        },
        {
          text: 'Zahara est douce, professionnelle et très rassurante. On se sent rapidement en confiance, écoutée et accompagnée avec beaucoup de bienveillance.',
          author: 'Nadia, Annecy',
        },
      ],
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        {
          question: 'Est-ce que les 3 séances sont identiques ?',
          answer:
            'Non. L’accompagnement est personnalisé : les séances peuvent évoluer selon vos ressentis, vos besoins et ce que vous souhaitez privilégier.',
        },
        {
          question:
            'Pourquoi choisir une Cure Fusion plutôt que trois massages réservés séparément ?',
          answer:
            'Les 3 séances sont pensées ensemble. Chaque massage peut évoluer selon vos ressentis, vos objectifs et la manière dont votre corps répond. L’accompagnement est personnalisé du début à la fin, avec des conseils adaptés après les trois séances pour prolonger les bienfaits. L’expérience globale est plus cohérente que trois massages indépendants.',
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
            'Oui, si vous recherchez un accompagnement progressif autour de la légèreté, du confort corporel et de la détente. L’échange initial permet de vérifier si la Cure Fusion correspond à votre besoin.',
        },
        {
          question: 'Puis-je poser une question avant de réserver ?',
          answer:
            'Oui. Vous pouvez écrire sur WhatsApp pour expliquer ce que vous recherchez et recevoir une réponse personnalisée avant de réserver.',
        },
      ],
    },
    cta: {
      title: 'Vous hésitez entre un massage individuel et Cure Fusion ?',
      description:
        'Envoyez un message pour expliquer ce que vous recherchez. Vous pourrez poser vos questions et être orientée vers le format le plus adapté à vos besoins du moment.',
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
        '3 personalized massages, sometimes different from one session to the next, chosen according to your needs, sensations, and how your body evolves, to reconnect with lightness, comfort, tone, and well-being.',
      reassurance: 'A women-only accompaniment adapted to your wellness goals.',
      primaryCta: 'Ask about the package',
      secondaryCta: 'See how it works',
    },
    intro: {
      title: 'You do not have to choose the right massage',
      body: 'Cure Fusion is a personalized accompaniment for women who want guided support. Every body is different, and each session is chosen according to your needs, goals, and how your body responds across the three appointments. You do not have to choose between lymphatic drainage, body sculpting massage, or maderotherapy: the most suitable massage is selected for you. At the end of the accompaniment, personalized tips help extend the benefits you feel.',
    },
    forWhom: {
      title: 'This package is ideal if you would like to',
      items: [
        'Reconnect with a feeling of lightness',
        'Feel more toned and more at ease in your body',
        'Ease feelings of heaviness or discomfort',
        'Be guided without choosing the most suitable technique alone',
        'Benefit from support that evolves over 3 sessions',
      ],
    },
    includes: {
      title: 'The package includes',
      items: [
        '3 personalized massages',
        'The most suitable massage chosen at each session',
        'Support based on your sensations and goals',
        'Adjustments according to how your body evolves',
        'Personalized tips to extend the benefits after the three sessions',
      ],
    },
    price: {
      label: 'Price',
      amount: '350 €',
      detail: '3 personalized sessions',
    },
    method: {
      title: 'Your 3-session accompaniment',
      body: 'The first session begins with a conversation to understand your needs, sensations, and goals, followed by a first personalized massage. At the second session, your body has already responded: the massage is adapted according to your evolution and what you have felt since the first appointment. The third session consolidates the benefits already felt and ends with personalized tips to extend the feeling of lightness, comfort, and tone.',
    },
    story: {
      title: 'Your body evolves, and so does your accompaniment',
      body: 'Every woman is different, and every body responds differently. Cure Fusion does not follow a fixed protocol: the accompaniment is based on listening, observation, and choosing the most appropriate massage at each step. This 3-session guidance creates a more coherent, premium, and reassuring experience than a simple succession of independent massages.',
    },
    visuals: {
      methodImage: {
        src: CureFusionFeathers,
        alt: 'Soft white feathers in a calm and soothing atmosphere',
      },
      storyImage: {
        src: CureFusionLakeWalk,
        alt: 'Two women walking barefoot along Lake Annecy',
      },
    },
    techniques: {
      title: 'Massages that may be selected',
      intro:
        'Every Cure Fusion is unique. These massages are supporting tools within the accompaniment, selected according to your needs, sensations, and how you feel across the three sessions.',
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
    testimonials: {
      title: 'Attentive personalized care',
      intro:
        'Three client reflections that capture the spirit of this accompaniment: listening, comfort, and trust.',
      items: [
        {
          text: 'I especially appreciated how attentive and personalized the session felt. Zahara adapts to what you need in the moment instead of applying the same routine to everyone.',
          author: 'Julie, Annecy',
        },
        {
          text: 'I left feeling lighter, more relaxed, and more comfortable in my body. I liked feeling that the session truly responded to what I needed that day.',
          author: 'Sarah, Annecy',
        },
        {
          text: 'Zahara is gentle, professional, and very reassuring. You quickly feel confident, listened to, and supported with real kindness.',
          author: 'Nadia, Annecy',
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'Are the 3 sessions identical?',
          answer:
            'No. The accompaniment is personalized: sessions can evolve according to your sensations, needs, and what you would like to focus on.',
        },
        {
          question:
            'Why choose Cure Fusion instead of booking three individual massages?',
          answer:
            'The 3 sessions are planned together. Each massage can evolve according to your sensations, goals, and how your body responds. The accompaniment is personalized from beginning to end, with adapted advice after the three sessions to extend the benefits. The overall experience is more coherent than booking three independent massages.',
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
            'Yes, if you are looking for progressive support around lightness, body comfort, and relaxation. The first conversation helps confirm whether Cure Fusion fits your need.',
        },
        {
          question: 'Can I ask a question before booking?',
          answer:
            'Yes. You can send a WhatsApp message to explain what you are looking for and receive a personalized reply before booking.',
        },
      ],
    },
    cta: {
      title: 'Unsure whether to choose one massage or Cure Fusion?',
      description:
        'Send a message to explain what you are looking for. You can ask your questions and be guided toward the format that best fits your current needs.',
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
