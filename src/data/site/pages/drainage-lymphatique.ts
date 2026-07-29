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
      keyInfo: ['Méthode Renata França', '60 ou 90 min', 'Réservé aux femmes'],
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
    lymphaticSystem: {
      eyebrow: 'Mieux comprendre',
      title: 'Le système lymphatique, un réseau discret et essentiel',
      paragraphs: [
        'Le système lymphatique est un réseau de vaisseaux, de ganglions et d’organes qui participe à l’équilibre des liquides dans les tissus et au fonctionnement immunitaire. La lymphe, liquide transparent circulant dans ce réseau, transporte notamment des protéines et des cellules immunitaires tout en récupérant une partie des liquides présents entre les cellules.',
        'À la différence de la circulation sanguine, il ne dispose pas d’une pompe centrale comparable au cœur. Le mouvement, la marche, les contractions musculaires, la respiration et l’activité propre des vaisseaux contribuent à sa progression. C’est pourquoi les sensations corporelles peuvent évoluer avec le rythme de vie, sans que toute impression de gonflement corresponde pour autant à une maladie.',
        'La méthode Renata França utilise des manœuvres manuelles organisées sur le corps. Dans le cadre proposé par Les Mains de Sérénité, elle accompagne une démarche de confort et de bien-être ; elle ne remplace pas le fonctionnement naturel de l’organisme ni un drainage lymphatique thérapeutique prescrit dans un parcours de soins.',
      ],
      factorsTitle: 'Pourquoi le corps peut-il sembler plus lourd\u{A0}?',
      factors: [
        {
          title: 'Variations hormonales',
          description:
            'Le cycle menstruel, la grossesse ou la ménopause peuvent modifier temporairement la façon dont certaines femmes ressentent leur ventre, leurs jambes ou leurs tissus.',
          icon: 'i-lucide-refresh-cw',
        },
        {
          title: 'Immobilité prolongée',
          description:
            'Les heures passées assise, debout ou dans une même position limitent le mouvement musculaire qui accompagne naturellement la circulation des liquides.',
          icon: 'i-lucide-armchair',
        },
        {
          title: 'Chaleur',
          description:
            'Les fortes températures peuvent accentuer l’impression de jambes lourdes, de chevilles marquées ou de vêtements plus serrés.',
          icon: 'i-lucide-sun',
        },
        {
          title: 'Longs trajets',
          description:
            'L’avion, le train ou plusieurs heures en voiture associent immobilité et position prolongée, avec parfois une sensation de gonflement à l’arrivée.',
          icon: 'i-lucide-plane',
        },
        {
          title: 'Stress et respiration',
          description:
            'Le stress influence la respiration, le sommeil et les tensions musculaires, ce qui peut changer la manière dont le corps est perçu au quotidien.',
          icon: 'i-lucide-wind',
        },
        {
          title: 'Fatigue et sommeil',
          description:
            'Lorsque la récupération est insuffisante, les sensations de lourdeur, de tension et de fatigue corporelle peuvent paraître plus présentes.',
          icon: 'i-lucide-moon',
        },
      ],
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
    particularSituations: {
      eyebrow: 'Situations particulières',
      title: 'Lipœdème, lymphœdème, chirurgie\u{A0}: savoir de quoi l’on parle',
      intro:
        'Ces termes sont parfois associés au drainage lymphatique, mais ils ne décrivent pas une simple sensation de jambes lourdes. Les nommer clairement permet de mieux orienter chaque femme et d’éviter de confondre un soin bien-être avec une prise en charge clinique.',
      items: [
        {
          title: 'Lipœdème',
          description:
            'Le lipœdème est une affection chronique touchant presque exclusivement les femmes, caractérisée par une répartition anormale du tissu adipeux, souvent au niveau des jambes et parfois des bras. Il peut s’accompagner de douleurs, d’une sensibilité au toucher, d’ecchymoses faciles et d’une sensation de lourdeur. Le drainage ne fait pas disparaître le tissu graisseux du lipœdème et ne le guérit pas. Lorsqu’un lipœdème est diagnostiqué, tout soin doit rester complémentaire au suivi des professionnels de santé et être adapté à la sensibilité de la personne.',
        },
        {
          title: 'Lymphœdème',
          description:
            'Le lymphœdème correspond à une accumulation durable de lymphe liée à une altération du système lymphatique. Il peut être primaire ou apparaître notamment après certaines interventions et certains traitements. Il nécessite une évaluation médicale et peut relever d’un drainage lymphatique manuel thérapeutique, de compression et de kinésithérapie spécialisée. Un drainage bien-être Renata França n’est pas l’équivalent de cette prise en charge. Si vous avez un lymphœdème diagnostiqué ou suspecté, contactez Zahara avant toute réservation et suivez en priorité l’avis de votre équipe soignante.',
        },
        {
          title: 'Après une intervention chirurgicale',
          description:
            'Après une chirurgie, notamment esthétique, les tissus peuvent présenter œdème, inflammation, douleur, fragilité cicatricielle ou risque de complication. Le moment, la technique et la pression autorisés dépendent de l’intervention et de votre évolution. Aucun soin ne sera envisagé sans l’accord explicite du chirurgien ou du médecin qui vous suit. La séance proposée ici ne constitue ni une rééducation post-opératoire ni un acte infirmier ou kinésithérapique.',
        },
        {
          title: 'Cellulite aqueuse et aspect des tissus',
          description:
            'L’expression « cellulite aqueuse » est couramment utilisée lorsque l’aspect capitonné s’accompagne d’une impression de rétention d’eau ou de tissus congestionnés. Le travail manuel peut donner temporairement une sensation de tissus plus souples et un aspect visuel plus lisse. Il ne détruit pas les cellules graisseuses, ne supprime pas la cellulite et ne produit pas de transformation permanente.',
        },
        {
          title: 'Grossesse et post-partum',
          description:
            'La grossesse et les semaines qui suivent l’accouchement impliquent des changements hormonaux, circulatoires et corporels importants. Un protocole adapté peut parfois être envisagé, mais jamais automatiquement. Contactez Zahara avant de réserver ; selon votre terme, vos antécédents et le déroulement de la grossesse ou du post-partum, un avis de sage-femme ou de médecin pourra être demandé.',
        },
      ],
      note: 'Douleur inhabituelle, gonflement soudain ou asymétrique, rougeur, chaleur locale, essoufflement ou malaise nécessitent un avis médical rapide et non une séance de bien-être.',
    },
    session: {
      title: 'Comment se déroule votre séance\u{A0}?',
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
      title: 'Pourquoi choisir Les Mains de Sérénité\u{A0}?',
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
    dailyCare: {
      eyebrow: 'Entre deux rendez-vous',
      title: 'Des habitudes simples pour prendre soin de votre confort',
      intro:
        'Le drainage s’inscrit dans un ensemble. Sans promettre de « détoxifier » le corps, quelques habitudes régulières peuvent soutenir le mouvement, la récupération et une meilleure écoute de vos sensations.',
      items: [
        {
          title: 'Bouger régulièrement',
          description:
            'La marche, les étirements et une activité physique adaptée sollicitent les muscles. La régularité compte davantage que l’intensité : quelques minutes de mouvement répétées dans la journée sont déjà utiles au confort.',
          icon: 'i-lucide-footprints',
        },
        {
          title: 'Changer de position',
          description:
            'Si vous travaillez assise ou restez longtemps debout, faites quelques pas, mobilisez les chevilles et évitez de conserver exactement la même position pendant plusieurs heures.',
          icon: 'i-lucide-move',
        },
        {
          title: 'Respirer profondément',
          description:
            'Une respiration lente mobilise le diaphragme et crée surtout un temps de relâchement. Quelques respirations conscientes peuvent aider à diminuer les tensions et à revenir au corps.',
          icon: 'i-lucide-wind',
        },
        {
          title: 'S’hydrater normalement',
          description:
            'Buvez régulièrement selon votre soif et vos besoins, sauf recommandation médicale particulière. Il n’est pas nécessaire de se forcer à boire des quantités excessives après une séance.',
          icon: 'i-lucide-glass-water',
        },
        {
          title: 'Soigner la récupération',
          description:
            'Un sommeil suffisant et des temps de repos soutiennent l’équilibre général. Si la séance vous détend profondément, prévoyez si possible une suite de journée sans rythme trop contraignant.',
          icon: 'i-lucide-bed',
        },
        {
          title: 'Choisir le confort',
          description:
            'Des vêtements qui ne compriment pas excessivement, une alimentation variée et une activité qui vous convient participent à une démarche globale, sans régime miracle ni injonction.',
          icon: 'i-lucide-heart-handshake',
        },
      ],
      highlight:
        'Aucun aliment, massage ou rituel ne « nettoie » à lui seul le système lymphatique. L’objectif est plus simple : prendre soin de votre confort avec des habitudes réalistes et régulières.',
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
      intro:
        'Vous avez encore une question ? Retrouvez ici les réponses aux interrogations les plus fréquentes avant une première séance.',
      items: [
        {
          question:
            'Quelle est la différence avec un drainage classique\u{A0}?',
          answer:
            'La méthode Renata França se caractérise par des mouvements plus dynamiques, précis et rythmés que les approches très lentes. Elle reste manuelle et la pression est adaptée pour conserver une séance confortable.',
        },
        {
          question: 'Le drainage est-il douloureux\u{A0}?',
          answer:
            'Il peut être tonique, mais il ne doit pas être douloureux. Certaines zones sont parfois plus sensibles ; Zahara ajuste alors la pression et vous invite à partager votre ressenti.',
        },
        {
          question: 'Que puis-je ressentir après la séance\u{A0}?',
          answer:
            'Vous pouvez ressentir une sensation de légèreté, de souplesse ou de détente. Certaines femmes remarquent aussi un ventre moins tendu ou une envie d’uriner plus fréquente. Les réactions varient selon les personnes et les séances.',
        },
        {
          question: 'Le drainage fait-il perdre du poids\u{A0}?',
          answer:
            'Non. Il n’agit pas sur les cellules graisseuses et ne remplace ni l’activité physique ni une alimentation équilibrée. Quand les tissus paraissent moins gonflés, la silhouette peut sembler temporairement plus harmonieuse, sans qu’il s’agisse d’une perte de graisse.',
        },
        {
          question: 'Combien de séances faut-il prévoir\u{A0}?',
          answer:
            'Une séance ponctuelle peut répondre à un besoin du moment, après un voyage ou avant une occasion par exemple. Si vous souhaitez un rythme régulier, Zahara vous aidera à choisir une fréquence réaliste selon vos attentes, sans engagement inutile.',
        },
        {
          question: 'Puis-je venir pendant mes règles\u{A0}?',
          answer:
            'Oui, si vous vous sentez à l’aise. Certaines femmes apprécient le soin pendant cette période lorsqu’elles se sentent plus gonflées. La séance peut aussi être reportée si votre confort vous invite à attendre.',
        },
        {
          question: 'Le drainage est-il possible pendant la grossesse\u{A0}?',
          answer:
            'Certaines situations peuvent permettre un protocole adapté, mais il est indispensable de contacter Zahara avant de réserver. Elle pourra vous demander un avis médical selon le stade et le déroulement de la grossesse.',
        },
        {
          question: 'Quelle durée choisir\u{A0}: 60 ou 90 minutes\u{A0}?',
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
      keyInfo: ['Renata França method', '60 or 90 min', 'Women only'],
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
    lymphaticSystem: {
      eyebrow: 'Understanding the body',
      title: 'The lymphatic system: a quiet, essential network',
      paragraphs: [
        'The lymphatic system is a network of vessels, lymph nodes, and organs involved in tissue-fluid balance and immune function. Lymph, the clear fluid moving through this network, carries proteins and immune cells while collecting some of the fluid found between cells.',
        'Unlike blood circulation, it has no central pump comparable to the heart. Movement, walking, muscle contractions, breathing, and the activity of the lymphatic vessels themselves all contribute to its flow. This is one reason bodily sensations may change with daily routines, although not every feeling of puffiness indicates illness.',
        'The Renata França method uses organized manual movements across the body. At Les Mains de Sérénité, it is offered for comfort and wellness. It does not replace the body’s natural functions or therapeutic manual lymphatic drainage prescribed within medical care.',
      ],
      factorsTitle: 'Why can the body sometimes feel heavier?',
      factors: [
        {
          title: 'Hormonal changes',
          description:
            'The menstrual cycle, pregnancy, and menopause may temporarily change how some women experience their abdomen, legs, or tissues.',
          icon: 'i-lucide-refresh-cw',
        },
        {
          title: 'Prolonged stillness',
          description:
            'Long periods sitting, standing, or remaining in one position reduce the muscle movement that naturally supports fluid circulation.',
          icon: 'i-lucide-armchair',
        },
        {
          title: 'Hot weather',
          description:
            'High temperatures can increase feelings of heavy legs, marked ankles, or clothes fitting more tightly.',
          icon: 'i-lucide-sun',
        },
        {
          title: 'Long journeys',
          description:
            'Flights, trains, and several hours in a car combine stillness with a prolonged position, sometimes leaving a puffy feeling on arrival.',
          icon: 'i-lucide-plane',
        },
        {
          title: 'Stress and breathing',
          description:
            'Stress affects breathing, sleep, and muscle tension, which can change how the body feels from day to day.',
          icon: 'i-lucide-wind',
        },
        {
          title: 'Fatigue and sleep',
          description:
            'When recovery is insufficient, sensations of heaviness, tension, and physical fatigue may feel more present.',
          icon: 'i-lucide-moon',
        },
      ],
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
    particularSituations: {
      eyebrow: 'Particular situations',
      title: 'Lipoedema, lymphoedema, and surgery: understanding the terms',
      intro:
        'These terms are sometimes associated with lymphatic drainage, but they do not describe an ordinary feeling of heavy legs. Naming them clearly helps guide each woman appropriately and prevents confusion between a wellness treatment and clinical care.',
      items: [
        {
          title: 'Lipoedema',
          description:
            'Lipoedema is a chronic condition affecting almost exclusively women, characterized by an abnormal distribution of fatty tissue, commonly in the legs and sometimes the arms. It may involve pain, tenderness, easy bruising, and heaviness. Drainage does not remove lipoedema fat and does not cure the condition. When lipoedema has been diagnosed, any wellness treatment should remain complementary to care from qualified health professionals and be adapted to the person’s sensitivity.',
        },
        {
          title: 'Lymphoedema',
          description:
            'Lymphoedema is a persistent accumulation of lymph caused by impairment of the lymphatic system. It may be primary or develop after certain procedures and treatments. It requires medical assessment and may call for therapeutic manual lymphatic drainage, compression, and specialist physiotherapy. Renata França wellness drainage is not equivalent to this care. If you have diagnosed or suspected lymphoedema, contact Zahara before booking and prioritize guidance from your healthcare team.',
        },
        {
          title: 'After surgery',
          description:
            'After surgery, including cosmetic procedures, tissues may have oedema, inflammation, pain, fragile scarring, or a risk of complications. The timing, technique, and pressure permitted depend on the procedure and your recovery. No treatment will be considered without explicit approval from your surgeon or doctor. The appointment offered here is neither post-operative rehabilitation nor nursing or physiotherapy care.',
        },
        {
          title: 'So-called aqueous cellulite',
          description:
            'The term “aqueous cellulite” is commonly used when dimpled skin appears alongside a sense of water retention or congested tissues. Manual work may temporarily create a feeling of suppleness and a smoother visual appearance. It does not destroy fat cells, eliminate cellulite, or produce permanent transformation.',
        },
        {
          title: 'Pregnancy and postpartum',
          description:
            'Pregnancy and the weeks after birth involve significant hormonal, circulatory, and physical changes. An adapted protocol may sometimes be considered, but never automatically. Contact Zahara before booking; depending on your stage, history, and pregnancy or postpartum recovery, guidance from a midwife or doctor may be required.',
        },
      ],
      note: 'Unusual pain, sudden or one-sided swelling, redness, local heat, shortness of breath, or feeling faint require prompt medical advice—not a wellness appointment.',
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
    dailyCare: {
      eyebrow: 'Between appointments',
      title: 'Simple habits that support everyday comfort',
      intro:
        'Drainage belongs within a bigger picture. Without claiming to “detox” the body, a few regular habits can support movement, recovery, and awareness of how you feel.',
      items: [
        {
          title: 'Move regularly',
          description:
            'Walking, stretching, and suitable physical activity engage the muscles. Consistency matters more than intensity: a few minutes of movement repeated through the day can already support comfort.',
          icon: 'i-lucide-footprints',
        },
        {
          title: 'Change position',
          description:
            'If you work seated or stand for long periods, take a few steps, move your ankles, and avoid keeping exactly the same position for several hours.',
          icon: 'i-lucide-move',
        },
        {
          title: 'Breathe deeply',
          description:
            'Slow breathing engages the diaphragm and, above all, creates a moment of release. A few conscious breaths can help soften tension and reconnect with the body.',
          icon: 'i-lucide-wind',
        },
        {
          title: 'Hydrate normally',
          description:
            'Drink regularly according to your thirst and needs unless you have specific medical advice. There is no need to force excessive amounts of water after a session.',
          icon: 'i-lucide-glass-water',
        },
        {
          title: 'Make space for recovery',
          description:
            'Adequate sleep and periods of rest support general balance. If the treatment relaxes you deeply, plan a gentler remainder of the day when possible.',
          icon: 'i-lucide-bed',
        },
        {
          title: 'Choose comfort',
          description:
            'Clothes that do not excessively compress, a varied diet, and activity you enjoy can support a balanced approach without miracle diets or pressure.',
          icon: 'i-lucide-heart-handshake',
        },
      ],
      highlight:
        'No food, massage, or ritual “cleans” the lymphatic system by itself. The aim is simpler: care for your comfort through realistic, consistent habits.',
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
      intro:
        'Still have a question? Find answers to the most common questions before a first session.',
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
