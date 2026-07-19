import DiscoveryOffer from '../../../assets/images/massage-legs-offer.png';
import TeaLake from '../../../assets/tea-lake.png';
import type {HomePageData, Locale} from '../types';
import {getProgramPreviewItems} from '../catalog/programs';
import {getHomeTreatmentItems} from '../catalog/treatments';
import {localizedPagePaths} from '../paths';
import {getBusinessWhatsappHref} from '../shared';

export const homePages = {
  fr: {
    meta: {
      title: 'Les Mains de Sérénité | Massage bien-être à Annecy pour femmes',
      description:
        'Soins bien-être à Annecy réservés aux femmes, sur rendez-vous, dans un cadre calme et confortable. Drainage lymphatique, madérothérapie, soins ciblés et programmes d’accompagnement.',
    },
    hero: {
      subtitle: 'Soins bien-être à Annecy',
      title: 'Les Mains de Sérénité',
      description:
        'À Annecy, dans un cadre chaleureux, apaisant, privé et sécurisant.',
      imageAlt: 'Ambiance bien-être et massage',
      womenOnlyLabel: 'Réservé aux femmes',
      benefitHighlight:
        'Idéal pour jambes lourdes, ventre gonflé et confort au quotidien',
      primaryCta: 'Réserver un soin',
      secondaryCta: 'Appeler',
      whatsappCta: 'WhatsApp',
    },
    heroBridge: {
      parts: [
        {text: 'Des '},
        {
          text: 'soins individuels',
          href: localizedPagePaths.soins.fr,
        },
        {
          text: ' pour soulager les tensions ou retrouver une sensation de légèreté, et des ',
        },
        {
          text: 'programmes d’accompagnement',
          href: localizedPagePaths.programs.fr,
        },
        {text: ' pour avancer avec douceur sur plusieurs séances.'},
      ],
    },
    promo: {
      title: 'Pour commencer',
      headline: '45 min à 55\u00A0€',
      description:
        'Une première séance personnalisée pour découvrir l’approche, relâcher les tensions et prendre un vrai moment pour vous.',
      note: 'Le choix idéal si vous découvrez Les Mains de Sérénité ou si vous hésitez entre plusieurs soins.',
      ctaText: 'Réserver l’offre',
      ctaLink: localizedPagePaths.discoveryOfferBooking.fr,
      analyticsEvent: 'reserve_click',
      image: {
        src: DiscoveryOffer,
        alt: 'Massage bien-être dans une ambiance douce et apaisante',
      },
    },
    needsSection: {
      title: 'Quel est votre besoin aujourd’hui ?',
      intro:
        'Quelques repères simples pour choisir entre un soin ponctuel et un programme d’accompagnement.',
      ctaText: 'Voir',
      items: [
        {
          title: 'Jambes lourdes',
          description:
            'Un soin ponctuel peut aider à retrouver une sensation de légèreté.',
          href: `${localizedPagePaths.soins.fr}#drainage-lymphatique`,
          ctaText: 'Voir le soin',
        },
        {
          title: 'Ventre gonflé',
          description:
            'Un accompagnement structuré peut être plus adapté si le besoin revient souvent.',
          href: localizedPagePaths.program.fr,
          ctaText: 'Voir le programme',
        },
        {
          title: 'Rétention d’eau',
          description:
            'Le drainage lymphatique à Annecy est souvent choisi pour ce besoin.',
          href: `${localizedPagePaths.soins.fr}#drainage-lymphatique`,
          ctaText: 'Voir le soin',
        },
        {
          title: 'Besoin de ralentir',
          description:
            'Un soin relaxant pour relâcher les tensions et retrouver du calme.',
          href: `${localizedPagePaths.soins.fr}#massage-anti-douleur`,
          ctaText: 'Voir le soin',
        },
        {
          title: 'Silhouette / tonicité',
          description:
            'Un soin remodelant ou une madérothérapie à Annecy selon votre ressenti.',
          href: `${localizedPagePaths.soins.fr}#massage-remodelant`,
          ctaText: 'Voir les soins',
        },
        {
          title: 'Je souhaite un accompagnement',
          description:
            'Les programmes créent un cadre sur plusieurs séances, avec un suivi plus guidé.',
          href: localizedPagePaths.programs.fr,
          ctaText: 'Découvrir',
        },
      ],
    },
    soinsSection: {
      title: 'Soin ponctuel : choisir le rituel juste',
      intro:
        'Une sélection de soins bien-être à Annecy, réservés aux femmes, pour répondre à un besoin précis ou simplement s’accorder un vrai moment pour soi.',
      introLinks: [
        {
          text: 'soins bien-être à Annecy',
          href: localizedPagePaths.soins.fr,
        },
      ],
      recommendedLabel: 'Durée conseillée',
      ctaText: 'Découvrir les soins',
      ctaLink: localizedPagePaths.soins.fr,
      items: getHomeTreatmentItems('fr'),
    },
    emotionalTransition: {
      title: 'Prendre le temps',
      heading: 'S’accorder une vraie pause',
      text: 'Un moment pour ralentir, écouter votre corps et retrouver une sensation de calme.',
      image: {
        src: TeaLake,
        alt: 'Théière asiatique et petites tasses sur une terrasse avec vue sur le lac et les montagnes',
      },
    },
    programPreview: {
      title: 'Accompagnement : aller plus loin sur plusieurs séances',
      intro:
        'Lorsque le besoin revient ou que vous souhaitez être guidée, les programmes d’accompagnement offrent un cadre plus progressif qu’un soin ponctuel.',
      introLinks: [
        {
          text: 'programmes d’accompagnement',
          href: localizedPagePaths.programs.fr,
        },
      ],
      ctaText: 'Découvrir les programmes',
      ctaLink: localizedPagePaths.programs.fr,
      items: getProgramPreviewItems('fr'),
    },
    about: {
      title: 'Qui prendra soin de vous ?',
      body: `
  Je suis Zahara, praticienne bien-être à Annecy. Mon parcours d’auxiliaire de puériculture m’a appris l’attention, la douceur et l’écoute fine du corps.

  Formée au drainage lymphatique selon la méthode Renata França, je propose des soins réservés aux femmes, dans un cadre calme, privé et rassurant.

  Chaque séance est personnalisée selon vos besoins du moment : alléger le corps, relâcher les tensions, retrouver du calme ou simplement vous accorder une vraie parenthèse.

  Mon intention est de vous accueillir avec soin, présence et bienveillance, pour que vous puissiez pleinement relâcher et profiter de l’instant.
              `,
      imageAlt: 'Ambiance bien-être et massage',
    },
    sessionSteps: {
      title: 'Comment se déroule une séance ?',
      intro:
        'Chaque séance est pensée comme un véritable moment de détente et de reconnexion au corps. Le drainage lymphatique est une technique douce, rythmée et apaisante, réalisée avec des mouvements précis pour stimuler naturellement la circulation lymphatique.',
      reassuranceNote: 'Aucun matériel n’est à prévoir de votre côté.',
      steps: [
        {
          title: 'Réservation',
          description:
            'Choisissez le créneau qui vous convient en ligne ou par téléphone.',
        },
        {
          title: 'Lieu du rendez-vous',
          description:
            'La séance a lieu sur rendez-vous à Annecy, dans un espace privé soigneusement aménagé pour votre confort et votre bien-être. Vous êtes accueillie dans un cadre calme, chaleureux et intime, pensé pour vous permettre de relâcher pleinement les tensions.',
        },
        {
          title: 'Votre moment de détente',
          description:
            'Avant de commencer, nous prenons quelques minutes pour échanger sur vos besoins afin d’adapter le soin à votre corps et à vos attentes. Chaque séance est personnalisée pour vous aider à relâcher les tensions, alléger le corps et apaiser l’esprit.',
        },
      ],
    },
    testimonials: {
      title: 'Avis clientes',
      intro: 'Celles qui ont testé en parlent le mieux.',
      items: [
        {
          text: 'Je souffrais régulièrement de jambes lourdes en fin de journée. Dès la première séance, j’ai ressenti une vraie sensation de légèreté et un meilleur confort dans les jours qui ont suivi.',
          author: 'Marie, Annecy',
        },
        {
          text: 'Première expérience de drainage lymphatique pour moi. Zahara a pris le temps de tout m’expliquer et m’a mise en confiance immédiatement. Je me suis sentie à l’aise du début à la fin.',
          author: 'Sophie, Annecy',
        },
        {
          text: 'Je cherchais un moment pour relâcher les tensions accumulées entre le travail et la vie de famille. Cette séance m’a permis de vraiment déconnecter et de prendre du temps pour moi.',
          author: 'Camille, Annecy',
        },
        {
          text: 'J’ai été agréablement surprise par le lieu. La pièce est calme, chaleureuse et très soignée. On s’y sent bien immédiatement, ce qui aide vraiment à se détendre dès les premières minutes.',
          author: 'Élodie, Annecy',
        },
        {
          text: 'J’ai particulièrement apprécié l’écoute et la personnalisation de la séance. Zahara s’adapte aux besoins du moment plutôt que d’appliquer un protocole identique à tout le monde.',
          author: 'Julie, Annecy',
        },
      ],
    },
    feltBenefits: {
      title: 'Les bienfaits ressentis',
      intro:
        'Des bienfaits souvent ressentis dès la fin de la séance, puis soutenus par une meilleure écoute de soi au quotidien.',
      items: [
        'Sensation de légèreté',
        'Jambes moins lourdes',
        'Confort au quotidien',
        'Détente profonde',
        'Un vrai moment pour soi',
      ],
    },
    booking: {
      bookingPath: localizedPagePaths.reserveOnline.fr,
      title: 'Réserver votre soin',
      description:
        'Réservez facilement votre soin en ligne et choisissez le créneau qui vous convient.',
      note: 'Échange facile par téléphone ou WhatsApp avant réservation',
      reassuranceNote:
        'Soin réservé exclusivement aux femmes, dans un cadre privé et confidentiel.',
      ctaText: 'Réserver en ligne',
    },
    contact: {
      title: 'Contact',
      subtitle:
        'Une question, une demande particulière, ou envie de réserver directement par téléphone ou sur WhatsApp ?',
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
      locationText:
        'Soins et massages bien-être à Annecy, sur rendez-vous, dans un cadre calme et confortable.',
    },
    whatsapp: {
      generalHref: getBusinessWhatsappHref(
        'Bonjour, je souhaite des informations pour un soin bien-être'
      ),
    },
  },
  en: {
    meta: {
      title: 'Women’s Wellness Massage in Annecy | Les Mains de Sérénité',
      description:
        'Women-only wellness treatments in Annecy, by appointment, in a calm and comfortable setting. Lymphatic drainage, maderotherapy, targeted treatments, and support programs.',
    },
    hero: {
      subtitle: 'Wellness massage for women in Annecy',
      title: 'Les Mains de Sérénité',
      description:
        'In Annecy, enjoy a calm, caring, and reassuring space dedicated to your well-being.',
      imageAlt: 'Wellness massage atmosphere',
      womenOnlyLabel: 'For women only · English welcome',
      benefitHighlight:
        'Especially appreciated for heavy legs, bloating, and everyday comfort',
      primaryCta: 'Book a treatment',
      secondaryCta: 'Call',
      whatsappCta: 'WhatsApp',
    },
    heroBridge: {
      parts: [
        {text: 'Choose '},
        {
          text: 'individual treatments',
          href: localizedPagePaths.soins.en,
        },
        {
          text: ' to release tension or restore a feeling of lightness, and ',
        },
        {
          text: 'support programs',
          href: localizedPagePaths.programs.en,
        },
        {text: ' when you want gentle guidance over several sessions.'},
      ],
    },
    promo: {
      title: 'To begin',
      headline: '45 min for €55',
      description:
        'A first personalized session to discover the approach, release tension, and take a real moment for yourself.',
      note: 'The ideal choice if you are discovering Les Mains de Sérénité or hesitating between several treatments.',
      ctaText: 'Book the offer',
      ctaLink: localizedPagePaths.discoveryOfferBooking.en,
      analyticsEvent: 'reserve_click',
      image: {
        src: DiscoveryOffer,
        alt: 'Wellness massage in a soft and soothing atmosphere',
      },
    },
    needsSection: {
      title: 'What do you need today?',
      intro:
        'A few simple cues to help you choose between a single treatment and a support program.',
      ctaText: 'View',
      items: [
        {
          title: 'Heavy legs',
          description:
            'A single treatment can help you reconnect with a feeling of lightness.',
          href: `${localizedPagePaths.soins.en}#lymphatic-drainage`,
          ctaText: 'View treatment',
        },
        {
          title: 'Feeling bloated',
          description:
            'A structured program may be more relevant when the need comes back often.',
          href: localizedPagePaths.program.en,
          ctaText: 'View program',
        },
        {
          title: 'Water retention',
          description:
            'Lymphatic drainage in Annecy is often chosen for this kind of need.',
          href: `${localizedPagePaths.soins.en}#lymphatic-drainage`,
          ctaText: 'View treatment',
        },
        {
          title: 'Need to slow down',
          description:
            'A relaxing treatment to release tension and return to a calmer moment.',
          href: `${localizedPagePaths.soins.en}#tension-relief-massage`,
          ctaText: 'View treatment',
        },
        {
          title: 'Silhouette / tone',
          description:
            'A body sculpting treatment or maderotherapy depending on how you feel.',
          href: `${localizedPagePaths.soins.en}#body-sculpting-massage`,
          ctaText: 'View treatments',
        },
        {
          title: 'I want support',
          description:
            'Support programs create a guided frame across several sessions.',
          href: localizedPagePaths.programs.en,
          ctaText: 'Discover',
        },
      ],
    },
    soinsSection: {
      title: 'Single treatment: choose the right ritual',
      intro:
        'A curated preview of women-only wellness treatments in Annecy, for a specific need or a true moment for yourself.',
      introLinks: [
        {
          text: 'wellness treatments in Annecy',
          href: localizedPagePaths.soins.en,
        },
      ],
      recommendedLabel: 'Recommended',
      ctaText: 'Discover the treatments',
      ctaLink: localizedPagePaths.soins.en,
      items: getHomeTreatmentItems('en'),
    },
    emotionalTransition: {
      title: 'Take your time',
      heading: 'Allow yourself a real pause',
      text: 'A moment to slow down, listen to your body, and return to a sense of calm.',
      image: {
        src: TeaLake,
        alt: 'Asian teapot and small cups on a terrace overlooking the lake and mountains',
      },
    },
    programPreview: {
      title: 'Support: go further across several sessions',
      intro:
        'When the need returns or you would like to be guided, support programs offer a more progressive frame than a single treatment.',
      introLinks: [
        {
          text: 'support programs',
          href: localizedPagePaths.programs.en,
        },
      ],
      ctaText: 'Discover the programs',
      ctaLink: localizedPagePaths.programs.en,
      items: getProgramPreviewItems('en'),
    },
    about: {
      title: 'Who will take care of you?',
      body: `
  I am Zahara, a wellness practitioner in Annecy. My background as a childcare assistant shaped an attentive, gentle, and body-aware approach.

  Trained in lymphatic drainage with the Renata França method, I offer women-only treatments in a calm, private, and reassuring setting.

  Every session is personalized to your needs at that moment: lightness, tension release, calm, or simply a real pause for yourself.

  My intention is to welcome you with care, presence, and kindness, so you can fully relax and enjoy the moment.
              `,
      imageAlt: 'Wellness practitioner portrait',
    },
    sessionSteps: {
      title: 'How does a session work?',
      intro: 'A simple and peaceful wellness experience.',
      reassuranceNote: 'You do not need to bring any equipment.',
      steps: [
        {
          title: 'Booking',
          description:
            'Choose the time slot that suits you online or by phone.',
        },
        {
          title: 'Appointment location',
          description:
            'Sessions take place by appointment in Annecy, in a calm and comfortable setting, with all equipment provided.',
        },
        {
          title: 'Your relaxation time',
          description:
            'Enjoy a personalized session in a calm and reassuring environment.',
        },
      ],
    },
    testimonials: {
      title: 'Client reviews',
      intro: 'Clients often describe it best.',
      items: [
        {
          text: 'I often had heavy legs at the end of the day. After the first session, I felt a real sense of lightness and better comfort over the following days.',
          author: 'Marie, Annecy',
        },
        {
          text: 'It was my first lymphatic drainage massage. Zahara took the time to explain everything and made me feel confident straight away. I felt comfortable from beginning to end.',
          author: 'Sophie, Annecy',
        },
        {
          text: 'I was looking for a moment to release the tension that had built up between work and family life. The session helped me truly switch off and take time for myself.',
          author: 'Camille, Annecy',
        },
        {
          text: 'I was pleasantly surprised by the space. The room is calm, warm, and very well cared for. You feel good there immediately, which really helps you relax from the first few minutes.',
          author: 'Élodie, Annecy',
        },
        {
          text: 'I especially appreciated how attentive and personalized the session felt. Zahara adapts to what you need in the moment instead of applying the same routine to everyone.',
          author: 'Julie, Annecy',
        },
      ],
    },
    feltBenefits: {
      title: 'Benefits often felt',
      intro:
        'These are some of the benefits clients often describe after a session, supported by a more attentive everyday relationship with the body.',
      items: [
        'A feeling of lightness',
        'Less heaviness in the legs',
        'Everyday comfort',
        'Deep relaxation',
        'A true moment for yourself',
      ],
    },
    booking: {
      bookingPath: localizedPagePaths.reserveOnline.en,
      title: 'Book your treatment',
      description:
        'Book your treatment online in just a few clicks and choose the time slot that suits you best.',
      note: 'Easy to reach by phone or WhatsApp before booking',
      reassuranceNote:
        'Treatment exclusively reserved for women, in a private and confidential setting.',
      ctaText: 'Book online',
    },
    contact: {
      title: 'Contact',
      subtitle:
        'Have a question, a specific request, or prefer to book directly by phone or WhatsApp?',
      whatsappTitle: 'WhatsApp',
      phoneTitle: 'Phone',
      emailTitle: 'Email',
      locationTitle: 'Location',
      whatsappDescription: 'Quick reply for any question before your booking.',
      phoneDescription: 'For a quick chat before booking.',
      emailDescription: 'Best if you prefer to ask your question in writing.',
      whatsappLabel: 'Message on WhatsApp',
      locationText:
        'Wellness massage in Annecy, by appointment, in a calm and comfortable setting.',
    },
    whatsapp: {
      generalHref: getBusinessWhatsappHref(
        'Hello, I would like more information about a wellness treatment.'
      ),
    },
  },
} satisfies Record<Locale, HomePageData>;
