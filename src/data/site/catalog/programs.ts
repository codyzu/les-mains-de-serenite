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
        subtitle: 'Un cadre structuré pendant et entre les séances',
        formatSummary:
          'Drainage + accompagnement alimentaire bien-être · 21 jours',
        description:
          'Un programme centré sur le drainage, complété par des repères alimentaires bien-être et un suivi régulier pendant 21 jours.',
        primaryDifferentiator:
          '5 drainages d’1 h, un bilan de 20 min, un guide alimentaire, une liste de courses, des conseils personnalisés et un accompagnement WhatsApp pendant 21 jours.',
        includesTitle: 'Le programme comprend',
        includes: [
          '5 séances de drainage lymphatique d’1 h',
          'Un bilan bien-être de 20 minutes',
          'Un guide alimentaire et une liste de courses',
          'Des conseils personnalisés',
          'Un accompagnement WhatsApp pendant 21 jours',
        ],
        priceLabel: 'Tarif lancement',
        price: '350 €',
        note: 'un cadre structuré pour être accompagnée pendant et entre les séances.',
        ctaText: 'Découvrir le programme',
      },
      en: {
        eyebrow: 'New',
        title: 'Light Belly & Light Legs Program',
        subtitle: 'A structured framework during and between sessions',
        formatSummary: 'Drainage + wellness-oriented food guidance · 21 days',
        description:
          'A drainage-focused program complemented by wellness-oriented food guidance and regular support for 21 days.',
        primaryDifferentiator:
          '5 one-hour drainage sessions, a 20-minute wellness check-in, a food guide, a shopping list, personalized guidance, and WhatsApp support for 21 days.',
        includesTitle: 'The program includes',
        includes: [
          '5 one-hour lymphatic drainage sessions',
          'A 20-minute wellness check-in',
          'A food guide and shopping list',
          'Personalized guidance',
          'WhatsApp support for 21 days',
        ],
        priceLabel: 'Launch price',
        price: '350 €',
        note: 'a structured framework for support during and between sessions.',
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
        subtitle: 'Des techniques adaptées à chaque rendez-vous',
        formatSummary: 'Soins sur mesure · 3 rendez-vous',
        description:
          'Un accompagnement flexible où le choix des techniques évolue selon vos besoins et vos sensations au fil des rendez-vous.',
        primaryDifferentiator:
          '3 séances personnalisées pouvant associer drainage, soin remodelant et madérothérapie, avec une technique choisie et adaptée à chaque rendez-vous.',
        includesTitle: 'Selon vos besoins, votre accompagnement peut inclure',
        includes: ['Drainage lymphatique', 'Soin remodelant', 'Madérothérapie'],
        priceLabel: 'Tarif',
        price: '350 €',
        priceDetail: '3 séances',
        note: 'une cure flexible dont les techniques s’adaptent à vos besoins et à vos sensations au fil des rendez-vous.',
        ctaText: 'Découvrir la cure',
      },
      en: {
        eyebrow: 'New package',
        title: 'Cure Fusion',
        subtitle: 'Techniques adapted at each appointment',
        formatSummary: 'Tailor-made treatments · 3 appointments',
        description:
          'A flexible accompaniment where the choice of techniques evolves with your needs and sensations across the appointments.',
        primaryDifferentiator:
          '3 personalized sessions that may combine lymphatic drainage, body sculpting treatment, and maderotherapy, with a technique chosen and adapted at each appointment.',
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
        note: 'a flexible package whose techniques adapt to your needs and sensations across the appointments.',
        ctaText: 'Discover the package',
      },
    }),
  },
] satisfies ProgramCatalogItem[];

export const getProgramPreviewItems = (
  locale: Locale,
): ProgramPreviewItemData[] =>
  programCatalog.map((item) => ({
    ...item.preview[locale],
    ctaLink: localizedPagePaths[item.pathKey][locale],
    icon: item.icon,
  }));
