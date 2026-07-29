import type {Locale, SoinData, SoinPriceData} from '../types';
import {defineLocalizedContent} from '../helpers';
import {localizedPagePaths} from '../paths';

export type TreatmentId =
  | 'lymphaticDrainage'
  | 'tensionRelief'
  | 'bodySculpting'
  | 'liftingFacial'
  | 'maderotherapy';

type TreatmentCopy = {
  anchorId: string;
  title: string;
  homeDescription: string;
  description: string;
  note?: string;
};

type TreatmentCatalogItem = {
  id: TreatmentId;
  icon: string;
  prices: SoinPriceData[];
  copy: ReturnType<typeof defineLocalizedContent<TreatmentCopy>>;
};

const treatmentCatalog = [
  {
    id: 'lymphaticDrainage',
    icon: 'i-lucide-droplets',
    prices: [
      {duration: '1 h', price: '90 €', recommended: true},
      {duration: '1 h 30', price: '125 €'},
    ],
    copy: defineLocalizedContent<TreatmentCopy>({
      fr: {
        anchorId: 'drainage-lymphatique',
        title: 'Drainage lymphatique',
        homeDescription:
          'Pour retrouver une agréable sensation de légèreté et de confort.',
        description:
          'Pour retrouver une sensation de légèreté et de confort lorsque les jambes sont lourdes ou le ventre gonflé. Drainage lymphatique dynamique à Annecy selon la méthode Renata França.',
        note: 'Également adapté aux femmes enceintes à partir de la fin du premier trimestre, avec un protocole spécifiquement adapté.',
      },
      en: {
        anchorId: 'lymphatic-drainage',
        title: 'Lymphatic drainage',
        homeDescription:
          'For a pleasant feeling of lightness and everyday comfort.',
        description:
          'For a feeling of lightness and comfort when legs feel heavy or the belly feels bloated. Dynamic lymphatic drainage in Annecy using the Renata França method.',
        note: 'Also suitable during pregnancy from the end of the first trimester, with a specifically adapted protocol.',
      },
    }),
  },
  {
    id: 'tensionRelief',
    icon: 'i-lucide-activity',
    prices: [
      {duration: '45 min', price: '60 €'},
      {duration: '1 h', price: '80 €', recommended: true},
      {duration: '1 h 30', price: '115 €'},
    ],
    copy: defineLocalizedContent<TreatmentCopy>({
      fr: {
        anchorId: 'massage-anti-douleur',
        title: 'Massage relaxant et personnalisé',
        homeDescription:
          'Pour relâcher les tensions et retrouver une détente profonde.',
        description:
          'Pour relâcher les tensions, apaiser le stress et retrouver une détente profonde. Un massage personnalisé selon vos besoins du moment.',
      },
      en: {
        anchorId: 'tension-relief-massage',
        title: 'Relaxing personalized massage',
        homeDescription:
          'To release tension and return to a deeper sense of relaxation.',
        description:
          'To release tension, soften stress, and return to deep relaxation. A personalized massage adapted to what you need in the moment.',
      },
    }),
  },
  {
    id: 'bodySculpting',
    icon: 'i-lucide-scan',
    prices: [
      {duration: '1 h', price: '110 €', recommended: true},
      {duration: '1 h 30', price: '135 €'},
    ],
    copy: defineLocalizedContent<TreatmentCopy>({
      fr: {
        anchorId: 'massage-remodelant',
        title: 'Soin remodelant',
        homeDescription:
          'Pour accompagner la tonicité et l’harmonie de la silhouette.',
        description:
          'Pour accompagner la tonicité, la sensation de fermeté et l’harmonie de la silhouette. Un soin remodelant tonifiant et ciblé.',
      },
      en: {
        anchorId: 'body-sculpting-massage',
        title: 'Body sculpting treatment',
        homeDescription:
          'To support tone and a harmonious feeling in the silhouette.',
        description:
          'To support tone, a firmer feeling, and silhouette harmony. A targeted and toning body sculpting treatment.',
      },
    }),
  },
  {
    id: 'liftingFacial',
    icon: 'i-lucide-sparkles',
    prices: [
      {duration: '30 min', price: '50 €'},
      {duration: '45 min', price: '65 €', recommended: true},
      {duration: '1 h', price: '85 €'},
    ],
    copy: defineLocalizedContent<TreatmentCopy>({
      fr: {
        anchorId: 'massage-visage-liftant',
        title: 'Miracle Face',
        homeDescription:
          'Un soin visage tonifiant pour illuminer naturellement le teint.',
        description:
          'Notre soin visage liftant signature, conçu pour stimuler la circulation, tonifier la peau et illuminer naturellement le teint.',
      },
      en: {
        anchorId: 'lifting-facial-massage',
        title: 'Miracle Face',
        homeDescription:
          'A toning facial treatment for a naturally brighter-looking complexion.',
        description:
          'A relaxing lifting facial treatment to stimulate circulation, tone the skin, and restore a brighter-looking complexion.',
      },
    }),
  },
  {
    id: 'maderotherapy',
    icon: 'i-lucide-leaf',
    prices: [
      {duration: '1 h', price: '90 €', recommended: true},
      {duration: '1 h 30', price: '125 €'},
    ],
    copy: defineLocalizedContent<TreatmentCopy>({
      fr: {
        anchorId: 'maderotherapie',
        title: 'Soin de madérothérapie',
        homeDescription:
          'Pour stimuler les tissus et retrouver légèreté et tonicité.',
        description:
          'Pour une sensation de légèreté, de tonicité et de tissus stimulés. Soin de madérothérapie à Annecy avec instruments en bois.',
      },
      en: {
        anchorId: 'maderotherapy',
        title: 'Maderotherapy treatment',
        homeDescription:
          'To stimulate the tissues and rediscover lightness and tone.',
        description:
          'For a feeling of lightness, tone, and stimulated tissues. A maderotherapy treatment in Annecy using wooden instruments.',
      },
    }),
  },
] satisfies TreatmentCatalogItem[];

const getTreatmentAnchorHref = (locale: Locale, anchorId: string) =>
  `${localizedPagePaths.soins[locale]}#${anchorId}`;

const getHomeTreatmentCtaHref = (locale: Locale, item: TreatmentCatalogItem) =>
  item.id === 'maderotherapy'
    ? localizedPagePaths.maderotherapie[locale]
    : item.id === 'lymphaticDrainage'
      ? localizedPagePaths.drainageLymphatique[locale]
      : getTreatmentAnchorHref(locale, item.copy[locale].anchorId);

const getOverviewTreatmentCtaHref = (
  locale: Locale,
  item: TreatmentCatalogItem,
) =>
  item.id === 'maderotherapy'
    ? localizedPagePaths.maderotherapie[locale]
    : item.id === 'lymphaticDrainage'
      ? localizedPagePaths.drainageLymphatique[locale]
      : localizedPagePaths.reserveOnline[locale];

const toTreatmentData = (
  locale: Locale,
  item: TreatmentCatalogItem,
  ctaContext: 'home' | 'overview',
): SoinData => {
  const copy = item.copy[locale];

  return {
    anchorId: copy.anchorId,
    title: copy.title,
    description:
      ctaContext === 'home' ? copy.homeDescription : copy.description,
    note: ctaContext === 'overview' ? copy.note : undefined,
    icon: item.icon,
    prices: item.prices,
    ctaText:
      ctaContext === 'home'
        ? locale === 'fr'
          ? 'Découvrir'
          : 'Discover'
        : item.id === 'maderotherapy' || item.id === 'lymphaticDrainage'
          ? locale === 'fr'
            ? 'En savoir plus'
            : 'Learn more'
          : locale === 'fr'
            ? 'Réserver'
            : 'Book',
    ctaLink:
      ctaContext === 'home'
        ? getHomeTreatmentCtaHref(locale, item)
        : getOverviewTreatmentCtaHref(locale, item),
  };
};

export const getHomeTreatmentItems = (locale: Locale): SoinData[] =>
  treatmentCatalog.map((item) => toTreatmentData(locale, item, 'home'));

export const getOverviewTreatmentItems = (locale: Locale): SoinData[] =>
  treatmentCatalog.map((item) => toTreatmentData(locale, item, 'overview'));

export const getTreatmentPrices = (id: TreatmentId): SoinPriceData[] => {
  const treatment = treatmentCatalog.find((item) => item.id === id);

  if (!treatment) {
    throw new Error(`Unknown treatment: ${id}`);
  }

  return treatment.prices;
};
