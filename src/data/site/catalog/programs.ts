import type {Locale, ProgramPreviewItemData} from '../types';
import {defineLocalizedContent} from '../helpers';
import {localizedPagePaths} from '../paths';

type ProgramPreviewCopy = Omit<ProgramPreviewItemData, 'ctaLink' | 'icon'>;

type ProgramCatalogItem = {
  icon: string;
  pathKey: 'program' | 'cureFusion';
  preview: ReturnType<typeof defineLocalizedContent<ProgramPreviewCopy>>;
};

const programCatalog = [
  {
    icon: 'i-lucide-calendar-heart',
    pathKey: 'program',
    preview: defineLocalizedContent<ProgramPreviewCopy>({
      fr: {
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
      },
      en: {
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
      },
    }),
  },
  {
    icon: 'i-lucide-sparkles',
    pathKey: 'cureFusion',
    preview: defineLocalizedContent<ProgramPreviewCopy>({
      fr: {
        eyebrow: 'Nouvelle cure',
        title: 'Cure Fusion',
        subtitle: '3 séances personnalisées',
        description:
          'Un accompagnement en 3 séances personnalisées, avec un soin choisi à chaque rendez-vous selon vos besoins et votre évolution.',
        includesTitle: 'Selon vos besoins, votre accompagnement peut inclure',
        includes: ['Drainage lymphatique', 'Soin remodelant', 'Madérothérapie'],
        priceLabel: 'Tarif',
        price: '350 €',
        priceDetail: '3 séances',
        note: 'Vous n’avez pas à choisir une formule fixe. Le soin est adapté au fil des séances pour créer un accompagnement plus juste et plus fluide.',
        ctaText: 'Découvrir la cure',
      },
      en: {
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
      },
    }),
  },
] satisfies ProgramCatalogItem[];

export const getProgramPreviewItems = (
  locale: Locale
): ProgramPreviewItemData[] =>
  programCatalog.map((item) => ({
    ...item.preview[locale],
    ctaLink: localizedPagePaths[item.pathKey][locale],
    icon: item.icon,
  }));
