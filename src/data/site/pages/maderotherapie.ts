// @unocss-include
import type {Locale, MaderotherapiePageData} from '../types';
import {localizedPagePaths} from '../paths';

export const maderotherapiePages = {
  fr: {
    path: localizedPagePaths.maderotherapie.fr,
    meta: {
      title: 'Madérothérapie à Annecy | Les Mains de Sérénité',
      description:
        'Découvrez la madérothérapie à Annecy : un soin ciblé avec instruments en bois pour aider à retrouver une sensation de jambes légères, stimuler le drainage naturel et s’offrir un moment de bien-être.',
      openGraphTitle: 'Madérothérapie Jambes Légères à Annecy',
      openGraphDescription:
        'Un soin bien-être de 60 minutes réservé aux femmes, idéal pour les jambes lourdes, la rétention d’eau et la sensation de légèreté.',
    },
    hero: {
      title: 'Soin de madérothérapie Jambes Légères',
      description:
        'Retrouvez une agréable sensation de légèreté grâce à un soin utilisant des instruments en bois spécialement conçus pour stimuler la circulation et accompagner le drainage naturel du corps.',
      primaryCta: 'Réserver ce soin',
      imageAlt: 'Soin jambes légères dans une ambiance bien-être chaleureuse',
      keyInfo: [
        'Soin ciblé jambes légères',
        'Instruments en bois',
        'Réservé aux femmes',
      ],
    },
    overview: {
      title: 'En quoi consiste la madérothérapie ?',
      body: 'La madérothérapie est une technique de massage d’origine colombienne qui utilise différents instruments en bois pour travailler les tissus de manière précise et rythmée. Ce soin vise à stimuler la circulation sanguine et lymphatique, à accompagner le drainage naturel du corps et à procurer une sensation de légèreté. Naturelle et non invasive, cette approche s’intègre dans une démarche de bien-être, d’écoute du corps et de détente.',
    },
    instruments: {
      title: 'Pourquoi utiliser des instruments en bois ?',
      body: 'Les instruments en bois permettent un travail précis, régulier et adapté aux zones ciblées. Leur matière naturelle offre un contact chaleureux, tout en aidant à stimuler les tissus et à relancer les sensations de circulation. Associés à un geste manuel attentif, ils rendent l’expérience à la fois tonique, enveloppante et relaxante.',
    },
    benefits: {
      title: 'Les bienfaits de la madérothérapie',
      intro:
        'Un soin ciblé pour retrouver du confort corporel, relâcher les tensions et repartir avec une sensation de légèreté.',
      items: [
        {
          icon: 'i-lucide-droplets',
          text: 'Favorise le drainage lymphatique naturel',
        },
        {
          icon: 'i-lucide-activity',
          text: 'Stimule la circulation sanguine et lymphatique',
        },
        {
          icon: 'i-lucide-feather',
          text: 'Aide à réduire la sensation de jambes lourdes',
        },
        {
          icon: 'i-lucide-waves',
          text: 'Contribue à diminuer la rétention d’eau',
        },
        {
          icon: 'i-lucide-sparkles',
          text: 'Contribue à une sensation de peau plus tonique',
        },
        {
          icon: 'i-lucide-scan',
          text: 'Aide à lisser l’aspect de la peau et des tissus',
        },
        {
          icon: 'i-lucide-leaf',
          text: 'Procure une sensation de légèreté et de bien-être',
        },
        {
          icon: 'i-lucide-heart-pulse',
          text: 'Aide à détendre les muscles et les tensions corporelles',
        },
        {
          icon: 'i-lucide-flower',
          text: 'Favorise la relaxation et le lâcher-prise',
        },
      ],
    },
    forYou: {
      title: 'Est-ce fait pour vous ?',
      intro:
        'Ce soin s’adresse aux femmes qui souhaitent prendre soin de leur corps avec une approche naturelle, ciblée et respectueuse de leurs sensations.',
      items: [
        {
          anchorId: 'jambes-lourdes',
          title: 'Jambes lourdes',
          description:
            'Pour retrouver une sensation de jambes plus légères, notamment en fin de journée ou après des périodes debout.',
        },
        {
          anchorId: 'ventre-gonfle',
          title: 'Ventre gonflé',
          description:
            'Pour accompagner le confort corporel lorsque vous ressentez une impression de gonflement.',
        },
        {
          anchorId: 'retention-eau',
          title: 'Rétention d’eau',
          description:
            'Pour soutenir les sensations de drainage naturel et aider le corps à retrouver plus de fluidité.',
        },
        {
          anchorId: 'fatigue-lourdeur',
          title: 'Fatigue physique et sensation de lourdeur',
          description:
            'Pour relâcher le corps, alléger les tensions et vous accorder un temps de récupération.',
        },
        {
          anchorId: 'ralentir',
          title: 'Besoin de ralentir et de prendre soin de soi',
          description:
            'Pour faire une pause, respirer et vous reconnecter à votre corps dans un cadre calme.',
        },
        {
          anchorId: 'silhouette-harmonieuse',
          title: 'Envie de retrouver une silhouette plus harmonieuse',
          description:
            'Pour stimuler les tissus et accompagner une sensation de tonicité et d’équilibre corporel.',
        },
      ],
    },
    offer: {
      title: 'Offre Découverte Soin de madérothérapie Jambes Légères',
      duration: '60 minutes',
      price: '90 €',
      description:
        'Un soin ciblé de 60 minutes pour découvrir la madérothérapie et profiter d’un travail spécifique sur les zones de lourdeur, avec une attention particulière portée au confort et au ressenti.',
      targetAudience:
        'Idéale pour les femmes qui ressentent des jambes lourdes, de la rétention d’eau, une fatigue corporelle ou l’envie de prendre soin d’elles autrement.',
      benefits:
        'Le soin aide à stimuler la circulation, accompagne le drainage naturel du corps et procure une sensation de légèreté et de détente.',
      positioning:
        'La durée de 60 minutes est recommandée pour une première séance complète. Une version de 90 minutes est aussi possible si vous souhaitez un temps de soin plus enveloppant.',
    },
    steps: {
      title: 'Déroulement d’une séance',
      items: [
        {
          title: 'Échange sur vos besoins',
          description:
            'Nous prenons quelques minutes pour comprendre vos attentes, vos sensations et les éventuelles précautions à connaître.',
        },
        {
          title: 'Installation confortable',
          description:
            'Vous vous installez dans un espace calme, chaleureux et adapté à un vrai moment de détente.',
        },
        {
          title: 'Travail manuel préparatoire',
          description:
            'Le soin commence par des gestes manuels pour préparer les tissus et favoriser le relâchement.',
        },
        {
          title: 'Utilisation des instruments de madérothérapie',
          description:
            'Les instruments en bois sont utilisés progressivement, avec une pression ajustée à votre confort.',
        },
        {
          title: 'Retour au calme et recommandations',
          description:
            'La séance se termine en douceur, avec quelques conseils simples pour prolonger les sensations de légèreté.',
        },
      ],
    },
    beforeAfter: {
      title: 'Avant et après votre séance',
      before: [
        'Bien s’hydrater',
        'Prévoir une tenue confortable',
        'Signaler toute contre-indication',
      ],
      after: [
        'Boire de l’eau',
        'Favoriser une activité douce',
        'Écouter son corps et se reposer si nécessaire',
      ],
    },
    contraindications: {
      title: 'Contre-indications',
      items: [
        'Phlébite ou thrombose',
        'Grossesse (sauf avis médical)',
        'Cancer en cours de traitement',
        'Infection ou fièvre',
        'Troubles circulatoires sévères',
        'Plaies ou lésions cutanées',
        'Intervention chirurgicale récente',
      ],
      note: 'En cas de doute ou de situation particulière, contactez Zahara avant de réserver afin de vérifier ensemble si le soin est adapté.',
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        {
          question: 'Qu’est-ce que la madérothérapie ?',
          answer:
            'C’est une technique de massage d’origine colombienne qui utilise des instruments en bois pour stimuler les tissus, la circulation et les sensations de drainage naturel.',
        },
        {
          question: 'Est-ce douloureux ?',
          answer:
            'Le soin peut être tonique, mais la pression est toujours adaptée à votre confort. L’objectif est de stimuler sans forcer.',
        },
        {
          question: 'Combien de séances sont recommandées ?',
          answer:
            'Une séance permet de découvrir la méthode et de ressentir une première sensation de légèreté. Un rythme plus régulier peut être envisagé selon vos objectifs et vos ressentis.',
        },
        {
          question: 'Quand ressent-on les premiers effets ?',
          answer:
            'Certaines femmes ressentent une sensation de légèreté dès la fin de la séance, parfois davantage dans les heures ou les jours qui suivent.',
        },
        {
          question: 'Que faut-il porter pendant la séance ?',
          answer:
            'Prévoyez simplement une tenue confortable pour venir au rendez-vous. Les modalités pratiques sont expliquées sur place dans le respect de votre pudeur et de votre confort.',
        },
        {
          question: 'Existe-t-il des contre-indications ?',
          answer:
            'Oui, notamment en cas de phlébite, thrombose, fièvre, infection, troubles circulatoires sévères, plaies, intervention récente, grossesse sans avis médical ou cancer en cours de traitement.',
        },
      ],
    },
    cta: {
      title: 'Offrez-vous un moment de légèreté',
      description:
        'Réservez votre soin de madérothérapie Jambes Légères à Annecy et accordez à votre corps une vraie pause bien-être.',
      text: 'Réserver ce soin',
      href: localizedPagePaths.reserve.fr,
      analyticsEvent: 'reserve_click',
    },
    reassuranceNote:
      'Ce soin est réservé aux femmes. En cas de doute ou de contre-indication, contactez-moi avant de réserver.',
    programCrossLink: {
      title: 'Vous souhaitez un accompagnement plus complet ?',
      description:
        'Si vous ressentez régulièrement des jambes lourdes, de la rétention d’eau ou une sensation de ventre gonflé, le Programme Ventre Léger & Jambes Légères propose un accompagnement sur plusieurs séances avec des conseils adaptés.',
      text: 'Découvrir le programme',
      href: localizedPagePaths.program.fr,
    },
  },
  en: {
    path: localizedPagePaths.maderotherapie.en,
    meta: {
      title: 'Maderotherapy Light Legs in Annecy | Les Mains de Sérénité',
      description:
        'Discover the Light Legs maderotherapy treatment in Annecy: a 60-minute wellness session using wooden instruments to stimulate circulation and support the body’s natural drainage.',
      openGraphTitle: 'Light Legs Maderotherapy in Annecy',
      openGraphDescription:
        'A 60-minute women-only wellness treatment for heavy legs, water retention, and a pleasant feeling of lightness.',
    },
    hero: {
      title: 'Light Legs Maderotherapy Treatment',
      description:
        'Reconnect with a pleasant feeling of lightness through a treatment using wooden instruments designed to stimulate circulation and support the body’s natural drainage.',
      primaryCta: 'Book this treatment',
      imageAlt: 'Light legs wellness treatment in a warm massage setting',
      keyInfo: [
        'Targeted light-legs treatment',
        'Wooden instruments',
        'Women only',
      ],
    },
    overview: {
      title: 'What is maderotherapy?',
      body: 'Maderotherapy is a Colombian massage technique that uses different wooden instruments to work the tissues with precision and rhythm. This treatment is designed to stimulate blood and lymphatic circulation, support the body’s natural drainage, and create a feeling of lightness. Natural and non-invasive, it belongs to a wellness approach centered on body awareness and relaxation.',
    },
    instruments: {
      title: 'Why use wooden instruments?',
      body: 'Wooden instruments allow precise, regular work adapted to targeted areas. Their natural material offers a warm contact while helping stimulate the tissues and circulation sensations. Combined with attentive manual gestures, they make the experience both toning, enveloping, and relaxing.',
    },
    benefits: {
      title: 'Benefits of maderotherapy',
      intro:
        'A targeted treatment to support body comfort, release tension, and leave with a pleasant feeling of lightness.',
      items: [
        {
          icon: 'i-lucide-droplets',
          text: 'Supports natural lymphatic drainage',
        },
        {
          icon: 'i-lucide-activity',
          text: 'Stimulates blood and lymphatic circulation',
        },
        {
          icon: 'i-lucide-feather',
          text: 'Helps reduce the sensation of heavy legs',
        },
        {
          icon: 'i-lucide-waves',
          text: 'Helps ease the feeling of water retention',
        },
        {
          icon: 'i-lucide-sparkles',
          text: 'Contributes to a sensation of more toned skin',
        },
        {
          icon: 'i-lucide-scan',
          text: 'Helps smooth the appearance of skin and tissues',
        },
        {
          icon: 'i-lucide-leaf',
          text: 'Creates a feeling of lightness and well-being',
        },
        {
          icon: 'i-lucide-heart-pulse',
          text: 'Relaxes muscles and eases certain body tensions',
        },
        {
          icon: 'i-lucide-flower',
          text: 'Supports relaxation and letting go',
        },
      ],
    },
    forYou: {
      title: 'Is it right for you?',
      intro:
        'This treatment is for women who want to care for their body through a natural, targeted approach that respects their sensations.',
      items: [
        {
          anchorId: 'jambes-lourdes',
          title: 'Heavy legs',
          description:
            'To reconnect with lighter legs, especially at the end of the day or after standing for long periods.',
        },
        {
          anchorId: 'ventre-gonfle',
          title: 'Bloated belly',
          description:
            'To support body comfort when you feel a sensation of bloating.',
        },
        {
          anchorId: 'retention-eau',
          title: 'Water retention',
          description:
            'To support natural drainage sensations and help the body feel more fluid.',
        },
        {
          anchorId: 'fatigue-lourdeur',
          title: 'Physical fatigue and heaviness',
          description:
            'To release the body, ease tension, and give yourself recovery time.',
        },
        {
          anchorId: 'ralentir',
          title: 'Need to slow down and care for yourself',
          description:
            'To pause, breathe, and reconnect with your body in a calm setting.',
        },
        {
          anchorId: 'silhouette-harmonieuse',
          title: 'Desire for a more harmonious silhouette',
          description:
            'To stimulate the tissues and support a feeling of tone and body balance.',
        },
      ],
    },
    offer: {
      title: 'Light Legs Maderotherapy Treatment Discovery Offer',
      duration: '60 minutes',
      price: '90 €',
      description:
        'A targeted 60-minute treatment to discover maderotherapy and enjoy focused work on areas of heaviness, with close attention to comfort and how your body feels.',
      targetAudience:
        'Ideal for women experiencing heavy legs, water retention, body fatigue, or the desire to care for themselves differently.',
      benefits:
        'The treatment helps stimulate circulation, supports the body’s natural drainage, and creates a feeling of lightness and relaxation.',
      positioning:
        'The 60-minute duration is recommended for a complete first session. A 90-minute version is also available if you would like a more enveloping treatment time.',
    },
    steps: {
      title: 'How a session works',
      items: [
        {
          title: 'Discuss your needs',
          description:
            'We take a few minutes to understand your expectations, sensations, and any precautions to know.',
        },
        {
          title: 'Comfortable setup',
          description:
            'You settle into a calm, warm space designed for a true moment of relaxation.',
        },
        {
          title: 'Preparatory manual work',
          description:
            'The treatment begins with manual gestures to prepare the tissues and support release.',
        },
        {
          title: 'Use of maderotherapy instruments',
          description:
            'Wooden instruments are used progressively, with pressure adjusted to your comfort.',
        },
        {
          title: 'Return to calm and recommendations',
          description:
            'The session ends gently, with simple tips to help extend the feeling of lightness.',
        },
      ],
    },
    beforeAfter: {
      title: 'Before and after your session',
      before: [
        'Hydrate well',
        'Wear comfortable clothing',
        'Mention any contraindication',
      ],
      after: [
        'Drink water',
        'Choose gentle movement',
        'Listen to your body and rest if needed',
      ],
    },
    contraindications: {
      title: 'Contraindications',
      items: [
        'Phlebitis or thrombosis',
        'Pregnancy, unless medically approved',
        'Cancer currently under treatment',
        'Infection or fever',
        'Severe circulatory disorders',
        'Wounds or skin lesions',
        'Recent surgery',
      ],
      note: 'If you have any doubt or a specific situation, contact Zahara before booking so you can check together whether the treatment is suitable.',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'What is maderotherapy?',
          answer:
            'It is a Colombian massage technique using wooden instruments to stimulate tissues, circulation, and natural drainage sensations.',
        },
        {
          question: 'Is it painful?',
          answer:
            'The treatment can be toning, but pressure is always adapted to your comfort. The goal is to stimulate without forcing.',
        },
        {
          question: 'How many sessions are recommended?',
          answer:
            'One session lets you discover the method and feel an initial sense of lightness. A more regular rhythm can be considered depending on your goals and sensations.',
        },
        {
          question: 'When are the first effects felt?',
          answer:
            'Some women feel lighter right after the session, sometimes more noticeably in the following hours or days.',
        },
        {
          question: 'What should I wear during the session?',
          answer:
            'Simply wear comfortable clothing to come to the appointment. Practical details are explained on site with respect for your modesty and comfort.',
        },
        {
          question: 'Are there contraindications?',
          answer:
            'Yes, including phlebitis, thrombosis, fever, infection, severe circulatory disorders, wounds, recent surgery, pregnancy without medical approval, or cancer currently under treatment.',
        },
      ],
    },
    cta: {
      title: 'Treat yourself to a moment of lightness',
      description:
        'Book your Light Legs maderotherapy treatment in Annecy and give your body a true wellness pause.',
      text: 'Book this treatment',
      href: localizedPagePaths.reserve.en,
      analyticsEvent: 'reserve_click',
    },
    reassuranceNote:
      'This treatment is reserved for women. If you have any doubt or contraindication, contact me before booking.',
    programCrossLink: {
      title: 'Would you like more complete support?',
      description:
        'If you regularly experience heavy legs, water retention, or a bloated feeling, the Light Belly & Light Legs Program offers multi-session support with adapted guidance.',
      text: 'Discover the program',
      href: localizedPagePaths.program.en,
    },
  },
} satisfies Record<Locale, MaderotherapiePageData>;
