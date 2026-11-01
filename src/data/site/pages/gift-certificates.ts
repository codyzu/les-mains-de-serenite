import type {GiftCertificatesPageData, Locale} from '../types';
import {getTreatmentPrices} from '../catalog/treatments';
import {localizedPagePaths} from '../paths';
import {getBusinessWhatsappHref} from '../shared';

export const giftCertificatesPages = {
  fr: {
    path: localizedPagePaths.giftCertificates.fr,
    meta: {
      title: 'Bon cadeau massage à Annecy | Les Mains de Sérénité',
      description:
        'Offrez un massage relaxant à Annecy avec un bon cadeau personnalisé : le soin choisi, le prénom de la destinataire et votre petit mot. Demande sur WhatsApp.',
    },
    hero: {
      eyebrow: 'Bons cadeaux · Toute l’année',
      title: 'Offrez un massage à Annecy',
      description:
        'Pour un anniversaire, les fêtes ou simplement pour faire plaisir… offrez-lui une pause entre nos mains attentionnées. Un cadeau pour ralentir et profiter d’un moment rien qu’à elle.',
      note: 'Soins réservés aux femmes à Annecy · Bon valable 3 mois',
      ctaText: 'Demander un bon cadeau',
      ctaHref: getBusinessWhatsappHref(
        'Bonjour, je souhaite offrir un bon cadeau pour un massage. Pouvez-vous m’aider à le préparer ?',
      ),
      imageAlt:
        'Exemple de bon cadeau personnalisé : massage relaxant de 60 minutes pour Sophie, offert par Camille avec un message pour les fêtes',
      imageCaption:
        'Un bon cadeau personnalisé avec le soin choisi et votre petit mot. Exemple non utilisable.',
      imageLinkText: 'Agrandir l’exemple',
    },
    treatment: {
      eyebrow: 'Une idée pour lui faire plaisir',
      title: 'Un massage relaxant et personnalisé',
      description:
        'Une parenthèse pour relâcher les tensions et se détendre, avec une pression et des gestes adaptés à ses besoins du moment. Choisissez la durée du massage à inscrire sur son bon cadeau.',
      prices: getTreatmentPrices('tensionRelief'),
      ctaText: 'Offrir un massage relaxant',
      ctaHref: getBusinessWhatsappHref(
        'Bonjour, je souhaite offrir un bon cadeau pour un massage relaxant. Pouvez-vous m’aider à choisir la durée et à le préparer ?',
      ),
      otherTitle: 'Vous pensez à un autre soin ?',
      otherDescription:
        'Drainage lymphatique ou autre massage : échangeons pour choisir un soin adapté à la personne à qui vous souhaitez faire plaisir.',
      otherCtaText: 'Découvrir les soins',
      otherCtaHref: localizedPagePaths.soins.fr,
    },
    personalization: {
      title: 'Un cadeau qui lui ressemble',
      description:
        'Votre bon cadeau est personnalisé pour la destinataire, avec le soin choisi et votre message. Une attention à offrir pour une occasion particulière ou pour le plaisir.',
      items: [
        'Son prénom',
        'Le massage et sa durée',
        'Votre nom et votre petit mot',
      ],
    },
    steps: {
      title: 'Comment offrir un bon cadeau ?',
      items: [
        {
          title: 'Choisissez son moment de détente',
          description:
            'Un massage relaxant, une durée, ou une question : écrivez-nous sur WhatsApp pour être accompagné dans votre choix.',
        },
        {
          title: 'Personnalisez votre cadeau',
          description:
            'Indiquez le prénom de la destinataire et le message à ajouter. Le règlement se fait par virement bancaire ou Wero ; nous convenons ensemble de la remise du bon.',
        },
        {
          title: 'Elle choisit son rendez-vous',
          description:
            'La destinataire nous contacte avec son bon cadeau pour réserver le soin indiqué, selon les disponibilités et avant la date de validité inscrite.',
        },
      ],
    },
    faq: {
      title: 'Vos questions avant d’offrir',
      items: [
        {
          question: 'Dois-je réserver une date pour elle ?',
          answer:
            'Non, vous offrez le soin. La destinataire choisit ensuite son rendez-vous en nous contactant, selon les disponibilités et la validité de son bon.',
        },
        {
          question: 'Puis-je ajouter un message personnel ?',
          answer:
            'Oui. Transmettez-nous son prénom, votre nom et le petit mot que vous souhaitez faire figurer sur le bon cadeau.',
        },
        {
          question: 'Quelle est la durée de validité du bon cadeau ?',
          answer:
            'Le bon cadeau est valable 3 mois. Sa date de validité est inscrite sur le bon, utilisable une seule fois pour le soin indiqué.',
        },
        {
          question: 'Comment régler et recevoir mon bon cadeau ?',
          answer:
            'Le règlement se fait par virement bancaire ou Wero. Contactez-nous sur WhatsApp pour préparer votre bon cadeau et convenir de sa remise.',
        },
      ],
    },
    contact: {
      title: 'Une attention commence par un petit message',
      description:
        'Vous savez quel massage offrir, ou vous hésitez encore ? Écrivez-nous pour préparer votre bon cadeau ensemble.',
      ctaText: 'Préparer mon bon cadeau sur WhatsApp',
    },
  },
  en: {
    path: localizedPagePaths.giftCertificates.en,
    meta: {
      title: 'Massage Gift Certificates in Annecy | Les Mains de Sérénité',
      description:
        'Give a relaxing massage in Annecy with a personalized gift certificate featuring her name, the chosen treatment, and your message. Enquire on WhatsApp.',
    },
    hero: {
      eyebrow: 'Gift certificates · All year round',
      title: 'Give a massage in Annecy',
      description:
        'For a birthday, the holidays, or simply to make her smile… give her a break in our caring hands. A thoughtful gift to slow down and enjoy a little time for herself.',
      note: 'Treatments for women in Annecy · Valid for 3 months',
      ctaText: 'Enquire about a gift certificate',
      ctaHref: getBusinessWhatsappHref(
        'Hello, I’d like to give a gift certificate for a massage. Could you help me arrange it?',
      ),
      imageAlt:
        'French sample gift certificate for Sophie: a 60-minute relaxing massage from Camille, with a personal holiday message',
      imageCaption:
        'A personalized gift certificate with the chosen treatment and your message. French example, not valid for redemption.',
      imageLinkText: 'Enlarge the example',
    },
    treatment: {
      eyebrow: 'A thoughtful gift idea',
      title: 'A relaxing personalized massage',
      description:
        'Time to ease tension and unwind, with pressure and techniques adapted to her needs on the day. Choose the massage duration to include on her gift certificate.',
      prices: getTreatmentPrices('tensionRelief'),
      ctaText: 'Give a relaxing massage',
      ctaHref: getBusinessWhatsappHref(
        'Hello, I’d like to give a gift certificate for a relaxing massage. Could you help me choose the duration and arrange it?',
      ),
      otherTitle: 'Thinking of another treatment?',
      otherDescription:
        'Lymphatic drainage or another massage: get in touch and we can help you choose a treatment suited to the woman you are treating.',
      otherCtaText: 'Explore the treatments',
      otherCtaHref: localizedPagePaths.soins.en,
    },
    personalization: {
      title: 'A gift with a personal touch',
      description:
        'Her gift certificate is personalized with the chosen treatment and your message. A thoughtful gesture for a special occasion or simply because you care.',
      items: [
        'Her name',
        'The massage and its duration',
        'Your name and personal message',
      ],
    },
    steps: {
      title: 'How to give a gift certificate',
      items: [
        {
          title: 'Choose her moment of calm',
          description:
            'A relaxing massage, a duration, or a question: message us on WhatsApp for help choosing her gift.',
        },
        {
          title: 'Make it personal',
          description:
            'Share her name and the message you would like to add. Payment is by bank transfer or Wero; we will arrange how you receive the certificate together.',
        },
        {
          title: 'She chooses her appointment',
          description:
            'She contacts us with her gift certificate to book the specified treatment, subject to availability and before the expiry date shown.',
        },
      ],
    },
    faq: {
      title: 'Before you give',
      items: [
        {
          question: 'Do I need to book a date for her?',
          answer:
            'No, you give the treatment. She then contacts us to choose her appointment, subject to availability and the validity of her certificate.',
        },
        {
          question: 'Can I add a personal message?',
          answer:
            'Yes. Send us her name, your name, and the message you would like to include on the gift certificate.',
        },
        {
          question: 'How long is the gift certificate valid?',
          answer:
            'Gift certificates are valid for 3 months. The expiry date is shown on the certificate, which can be used once for the specified treatment.',
        },
        {
          question: 'How do I pay and receive my gift certificate?',
          answer:
            'Payment is by bank transfer or Wero. Message us on WhatsApp to prepare your gift certificate and arrange how you receive it.',
        },
      ],
    },
    contact: {
      title: 'A thoughtful gift starts with a little message',
      description:
        'Already know which massage to give, or still deciding? Get in touch and we will prepare your gift certificate together.',
      ctaText: 'Arrange my gift certificate on WhatsApp',
    },
  },
} satisfies Record<Locale, GiftCertificatesPageData>;
