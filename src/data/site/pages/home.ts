import DiscoveryOffer from '../../../assets/images/massage-legs-offer.png';
import type {HomePageData, Locale} from '../types';
import {localizedPagePaths} from '../paths';
import {discoveryOfferBookingHref, getBusinessWhatsappHref} from '../shared';

export const homePages = {
  fr: {
    meta: {
      title: 'Les Mains de Sérénité | Massage bien-être à Annecy pour femmes',
      description:
        'Massage bien-être à Annecy pour femmes, sur rendez-vous, dans un cadre calme et confortable. Drainage lymphatique, massages ciblés et conseils simples pour prolonger les bienfaits.',
    },
    hero: {
      subtitle: 'Massage bien-être à Annecy',
      title: 'Les Mains de Sérénité',
      description:
        'À Annecy, dans un cadre chaleureux, apaisant et sécurisant.',
      imageAlt: 'Ambiance bien-être et massage',
      womenOnlyLabel: 'Réservé aux femmes',
      benefitHighlight:
        'Idéal pour jambes lourdes, ventre gonflé et confort au quotidien',
      primaryCta: 'Réserver un massage',
      secondaryCta: 'Appeler',
      whatsappCta: 'WhatsApp',
    },
    promo: {
      title: 'Offre découverte',
      headline: '45 min à 55\u00A0€',
      description:
        'Une séance ciblée pour soulager les jambes lourdes ou le mal de dos, et retrouver une sensation de légèreté.',
      ctaText: 'Réserver l’offre',
      ctaLink: discoveryOfferBookingHref,
      analyticsEvent: 'reserve_click',
      image: {
        src: DiscoveryOffer,
        alt: 'Massage bien-être dans une ambiance douce et apaisante',
      },
    },
    needsSection: {
      title: 'Pour quels besoins ?',
      intro:
        'Repérez ce qui vous parle le plus, puis choisissez le soin ou l’accompagnement le plus adapté à vos besoins du moment.',
      ctaText: 'Voir l’option',
      items: [
        {
          title: 'Jambes lourdes',
          description:
            'Pour retrouver une sensation de légèreté et soulager l’inconfort en fin de journée.',
          href: `${localizedPagePaths.massages.fr}#drainage-lymphatique`,
        },
        {
          title: 'Ventre gonflé',
          description:
            'Pour accompagner une sensation de ventre plus léger grâce au drainage et aux conseils adaptés.',
          href: localizedPagePaths.program.fr,
        },
        {
          title: 'Rétention d’eau',
          description:
            'Pour aider le corps à relancer naturellement la circulation des fluides.',
          href: `${localizedPagePaths.massages.fr}#drainage-lymphatique`,
        },
        {
          title: 'Besoin de ralentir',
          description:
            'Pour s’offrir une pause, relâcher les tensions et retrouver un moment de calme.',
          href: `${localizedPagePaths.massages.fr}#massage-anti-douleur`,
        },
      ],
    },
    massagesSection: {
      title: 'Massages proposés',
      intro:
        'Des massages pensés pour soulager les tensions, offrir un véritable moment de bien-être et vous aider à mieux écouter les besoins de votre corps.',
      recommendedLabel: 'Durée conseillée',
      items: [
        {
          anchorId: 'drainage-lymphatique',
          title: 'Drainage lymphatique',
          description:
            'Drainage lymphatique dynamique selon la méthode Renata França. Idéal pour soulager les jambes lourdes, le ventre gonflé et la rétention d’eau, il procure une agréable sensation de légèreté.',
          note: 'Également adapté aux femmes enceintes à partir de la fin du premier trimestre, avec un protocole spécifiquement adapté.',
          icon: 'i-lucide-droplets',
          prices: [
            {duration: '1 h', price: '90 €', recommended: true},
            {duration: '1 h 30', price: '125 €'},
          ],
          ctaText: 'Voir les massages',
          ctaLink: localizedPagePaths.massages.fr,
        },
        {
          anchorId: 'massage-anti-douleur',
          title: 'Massage anti-douleur ou relaxant',
          description:
            'Massage personnalisé pour soulager les tensions musculaires, relâcher le stress et offrir une détente profonde. La séance s’adapte à vos besoins : dos, épaules, nuque, fatigue ou simple besoin de ralentir.',
          icon: 'i-lucide-activity',
          prices: [
            {duration: '45 min', price: '60 €'},
            {duration: '1 h', price: '80 €', recommended: true},
            {duration: '1 h 30', price: '115 €'},
          ],
          ctaText: 'Voir les massages',
          ctaLink: localizedPagePaths.massages.fr,
        },
        {
          anchorId: 'massage-remodelant',
          title: 'Massage remodelant',
          description:
            'Massage tonifiant qui aide à raffermir la peau et redessiner certaines zones du corps. Il stimule la circulation et améliore l’aspect de la silhouette.',
          icon: 'i-lucide-scan',
          prices: [
            {duration: '1 h', price: '110 €', recommended: true},
            {duration: '1 h 30', price: '135 €'},
          ],
          ctaText: 'Voir les massages',
          ctaLink: localizedPagePaths.massages.fr,
        },
        {
          anchorId: 'massage-visage-liftant',
          title: 'Massage visage liftant',
          description:
            'Soin du visage relaxant qui stimule la circulation et tonifie la peau. Il aide à illuminer le teint et procure un effet liftant naturel.',
          icon: 'i-lucide-sparkles',
          prices: [
            {duration: '30 min', price: '50 €'},
            {duration: '45 min', price: '65 €', recommended: true},
            {duration: '1 h', price: '85 €'},
          ],
          ctaText: 'Voir les massages',
          ctaLink: localizedPagePaths.massages.fr,
        },
        {
          anchorId: 'maderotherapie',
          title: 'Madérothérapie',
          description:
            'Soin ciblé utilisant des instruments en bois pour stimuler la circulation, favoriser le drainage naturel et procurer une agréable sensation de légèreté.',
          icon: 'i-lucide-leaf',
          prices: [
            {duration: '1 h', price: '90 €', recommended: true},
            {duration: '1 h 30', price: '125 €'},
          ],
          ctaText: 'Découvrir',
          ctaLink: localizedPagePaths.maderotherapie.fr,
        },
      ],
    },
    programPreview: {
      title: 'Programmes d’accompagnement',
      intro:
        'Deux façons d’aller plus loin qu’une séance unique, selon vos besoins et vos objectifs de bien-être.',
      items: [
        {
          eyebrow: 'Nouveau',
          title: 'Programme Ventre Léger & Jambes Légères',
          subtitle: 'Un accompagnement bien-être de 21 jours',
          description:
            'Pour les femmes qui souhaitent aller plus loin qu’une séance seule, ce programme associe 5 drainages lymphatiques Renata França à un bilan bien-être et à des conseils simples pour prolonger la sensation de légèreté au quotidien.',
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
            'Un accompagnement personnalisé en 3 séances où chaque massage est choisi selon vos besoins et l’évolution de vos ressentis.',
          includesTitle: 'Votre accompagnement peut inclure',
          includes: [
            'Drainage lymphatique',
            'Massage remodelant',
            'Madérothérapie',
          ],
          priceLabel: 'Tarif',
          price: '350 €',
          priceDetail: '3 séances',
          note: 'Vous n’avez pas à choisir entre drainage lymphatique, massage remodelant ou madérothérapie. Chaque séance est adaptée à vos besoins du moment pour vous accompagner vers une sensation de légèreté, de confort et de bien-être.',
          ctaText: 'Découvrir la cure',
          ctaLink: localizedPagePaths.cureFusion.fr,
          icon: 'i-lucide-sparkles',
        },
      ],
    },
    about: {
      title: 'À propos',
      body: `
  Je suis Zahara, praticienne en massage bien-être à Annecy, avec une formation d’auxiliaire de puériculture, ce qui m’a permis de développer une approche attentive, douce et à l’écoute du corps.

  Formée au drainage lymphatique selon la méthode Renata França, je propose des massages réservés aux femmes, pensés pour offrir un véritable moment de relâchement et de bien-être.

  Au fil de mes accompagnements, j’ai constaté que de nombreuses femmes avaient tendance à s’oublier entre la vie professionnelle, la vie familiale et les obligations du quotidien. Elles vivent parfois avec des tensions, de la fatigue ou une sensation de lourdeur qu’elles finissent par considérer comme normale.

  C’est ce qui m’a donné envie d’enrichir certains accompagnements, toujours centrés sur le toucher et l’écoute du corps, avec parfois quelques conseils simples pour prolonger les bienfaits au quotidien.

  Chaque séance est entièrement personnalisée, en fonction de vos besoins du moment, qu’il s’agisse de soulager des tensions, de relâcher le stress ou simplement de vous accorder un moment pour vous.

  Mon objectif est simple : vous offrir une parenthèse de bien-être dans un environnement calme, rassurant et bienveillant, pensé pour que vous puissiez pleinement relâcher et profiter de l’instant.
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
      title: 'Réserver votre massage',
      description:
        'Réservez facilement votre massage en ligne et choisissez le créneau qui vous convient.',
      note: 'Échange facile par téléphone ou WhatsApp avant réservation',
      reassuranceNote:
        'Massage réservé exclusivement aux femmes, dans un cadre privé et confidentiel.',
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
        'Massages bien-être à Annecy, sur rendez-vous, dans un cadre calme et confortable.',
    },
    whatsapp: {
      generalHref: getBusinessWhatsappHref(
        'Bonjour, je souhaite des informations pour un massage'
      ),
    },
  },
  en: {
    meta: {
      title: 'Women’s Wellness Massage in Annecy | Les Mains de Sérénité',
      description:
        'Women-only wellness massage in Annecy, by appointment, in a calm and comfortable setting. Lymphatic drainage, targeted massages, and simple guidance to help extend the benefits.',
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
      primaryCta: 'Book a massage',
      secondaryCta: 'Call',
      whatsappCta: 'WhatsApp',
    },
    promo: {
      title: 'Discovery offer',
      headline: '45 min for €55',
      description:
        'A targeted session to soothe heavy legs or back pain, and reconnect with a feeling of lightness.',
      ctaText: 'Book the offer',
      ctaLink: discoveryOfferBookingHref,
      analyticsEvent: 'reserve_click',
      image: {
        src: DiscoveryOffer,
        alt: 'Wellness massage in a soft and soothing atmosphere',
      },
    },
    needsSection: {
      title: 'Common needs',
      intro:
        'Find the need that feels closest to your situation, then choose the most relevant treatment or support.',
      ctaText: 'View option',
      items: [
        {
          title: 'Heavy legs',
          description:
            'To reconnect with a feeling of lightness and ease end-of-day discomfort.',
          href: `${localizedPagePaths.massages.en}#lymphatic-drainage`,
        },
        {
          title: 'Feeling bloated',
          description:
            'To support a lighter belly feeling through drainage and adapted guidance.',
          href: localizedPagePaths.program.en,
        },
        {
          title: 'Water retention',
          description:
            'To help the body naturally restart fluid circulation sensations.',
          href: `${localizedPagePaths.massages.en}#lymphatic-drainage`,
        },
        {
          title: 'Need to slow down',
          description:
            'To take a pause, release tension, and return to a calmer moment.',
          href: `${localizedPagePaths.massages.en}#tension-relief-massage`,
        },
      ],
    },
    massagesSection: {
      title: 'Available massages',
      intro:
        'Tailored massages designed to ease tension, offer a true moment of well-being, and help you listen more closely to your body’s needs.',
      recommendedLabel: 'Recommended',
      items: [
        {
          anchorId: 'lymphatic-drainage',
          title: 'Lymphatic drainage',
          description:
            'Dynamic lymphatic drainage using the Renata França method. Commonly chosen for heavy legs, feeling bloated, and water retention, while creating a pleasant feeling of lightness.',
          note: 'Also suitable during pregnancy from the end of the first trimester, with a specifically adapted protocol.',
          icon: 'i-lucide-droplets',
          prices: [
            {duration: '1 h', price: '90 €', recommended: true},
            {duration: '1 h 30', price: '125 €'},
          ],
          ctaText: 'View massages',
          ctaLink: localizedPagePaths.massages.en,
        },
        {
          anchorId: 'tension-relief-massage',
          title: 'Tension relief or relaxation massage',
          description:
            'A personalized massage to ease muscular tension, release stress, and provide deep relaxation. The session adapts to your needs: back, shoulders, neck, fatigue, or simply a need to slow down.',
          icon: 'i-lucide-activity',
          prices: [
            {duration: '45 min', price: '60 €'},
            {duration: '1 h', price: '80 €', recommended: true},
            {duration: '1 h 30', price: '115 €'},
          ],
          ctaText: 'View massages',
          ctaLink: localizedPagePaths.massages.en,
        },
        {
          anchorId: 'body-sculpting-massage',
          title: 'Body sculpting massage',
          description:
            'A toning massage that supports skin firmness and helps improve the appearance of the silhouette.',
          icon: 'i-lucide-scan',
          prices: [
            {duration: '1 h', price: '110 €', recommended: true},
            {duration: '1 h 30', price: '135 €'},
          ],
          ctaText: 'View massages',
          ctaLink: localizedPagePaths.massages.en,
        },
        {
          anchorId: 'lifting-facial-massage',
          title: 'Lifting facial massage',
          description:
            'A relaxing facial treatment that stimulates circulation and tones the skin, leaving the face feeling refreshed and naturally toned.',
          icon: 'i-lucide-sparkles',
          prices: [
            {duration: '30 min', price: '50 €'},
            {duration: '45 min', price: '65 €', recommended: true},
            {duration: '1 h', price: '85 €'},
          ],
          ctaText: 'View massages',
          ctaLink: localizedPagePaths.massages.en,
        },
        {
          anchorId: 'maderotherapy',
          title: 'Maderotherapy',
          description:
            'A targeted treatment using wooden instruments to stimulate circulation, support natural drainage, and create a pleasant feeling of lightness.',
          icon: 'i-lucide-leaf',
          prices: [
            {duration: '1 h', price: '90 €', recommended: true},
            {duration: '1 h 30', price: '125 €'},
          ],
          ctaText: 'Discover',
          ctaLink: localizedPagePaths.maderotherapie.en,
        },
      ],
    },
    programPreview: {
      title: 'Support programs',
      intro:
        'Two ways to go further than a single session, depending on your needs and wellness goals.',
      items: [
        {
          eyebrow: 'New',
          title: 'Light Belly & Light Legs Program',
          subtitle: 'A 21-day wellness accompaniment',
          description:
            'For women who would like to go further than a single session, this program combines 5 Renata França lymphatic drainage sessions with a wellness check-in and simple guidance to help extend the feeling of lightness in everyday life.',
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
            'A personalized 3-session accompaniment where each massage is chosen according to your needs and how your body responds.',
          includesTitle: 'Your accompaniment may include',
          includes: [
            'Lymphatic drainage',
            'Body sculpting massage',
            'Maderotherapy',
          ],
          priceLabel: 'Price',
          price: '350 €',
          priceDetail: '3 sessions',
          note: 'You do not have to choose between lymphatic drainage, body sculpting massage, or maderotherapy. Each session is adapted to what you need at that moment, supporting a feeling of lightness, comfort, and well-being.',
          ctaText: 'Discover the package',
          ctaLink: localizedPagePaths.cureFusion.en,
          icon: 'i-lucide-sparkles',
        },
      ],
    },
    about: {
      title: 'About',
      body: `
  I am Zahara, a wellness massage practitioner in Annecy. My background as a childcare assistant helped me develop an attentive, gentle, and body-aware approach.

  Trained in lymphatic drainage with the Renata França method, I offer women-only massages designed to provide a genuine moment of release and well-being.

  Through my sessions, I have noticed that many women tend to put themselves last between work, family life, and everyday responsibilities. They often live with tension, fatigue, or a feeling of heaviness until it starts to feel normal.

  That is why some sessions can include a little more support, while staying centered on touch, body awareness, and, when helpful, a few simple everyday tips to extend the benefits.

  Every session is fully personalized to your needs at that moment, whether you want to ease tension, let go of stress, or simply take time for yourself.

  My goal is simple: to offer you a peaceful wellness break in a calm, reassuring, and caring setting where you can fully relax and enjoy the moment.
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
      title: 'Book your massage',
      description:
        'Book your massage online in just a few clicks and choose the time slot that suits you best.',
      note: 'Easy to reach by phone or WhatsApp before booking',
      reassuranceNote:
        'Massage exclusively reserved for women, in a private and confidential setting.',
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
        'Hello, I would like more information about a massage.'
      ),
    },
  },
} satisfies Record<Locale, HomePageData>;
