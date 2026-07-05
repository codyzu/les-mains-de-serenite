import DiscoveryOffer from '../../../assets/images/massage-legs-offer.png';
import TeaLake from '../../../assets/tea-lake.png';
import type {HomePageData, Locale} from '../types';
import {localizedPagePaths} from '../paths';
import {discoveryOfferBookingHref, getBusinessWhatsappHref} from '../shared';

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
    promo: {
      title: 'Offre découverte',
      headline: '45 min à 55\u00A0€',
      description:
        'Un soin ciblé pour découvrir l’approche, accompagner les jambes lourdes ou les tensions du dos, et retrouver une sensation de légèreté.',
      ctaText: 'Réserver l’offre',
      ctaLink: discoveryOfferBookingHref,
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
          href: `${localizedPagePaths.massages.fr}#drainage-lymphatique`,
        },
        {
          title: 'Ventre gonflé',
          description:
            'Un accompagnement structuré peut être plus adapté si le besoin revient souvent.',
          href: localizedPagePaths.program.fr,
        },
        {
          title: 'Rétention d’eau',
          description:
            'Le drainage lymphatique à Annecy est souvent choisi pour ce besoin.',
          href: `${localizedPagePaths.massages.fr}#drainage-lymphatique`,
        },
        {
          title: 'Besoin de ralentir',
          description:
            'Un soin relaxant pour relâcher les tensions et retrouver du calme.',
          href: `${localizedPagePaths.massages.fr}#massage-anti-douleur`,
        },
        {
          title: 'Silhouette / tonicité',
          description:
            'Un soin remodelant ou une madérothérapie à Annecy selon votre ressenti.',
          href: `${localizedPagePaths.massages.fr}#massage-remodelant`,
        },
        {
          title: 'Je souhaite un accompagnement',
          description:
            'Les programmes créent un cadre sur plusieurs séances, avec un suivi plus guidé.',
          href: localizedPagePaths.programs.fr,
        },
      ],
    },
    massagesSection: {
      title: 'Soin ponctuel : choisir le rituel juste',
      intro:
        'Une sélection de soins bien-être à Annecy, réservés aux femmes, pour répondre à un besoin précis ou simplement s’accorder un vrai moment pour soi.',
      recommendedLabel: 'Durée conseillée',
      ctaText: 'Découvrir les soins',
      ctaLink: localizedPagePaths.massages.fr,
      items: [
        {
          anchorId: 'drainage-lymphatique',
          title: 'Drainage lymphatique',
          description:
            'Drainage lymphatique dynamique selon la méthode Renata França, choisi pour les jambes lourdes, la rétention d’eau et la sensation de ventre gonflé.',
          note: 'Également adapté aux femmes enceintes à partir de la fin du premier trimestre, avec un protocole spécifiquement adapté.',
          icon: 'i-lucide-droplets',
          prices: [
            {duration: '1 h', price: '90 €', recommended: true},
            {duration: '1 h 30', price: '125 €'},
          ],
          ctaText: 'Voir le soin',
          ctaLink: `${localizedPagePaths.massages.fr}#drainage-lymphatique`,
        },
        {
          anchorId: 'massage-anti-douleur',
          title: 'Soin thérapeutique ou relaxant',
          description:
            'Soin personnalisé pour accompagner les tensions, relâcher le stress et retrouver une détente profonde dans un cadre calme.',
          icon: 'i-lucide-activity',
          prices: [
            {duration: '45 min', price: '60 €'},
            {duration: '1 h', price: '80 €', recommended: true},
            {duration: '1 h 30', price: '115 €'},
          ],
          ctaText: 'Voir le soin',
          ctaLink: `${localizedPagePaths.massages.fr}#massage-anti-douleur`,
        },
        {
          anchorId: 'massage-remodelant',
          title: 'Soin remodelant',
          description:
            'Soin tonifiant pensé pour stimuler les tissus, soutenir la sensation de fermeté et accompagner l’harmonie de la silhouette.',
          icon: 'i-lucide-scan',
          prices: [
            {duration: '1 h', price: '110 €', recommended: true},
            {duration: '1 h 30', price: '135 €'},
          ],
          ctaText: 'Voir le soin',
          ctaLink: `${localizedPagePaths.massages.fr}#massage-remodelant`,
        },
        {
          anchorId: 'massage-visage-liftant',
          title: 'Soin visage liftant',
          description:
            'Soin du visage relaxant pour stimuler la circulation, tonifier la peau et retrouver un teint plus lumineux.',
          icon: 'i-lucide-sparkles',
          prices: [
            {duration: '30 min', price: '50 €'},
            {duration: '45 min', price: '65 €', recommended: true},
            {duration: '1 h', price: '85 €'},
          ],
          ctaText: 'Voir le soin',
          ctaLink: `${localizedPagePaths.massages.fr}#massage-visage-liftant`,
        },
        {
          anchorId: 'maderotherapie',
          title: 'Soin de madérothérapie',
          description:
            'Soin ciblé avec instruments en bois pour stimuler la circulation, soutenir le drainage naturel et retrouver une sensation de légèreté.',
          icon: 'i-lucide-leaf',
          prices: [
            {duration: '1 h', price: '90 €', recommended: true},
            {duration: '1 h 30', price: '125 €'},
          ],
          ctaText: 'Voir le soin',
          ctaLink: localizedPagePaths.maderotherapie.fr,
        },
      ],
    },
    emotionalTransition: {
      title: 'Prendre le temps',
      text: 'Prendre soin de soi commence parfois par s’accorder un vrai moment.',
      image: {
        src: TeaLake,
        alt: 'Théière asiatique et petites tasses sur une terrasse avec vue sur le lac et les montagnes',
      },
    },
    programPreview: {
      title: 'Accompagnement : aller plus loin sur plusieurs séances',
      intro:
        'Lorsque le besoin revient ou que vous souhaitez être guidée, les programmes d’accompagnement offrent un cadre plus progressif qu’un soin ponctuel.',
      ctaText: 'Découvrir les programmes',
      ctaLink: localizedPagePaths.programs.fr,
      items: [
        {
          eyebrow: 'Nouveau',
          title: 'Programme Ventre Léger & Jambes Légères',
          subtitle: 'Un accompagnement bien-être de 21 jours',
          description:
            'Un programme structuré de 21 jours qui associe 5 séances de drainage lymphatique, un bilan bien-être, un guide simple et un suivi WhatsApp.',
          includesTitle: 'Le programme comprend',
          includes: [
            '5 séances de drainage lymphatique',
            'Un bilan bien-être de 20 minutes',
            'Un guide alimentaire simple',
            'Un suivi WhatsApp pendant 21 jours',
          ],
          priceLabel: 'Tarif lancement',
          price: '350 €',
          note: 'L’accompagnement associe drainage lymphatique, écoute du corps et conseils simples du quotidien pour vous aider à retrouver une sensation de légèreté durable.',
          ctaText: 'Découvrir le programme',
          ctaLink: localizedPagePaths.program.fr,
          icon: 'i-lucide-calendar-heart',
        },
        {
          eyebrow: 'Nouvelle cure',
          title: 'Cure Fusion',
          subtitle: '3 séances personnalisées',
          description:
            'Un accompagnement en 3 séances personnalisées, avec un soin choisi à chaque rendez-vous selon vos besoins et votre évolution.',
          includesTitle: 'Selon vos besoins, votre accompagnement peut inclure',
          includes: [
            'Drainage lymphatique',
            'Soin remodelant',
            'Madérothérapie',
          ],
          priceLabel: 'Tarif',
          price: '350 €',
          priceDetail: '3 séances',
          note: 'Vous n’avez pas à choisir une formule fixe. Le soin est adapté au fil des séances pour créer un accompagnement plus juste et plus fluide.',
          ctaText: 'Découvrir la cure',
          ctaLink: localizedPagePaths.cureFusion.fr,
          icon: 'i-lucide-sparkles',
        },
      ],
    },
    about: {
      title: 'À propos',
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
      bookingPath: localizedPagePaths.reserve.fr,
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
    promo: {
      title: 'Discovery offer',
      headline: '45 min for €55',
      description:
        'A targeted treatment to discover the approach, soothe heavy legs or back tension, and reconnect with a feeling of lightness.',
      ctaText: 'Book the offer',
      ctaLink: discoveryOfferBookingHref,
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
          href: `${localizedPagePaths.massages.en}#lymphatic-drainage`,
        },
        {
          title: 'Feeling bloated',
          description:
            'A structured program may be more relevant when the need comes back often.',
          href: localizedPagePaths.program.en,
        },
        {
          title: 'Water retention',
          description:
            'Lymphatic drainage in Annecy is often chosen for this kind of need.',
          href: `${localizedPagePaths.massages.en}#lymphatic-drainage`,
        },
        {
          title: 'Need to slow down',
          description:
            'A relaxing treatment to release tension and return to a calmer moment.',
          href: `${localizedPagePaths.massages.en}#tension-relief-massage`,
        },
        {
          title: 'Silhouette / tone',
          description:
            'A body sculpting treatment or maderotherapy depending on how you feel.',
          href: `${localizedPagePaths.massages.en}#body-sculpting-massage`,
        },
        {
          title: 'I want support',
          description:
            'Support programs create a guided frame across several sessions.',
          href: localizedPagePaths.programs.en,
        },
      ],
    },
    massagesSection: {
      title: 'Single treatment: choose the right ritual',
      intro:
        'A curated preview of women-only wellness treatments in Annecy, for a specific need or a true moment for yourself.',
      recommendedLabel: 'Recommended',
      ctaText: 'Discover the treatments',
      ctaLink: localizedPagePaths.massages.en,
      items: [
        {
          anchorId: 'lymphatic-drainage',
          title: 'Lymphatic drainage',
          description:
            'Dynamic lymphatic drainage using the Renata França method, often chosen for heavy legs, water retention, and a bloated feeling.',
          note: 'Also suitable during pregnancy from the end of the first trimester, with a specifically adapted protocol.',
          icon: 'i-lucide-droplets',
          prices: [
            {duration: '1 h', price: '90 €', recommended: true},
            {duration: '1 h 30', price: '125 €'},
          ],
          ctaText: 'View treatment',
          ctaLink: `${localizedPagePaths.massages.en}#lymphatic-drainage`,
        },
        {
          anchorId: 'tension-relief-massage',
          title: 'Therapeutic or relaxing treatment',
          description:
            'A personalized treatment to ease tension, release stress, and return to deep relaxation in a calm setting.',
          icon: 'i-lucide-activity',
          prices: [
            {duration: '45 min', price: '60 €'},
            {duration: '1 h', price: '80 €', recommended: true},
            {duration: '1 h 30', price: '115 €'},
          ],
          ctaText: 'View treatment',
          ctaLink: `${localizedPagePaths.massages.en}#tension-relief-massage`,
        },
        {
          anchorId: 'body-sculpting-massage',
          title: 'Body sculpting treatment',
          description:
            'A toning treatment designed to stimulate the tissues, support a firmer feeling, and accompany silhouette harmony.',
          icon: 'i-lucide-scan',
          prices: [
            {duration: '1 h', price: '110 €', recommended: true},
            {duration: '1 h 30', price: '135 €'},
          ],
          ctaText: 'View treatment',
          ctaLink: `${localizedPagePaths.massages.en}#body-sculpting-massage`,
        },
        {
          anchorId: 'lifting-facial-massage',
          title: 'Lifting facial treatment',
          description:
            'A relaxing facial treatment to stimulate circulation, tone the skin, and bring back a brighter-looking complexion.',
          icon: 'i-lucide-sparkles',
          prices: [
            {duration: '30 min', price: '50 €'},
            {duration: '45 min', price: '65 €', recommended: true},
            {duration: '1 h', price: '85 €'},
          ],
          ctaText: 'View treatment',
          ctaLink: `${localizedPagePaths.massages.en}#lifting-facial-massage`,
        },
        {
          anchorId: 'maderotherapy',
          title: 'Maderotherapy treatment',
          description:
            'A targeted treatment using wooden instruments to stimulate circulation, support natural drainage, and create a feeling of lightness.',
          icon: 'i-lucide-leaf',
          prices: [
            {duration: '1 h', price: '90 €', recommended: true},
            {duration: '1 h 30', price: '125 €'},
          ],
          ctaText: 'View treatment',
          ctaLink: localizedPagePaths.maderotherapie.en,
        },
      ],
    },
    emotionalTransition: {
      title: 'Take your time',
      text: 'Taking care of yourself sometimes starts with allowing yourself a real moment.',
      image: {
        src: TeaLake,
        alt: 'Asian teapot and small cups on a terrace overlooking the lake and mountains',
      },
    },
    programPreview: {
      title: 'Support: go further across several sessions',
      intro:
        'When the need returns or you would like to be guided, support programs offer a more progressive frame than a single treatment.',
      ctaText: 'Discover the programs',
      ctaLink: localizedPagePaths.programs.en,
      items: [
        {
          eyebrow: 'New',
          title: 'Light Belly & Light Legs Program',
          subtitle: 'A 21-day wellness accompaniment',
          description:
            'A structured 21-day program with 5 lymphatic drainage sessions, a wellness check-in, a simple guide, and WhatsApp follow-up.',
          includesTitle: 'The program includes',
          includes: [
            '5 lymphatic drainage sessions',
            'A 20-minute wellness check-in',
            'A simple food guidance PDF',
            'WhatsApp follow-up for 21 days',
          ],
          priceLabel: 'Launch price',
          price: '350 €',
          note: 'The accompaniment combines lymphatic drainage, body awareness, and simple everyday guidance to help you reconnect with a lasting feeling of lightness.',
          ctaText: 'Discover the program',
          ctaLink: localizedPagePaths.program.en,
          icon: 'i-lucide-calendar-heart',
        },
        {
          eyebrow: 'New package',
          title: 'Cure Fusion',
          subtitle: '3 personalized sessions',
          description:
            'A 3-session personalized accompaniment, with the treatment chosen at each appointment according to your needs and evolution.',
          includesTitle:
            'Depending on your needs, your accompaniment may include',
          includes: [
            'Lymphatic drainage',
            'Body sculpting treatment',
            'Maderotherapy',
          ],
          priceLabel: 'Price',
          price: '350 €',
          priceDetail: '3 sessions',
          note: 'You do not have to choose a fixed formula. The treatment is adapted across the sessions for a more fluid and precise accompaniment.',
          ctaText: 'Discover the package',
          ctaLink: localizedPagePaths.cureFusion.en,
          icon: 'i-lucide-sparkles',
        },
      ],
    },
    about: {
      title: 'About',
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
      bookingPath: localizedPagePaths.reserve.en,
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
