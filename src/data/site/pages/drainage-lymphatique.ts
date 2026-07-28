// @unocss-include
import type {DrainageLymphatiquePageData, Locale} from '../types';
import {localizedPagePaths} from '../paths';
import {getBusinessWhatsappHref} from '../shared';

export const drainageLymphatiquePages = {
  fr: {
    path: localizedPagePaths.drainageLymphatique.fr,
    meta: {
      title: 'Drainage lymphatique Renata França à Annecy',
      description:
        'Découvrez le drainage lymphatique Renata França à Annecy : un soin bien-être dynamique, précis et personnalisé, réservé aux femmes.',
      openGraphTitle: 'Drainage lymphatique Renata França à Annecy',
      openGraphDescription:
        'Un soin manuel dynamique et personnalisé pour retrouver une sensation de légèreté, dans un cadre privé réservé aux femmes à Annecy.',
    },
    hero: {
      title: 'Drainage lymphatique',
      description:
        'Un soin manuel du corps selon la méthode Renata França, précis, dynamique et rythmé, pour accompagner vos sensations de lourdeur et vous offrir une parenthèse de légèreté à Annecy.',
      primaryCta: 'Réserver mon drainage lymphatique',
      imageAlt:
        'Drainage lymphatique manuel des jambes dans un espace bien-être chaleureux à Annecy',
      keyInfo: [
        'Méthode Renata França',
        '60 ou 90 minutes',
        'Réservé aux femmes',
      ],
    },
    method: {
      title: 'La méthode Renata França : un drainage dynamique et précis',
      paragraphs: [
        'Le drainage lymphatique selon la méthode Renata França est un soin manuel réalisé sur l’ensemble du corps. Il se distingue des approches très lentes par des manœuvres précises, des pompages spécifiques et un rythme soutenu. Les gestes s’enchaînent avec fluidité pour accompagner la circulation naturelle des liquides dans les tissus, tout en restant adaptés à votre confort.',
        'Le soin porte notamment sur les jambes et l’abdomen, avec une attention ajustée aux zones où vous ressentez davantage de lourdeur ou de tension. Il ne s’agit ni d’un massage médical ni d’une promesse de transformation : c’est une technique de bien-être globale, choisie pour les sensations qu’elle peut procurer et pour le temps d’écoute qu’elle offre au corps.',
        'Chaque organisme réagit à sa manière. Certaines femmes décrivent un corps plus léger ou un ventre plus souple dès la fin de la séance ; d’autres ressentent surtout une détente profonde, parfois dans les heures qui suivent. Ces ressentis peuvent varier d’un rendez-vous à l’autre.',
      ],
      highlight:
        'Une technique tonique ne signifie pas une séance brusque : la pression et le rythme restent ajustés à votre sensibilité, à chaque étape du soin.',
    },
    forYou: {
      title: 'Ce soin peut vous convenir si…',
      intro:
        'Le drainage est souvent choisi lorsque le corps paraît plus lourd, gonflé ou tendu, ou simplement lorsque l’on souhaite retrouver plus de confort.',
      items: [
        {
          title: 'Vos jambes semblent lourdes',
          description:
            'Après une journée debout, de longues heures assise ou une période où vous bougez moins, vous recherchez une sensation de légèreté.',
          icon: 'i-lucide-feather',
        },
        {
          title: 'Vous vous sentez gonflée',
          description:
            'Votre corps vous paraît parfois plus serré dans les vêtements, avec une impression de rétention d’eau ou de tissus tendus.',
          icon: 'i-lucide-droplets',
        },
        {
          title: 'Votre ventre est tendu',
          description:
            'Vous ressentez un inconfort ou un ventre plus gonflé à certaines périodes, notamment selon le stress, le rythme de vie ou le cycle.',
          icon: 'i-lucide-waves',
        },
        {
          title: 'La chaleur vous pèse',
          description:
            'Les journées chaudes accentuent parfois la sensation de jambes lourdes et l’envie de retrouver plus de fraîcheur et de mobilité.',
          icon: 'i-lucide-sun',
        },
        {
          title: 'Vous revenez d’un voyage',
          description:
            'Après un long trajet en voiture, en train ou en avion, vous souhaitez délier le corps et sortir de cette impression d’immobilité.',
          icon: 'i-lucide-plane',
        },
        {
          title: 'Vous avez besoin d’une pause',
          description:
            'Vous souhaitez ralentir, respirer et recevoir un soin attentif, entièrement consacré à votre confort du moment.',
          icon: 'i-lucide-heart',
        },
      ],
    },
    benefits: {
      title: 'Des sensations qui restent personnelles',
      intro:
        'Le drainage Renata França est apprécié pour l’équilibre entre technicité et détente. Il peut accompagner plusieurs ressentis, sans résultat automatique ni permanent.',
      items: [
        {
          title: 'Une agréable légèreté',
          description:
            'Les jambes ou l’ensemble du corps peuvent sembler moins lourds et plus disponibles après le soin.',
          icon: 'i-lucide-sparkles',
        },
        {
          title: 'Des tissus plus souples',
          description:
            'Le travail manuel peut apporter une sensation de décongestion et de souplesse sur les zones tendues.',
          icon: 'i-lucide-waves',
        },
        {
          title: 'Un ventre plus confortable',
          description:
            'Le travail abdominal peut être apprécié lorsque le ventre paraît gonflé ou sous tension.',
          icon: 'i-lucide-circle',
        },
        {
          title: 'Une détente profonde',
          description:
            'Malgré son rythme dynamique, la séance invite souvent à ralentir et à relâcher la pression du quotidien.',
          icon: 'i-lucide-moon-star',
        },
      ],
      note: 'Une silhouette peut paraître temporairement moins gonflée lorsque les tissus sont plus confortables. Cet effet ne correspond pas à une perte de graisse ou de poids.',
    },
    session: {
      title: 'Comment se déroule votre séance ?',
      intro:
        'Vous êtes accueillie sur rendez-vous dans un espace calme et privé à Annecy. Le soin dure 60 ou 90 minutes selon le temps que vous souhaitez vous accorder.',
      items: [
        {
          title: 'Un échange avant de commencer',
          description:
            'Nous parlons de vos attentes, de vos sensations, de votre rythme de vie et de toute précaution utile. Ce temps permet à Zahara de comprendre ce dont vous avez besoin ce jour-là.',
        },
        {
          title: 'Une installation respectueuse',
          description:
            'Vous vous installez confortablement. Les modalités du soin sont expliquées avec simplicité et votre pudeur est préservée tout au long de la séance.',
        },
        {
          title: 'Le drainage du corps',
          description:
            'Zahara réalise les gestes manuels précis et rythmés de la méthode Renata França, notamment sur les jambes et l’abdomen. La pression est ajustée à vos réactions et à votre sensibilité.',
        },
        {
          title: 'Un retour au calme',
          description:
            'Après les dernières manœuvres, vous prenez quelques instants pour vous relever tranquillement. Zahara recueille votre ressenti et vous partage des conseils simples, adaptés à votre journée.',
        },
      ],
    },
    approach: {
      eyebrow: 'Une présence attentive',
      title: 'Pourquoi choisir Les Mains de Sérénité ?',
      paragraphs: [
        'Un drainage se choisit pour sa méthode, mais aussi pour la qualité de la présence qui l’accompagne. Zahara vous reçoit seule, dans un cadre chaleureux, confidentiel et exclusivement réservé aux femmes. Il n’y a pas de protocole appliqué mécaniquement : chaque rendez-vous commence par l’écoute.',
        'Avant de se former aux massages et au drainage lymphatique Renata França, Zahara a travaillé comme auxiliaire de puériculture. Ce parcours a nourri sa manière de prendre soin : observer avec finesse, écouter sans jugement, expliquer avec douceur et rester attentive aux réactions du corps.',
        'Pendant la séance, vous pouvez dire ce qui vous convient, demander une adaptation ou simplement vous laisser porter. Le rythme reste précis, mais votre confort guide le soin.',
      ],
      points: [
        'Une séance personnalisée selon votre ressenti',
        'Un espace intime, calme et réservé aux femmes',
        'Une pratique de bien-être précise et respectueuse',
        'Une écoute nourrie par un parcours dans le soin',
      ],
    },
    beforeAfter: {
      title: 'Avant et après le rendez-vous',
      intro:
        'Aucune préparation compliquée n’est nécessaire. Quelques gestes simples vous aident à arriver confortablement et à prolonger la sensation de bien-être.',
      beforeTitle: 'Avant la séance',
      before: [
        'Hydratez-vous normalement au fil de la journée.',
        'Évitez si possible un repas très copieux juste avant le rendez-vous.',
        'Prévoyez une tenue souple et confortable pour repartir.',
        'Signalez à Zahara toute situation de santé particulière avant la séance.',
      ],
      afterTitle: 'Après la séance',
      after: [
        'Buvez selon votre soif et gardez une hydratation régulière.',
        'Marchez quelques minutes ou bougez doucement si vous en avez envie.',
        'Évitez de rester immobile pendant de longues heures.',
        'Écoutez votre niveau d’énergie et accordez-vous du repos si nécessaire.',
      ],
    },
    precautions: {
      title: 'Précautions avant de réserver',
      description:
        'Contactez Zahara avant de choisir votre créneau si l’une des situations suivantes vous concerne. Un court échange permettra de savoir s’il est préférable d’adapter ou de reporter le soin.',
      items: [
        'Grossesse ou période post-partum',
        'Intervention chirurgicale récente',
        'Traitement médical important en cours',
        'Affection circulatoire ou lymphatique diagnostiquée',
        'Fièvre, infection ou inflammation aiguë',
        'Toute autre situation de santé particulière',
      ],
      note: 'Ce drainage est un soin de bien-être. Il ne remplace pas un avis médical, un drainage thérapeutique, des soins infirmiers ou une prise en charge en kinésithérapie.',
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        {
          question: 'Quelle est la différence avec un drainage classique ?',
          answer:
            'La méthode Renata França se caractérise par des mouvements plus dynamiques, précis et rythmés que les approches très lentes. Elle reste manuelle et la pression est adaptée pour conserver une séance confortable.',
        },
        {
          question: 'Le drainage est-il douloureux ?',
          answer:
            'Il peut être tonique, mais il ne doit pas être douloureux. Certaines zones sont parfois plus sensibles ; Zahara ajuste alors la pression et vous invite à partager votre ressenti.',
        },
        {
          question: 'Que puis-je ressentir après la séance ?',
          answer:
            'Vous pouvez ressentir une sensation de légèreté, de souplesse ou de détente. Certaines femmes remarquent aussi un ventre moins tendu ou une envie d’uriner plus fréquente. Les réactions varient selon les personnes et les séances.',
        },
        {
          question: 'Le drainage fait-il perdre du poids ?',
          answer:
            'Non. Il n’agit pas sur les cellules graisseuses et ne remplace ni l’activité physique ni une alimentation équilibrée. Quand les tissus paraissent moins gonflés, la silhouette peut sembler temporairement plus harmonieuse, sans qu’il s’agisse d’une perte de graisse.',
        },
        {
          question: 'Combien de séances faut-il prévoir ?',
          answer:
            'Une séance ponctuelle peut répondre à un besoin du moment, après un voyage ou avant une occasion par exemple. Si vous souhaitez un rythme régulier, Zahara vous aidera à choisir une fréquence réaliste selon vos attentes, sans engagement inutile.',
        },
        {
          question: 'Puis-je venir pendant mes règles ?',
          answer:
            'Oui, si vous vous sentez à l’aise. Certaines femmes apprécient le soin pendant cette période lorsqu’elles se sentent plus gonflées. La séance peut aussi être reportée si votre confort vous invite à attendre.',
        },
        {
          question: 'Le drainage est-il possible pendant la grossesse ?',
          answer:
            'Certaines situations peuvent permettre un protocole adapté, mais il est indispensable de contacter Zahara avant de réserver. Elle pourra vous demander un avis médical selon le stade et le déroulement de la grossesse.',
        },
        {
          question: 'Quelle durée choisir : 60 ou 90 minutes ?',
          answer:
            'Soixante minutes permettent de découvrir le soin et de travailler l’ensemble du corps. La séance de 90 minutes offre davantage de temps pour l’échange, les zones qui demandent une attention particulière et un retour au calme plus enveloppant.',
        },
      ],
    },
    related: {
      eyebrow: 'À découvrir aussi',
      title: 'Prolonger l’expérience selon votre envie',
      description:
        'Le drainage du corps peut être complété par un soin du visage ou laisser place à une approche plus ciblée des tissus.',
      items: [
        {
          title: 'Miracle Face',
          description:
            'Le protocole visage de la méthode Renata França, pour un moment frais, tonique et relaxant.',
          text: 'Voir Miracle Face',
          href: `${localizedPagePaths.soins.fr}#massage-visage-liftant`,
        },
        {
          title: 'Madérothérapie',
          description:
            'Un soin avec instruments en bois, plus ciblé sur la stimulation des tissus et la sensation de tonicité.',
          text: 'Découvrir la madérothérapie',
          href: localizedPagePaths.maderotherapie.fr,
        },
      ],
    },
    cta: {
      title: 'Offrez-vous une parenthèse de légèreté',
      description:
        'Réservez votre drainage lymphatique Renata França à Annecy et profitez d’un soin manuel personnalisé, attentif à votre confort et à vos sensations.',
      text: 'Réserver mon drainage lymphatique',
      href: localizedPagePaths.reserveOnline.fr,
      analyticsEvent: 'reserve_click',
      reassurance: {
        prefix: 'Une question ou une situation particulière ? Écrivez-moi sur ',
        linkText: 'WhatsApp',
        suffix: ' avant de réserver.',
        href: getBusinessWhatsappHref(
          "Bonjour, j'ai une question avant de réserver un drainage lymphatique.",
        ),
        analyticsEvent: 'whatsapp_click',
      },
    },
    reassuranceNote:
      'Soin de bien-être réservé aux femmes, dans un cadre privé à Annecy.',
  },
  en: {
    path: localizedPagePaths.drainageLymphatique.en,
    meta: {
      title: 'Renata França Lymphatic Drainage in Annecy',
      description:
        'Discover Renata França lymphatic drainage in Annecy: a precise, dynamic, personalized wellness treatment for women.',
      openGraphTitle: 'Renata França Lymphatic Drainage in Annecy',
      openGraphDescription:
        'A dynamic, personalized manual treatment for a feeling of lightness, in a private women-only setting in Annecy.',
    },
    hero: {
      title: 'Lymphatic drainage',
      description:
        'A precise, dynamic, rhythmic full-body treatment using the Renata França method, designed to support a feeling of lightness in a calm private setting in Annecy.',
      primaryCta: 'Book my lymphatic drainage',
      imageAlt:
        'Manual lymphatic drainage treatment on the legs in a warm wellness room in Annecy',
      keyInfo: ['Renata França method', '60 or 90 minutes', 'Women only'],
    },
    method: {
      title: 'The Renata França method: dynamic and precise',
      paragraphs: [
        'Renata França lymphatic drainage is a manual full-body wellness treatment. It differs from very slow approaches through precise movements, specific pumping techniques, and a sustained rhythm. The gestures flow together while remaining responsive to your comfort.',
        'The session focuses in particular on the legs and abdomen, with extra attention where you feel heaviness or tension. It is not a medical massage or a promise of transformation. It is a holistic wellness technique chosen for the sensations it may bring and for the time it gives you to reconnect with your body.',
        'Every body responds differently. Some women describe feeling lighter or more comfortable at the end of the session; others mainly notice deep relaxation, sometimes later in the day. Sensations can vary from one appointment to another.',
      ],
      highlight:
        'A toning technique does not mean a harsh treatment: pressure and rhythm are adjusted to your sensitivity throughout the session.',
    },
    forYou: {
      title: 'This treatment may suit you if…',
      intro:
        'Lymphatic drainage is often chosen when the body feels heavy, swollen, or tense, or simply when you would like to feel more comfortable.',
      items: [
        {
          title: 'Your legs feel heavy',
          description:
            'After standing, sitting, or moving less than usual, you are looking for a pleasant feeling of lightness.',
          icon: 'i-lucide-feather',
        },
        {
          title: 'You feel puffy',
          description:
            'Your body sometimes feels tighter in your clothes, with a sense of water retention or tissue tension.',
          icon: 'i-lucide-droplets',
        },
        {
          title: 'Your abdomen feels tense',
          description:
            'You notice bloating or discomfort at certain times, depending on stress, your routine, or your cycle.',
          icon: 'i-lucide-waves',
        },
        {
          title: 'Hot weather feels heavy',
          description:
            'Warm days may increase heavy-leg sensations and your wish for greater ease of movement.',
          icon: 'i-lucide-sun',
        },
        {
          title: 'You have just travelled',
          description:
            'After a long car, train, or plane journey, you would like to help your body move on from hours of stillness.',
          icon: 'i-lucide-plane',
        },
        {
          title: 'You need a real pause',
          description:
            'You would like to slow down and receive a treatment entirely attentive to your comfort in the moment.',
          icon: 'i-lucide-heart',
        },
      ],
    },
    benefits: {
      title: 'Sensations that remain personal',
      intro:
        'Renata França drainage is appreciated for its balance of technique and relaxation. It can support several sensations without promising automatic or permanent results.',
      items: [
        {
          title: 'A feeling of lightness',
          description:
            'Your legs or your whole body may feel lighter and more comfortable after the treatment.',
          icon: 'i-lucide-sparkles',
        },
        {
          title: 'More supple tissues',
          description:
            'The manual work may bring a sense of ease and suppleness to areas that felt tense.',
          icon: 'i-lucide-waves',
        },
        {
          title: 'A more comfortable abdomen',
          description:
            'Abdominal work can feel welcome when the belly seems bloated or under tension.',
          icon: 'i-lucide-circle',
        },
        {
          title: 'Deep relaxation',
          description:
            'Despite its dynamic rhythm, the session often creates space to slow down and release everyday pressure.',
          icon: 'i-lucide-moon-star',
        },
      ],
      note: 'When tissues feel less congested, the silhouette may temporarily appear less puffy. This is not fat loss or weight loss.',
    },
    session: {
      title: 'What happens during a session?',
      intro:
        'You are welcomed by appointment in a calm, private space in Annecy. Choose 60 or 90 minutes depending on the time you would like to give yourself.',
      items: [
        {
          title: 'A conversation first',
          description:
            'We discuss your expectations, how you feel, your routine, and any useful precautions so Zahara can understand what you need that day.',
        },
        {
          title: 'A respectful welcome',
          description:
            'You settle in comfortably. The treatment is explained simply and your modesty is protected throughout the appointment.',
        },
        {
          title: 'Full-body drainage',
          description:
            'Zahara performs the precise, rhythmic manual gestures of the Renata França method, especially on the legs and abdomen, adapting pressure to your sensitivity.',
        },
        {
          title: 'A gentle close',
          description:
            'You take a few moments before getting up. Zahara checks in with how you feel and shares simple guidance suited to the rest of your day.',
        },
      ],
    },
    approach: {
      eyebrow: 'Attentive care',
      title: 'Why choose Les Mains de Sérénité?',
      paragraphs: [
        'A drainage treatment is about the method, but also the quality of the presence that accompanies it. Zahara welcomes you one-to-one in a warm, confidential space reserved exclusively for women. Every appointment begins with listening.',
        'Before training in massage and the Renata França method, Zahara worked as a childcare assistant. This background shaped how she cares for people: observing carefully, listening without judgement, explaining gently, and remaining attentive to the body’s reactions.',
        'During the treatment, you can say what works for you, ask for an adjustment, or simply let go. The rhythm remains precise, while your comfort guides the session.',
      ],
      points: [
        'A session personalized to how you feel',
        'A calm, intimate women-only space',
        'A precise and respectful wellness practice',
        'Listening shaped by a professional care background',
      ],
    },
    beforeAfter: {
      title: 'Before and after your appointment',
      intro:
        'No complicated preparation is needed. A few simple habits help you arrive comfortably and extend the sense of well-being.',
      beforeTitle: 'Before',
      before: [
        'Hydrate normally throughout the day.',
        'Avoid a very large meal immediately beforehand when possible.',
        'Wear soft, comfortable clothes for your journey home.',
        'Tell Zahara about any particular health situation in advance.',
      ],
      afterTitle: 'After',
      after: [
        'Drink according to your thirst and hydrate regularly.',
        'Walk for a few minutes or move gently if you feel like it.',
        'Avoid remaining still for many hours.',
        'Listen to your energy and rest if you need to.',
      ],
    },
    precautions: {
      title: 'Precautions before booking',
      description:
        'Contact Zahara before choosing a time if any of the following applies. A short conversation will help decide whether the treatment should be adapted or postponed.',
      items: [
        'Pregnancy or the postpartum period',
        'Recent surgery',
        'Significant current medical treatment',
        'A diagnosed circulatory or lymphatic condition',
        'Fever, infection, or acute inflammation',
        'Any other particular health situation',
      ],
      note: 'This is a wellness treatment. It does not replace medical advice, therapeutic drainage, nursing care, or physiotherapy.',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'How does it differ from classic drainage?',
          answer:
            'The Renata França method uses more dynamic, precise, rhythmic movements than very slow approaches. It remains manual, and pressure is adapted to keep the session comfortable.',
        },
        {
          question: 'Is lymphatic drainage painful?',
          answer:
            'It can be toning, but it should not be painful. Some areas may be more sensitive, so Zahara adjusts the pressure and invites you to share how it feels.',
        },
        {
          question: 'What might I feel afterwards?',
          answer:
            'You may notice lightness, suppleness, or relaxation. Some women also describe a less tense abdomen or more frequent urination. Responses vary between people and sessions.',
        },
        {
          question: 'Does drainage cause weight loss?',
          answer:
            'No. It does not act on fat cells. When tissues feel less puffy, the silhouette may look temporarily more harmonious, but this is not fat loss.',
        },
        {
          question: 'How many sessions should I book?',
          answer:
            'A single appointment may suit a momentary need, after travel, or before an occasion. If you would like regular care, Zahara can help you choose a realistic frequency without unnecessary commitment.',
        },
        {
          question: 'Can I come during my period?',
          answer:
            'Yes, if you feel comfortable. Some women appreciate the treatment when they feel more bloated, while others prefer to postpone. Your comfort comes first.',
        },
        {
          question: 'Can I book during pregnancy?',
          answer:
            'An adapted protocol may be possible in some situations, but you must contact Zahara before booking. Medical advice may be requested depending on your pregnancy.',
        },
        {
          question: 'Should I choose 60 or 90 minutes?',
          answer:
            'Sixty minutes is enough to discover the full-body treatment. Ninety minutes offers more time for conversation, areas needing extra attention, and a more spacious return to calm.',
        },
      ],
    },
    related: {
      eyebrow: 'You may also like',
      title: 'Continue the experience your way',
      description:
        'Full-body drainage can be complemented by a facial treatment or exchanged for a more tissue-focused approach.',
      items: [
        {
          title: 'Miracle Face',
          description:
            'The Renata França facial protocol for a fresh, toning, relaxing moment.',
          text: 'View Miracle Face',
          href: `${localizedPagePaths.soins.en}#lifting-facial-massage`,
        },
        {
          title: 'Maderotherapy',
          description:
            'A treatment using wooden instruments, more focused on tissue stimulation and a feeling of tone.',
          text: 'Discover maderotherapy',
          href: localizedPagePaths.maderotherapie.en,
        },
      ],
    },
    cta: {
      title: 'Give yourself a moment of lightness',
      description:
        'Book your Renata França lymphatic drainage in Annecy and enjoy a personalized manual treatment attentive to your comfort and sensations.',
      text: 'Book my lymphatic drainage',
      href: localizedPagePaths.reserveOnline.en,
      analyticsEvent: 'reserve_click',
      reassurance: {
        prefix: 'A question or particular situation? Message me on ',
        linkText: 'WhatsApp',
        suffix: ' before booking.',
        href: getBusinessWhatsappHref(
          'Hello, I have a question before booking lymphatic drainage.',
        ),
        analyticsEvent: 'whatsapp_click',
      },
    },
    reassuranceNote:
      'A women-only wellness treatment in a private setting in Annecy.',
  },
} satisfies Record<Locale, DrainageLymphatiquePageData>;
