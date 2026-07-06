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
  description: string;
  note?: string;
  homeCtaText: string;
  overviewCtaText: string;
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
        description:
          'Pour retrouver une sensation de légèreté et de confort lorsque les jambes sont lourdes ou le ventre gonflé. Drainage lymphatique dynamique à Annecy selon la méthode Renata França.',
        note: 'Également adapté aux femmes enceintes à partir de la fin du premier trimestre, avec un protocole spécifiquement adapté.',
        homeCtaText: 'Voir le soin',
        overviewCtaText: 'Réserver ce soin',
      },
      en: {
        anchorId: 'lymphatic-drainage',
        title: 'Lymphatic drainage',
        description:
          'For a feeling of lightness and comfort when legs feel heavy or the belly feels bloated. Dynamic lymphatic drainage in Annecy using the Renata França method.',
        note: 'Also suitable during pregnancy from the end of the first trimester, with a specifically adapted protocol.',
        homeCtaText: 'View treatment',
        overviewCtaText: 'Book this treatment',
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
        title: 'Soin thérapeutique ou relaxant',
        description:
          'Pour relâcher les tensions, apaiser le stress et retrouver une détente profonde. Un soin personnalisé selon vos besoins du moment.',
        homeCtaText: 'Voir le soin',
        overviewCtaText: 'Réserver ce soin',
      },
      en: {
        anchorId: 'tension-relief-massage',
        title: 'Therapeutic or relaxing treatment',
        description:
          'To release tension, soften stress, and return to deep relaxation. A personalized treatment adapted to what you need in the moment.',
        homeCtaText: 'View treatment',
        overviewCtaText: 'Book this treatment',
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
        description:
          'Pour accompagner la tonicité, la sensation de fermeté et l’harmonie de la silhouette. Un soin remodelant tonifiant et ciblé.',
        homeCtaText: 'Voir le soin',
        overviewCtaText: 'Réserver ce soin',
      },
      en: {
        anchorId: 'body-sculpting-massage',
        title: 'Body sculpting treatment',
        description:
          'To support tone, a firmer feeling, and silhouette harmony. A targeted and toning body sculpting treatment.',
        homeCtaText: 'View treatment',
        overviewCtaText: 'Book this treatment',
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
        title: 'Soin visage liftant',
        description:
          'Pour retrouver un teint plus lumineux et une peau tonifiée. Un soin du visage relaxant qui stimule la circulation avec douceur.',
        homeCtaText: 'Voir le soin',
        overviewCtaText: 'Réserver ce soin',
      },
      en: {
        anchorId: 'lifting-facial-massage',
        title: 'Lifting facial treatment',
        description:
          'For a brighter-looking complexion and a more toned skin feel. A relaxing facial treatment that gently stimulates circulation.',
        homeCtaText: 'View treatment',
        overviewCtaText: 'Book this treatment',
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
        description:
          'Pour une sensation de légèreté, de tonicité et de tissus stimulés. Soin de madérothérapie à Annecy avec instruments en bois.',
        homeCtaText: 'Voir le soin',
        overviewCtaText: 'Découvrir',
      },
      en: {
        anchorId: 'maderotherapy',
        title: 'Maderotherapy treatment',
        description:
          'For a feeling of lightness, tone, and stimulated tissues. A maderotherapy treatment in Annecy using wooden instruments.',
        homeCtaText: 'View treatment',
        overviewCtaText: 'Discover',
      },
    }),
  },
] satisfies TreatmentCatalogItem[];

const getTreatmentAnchorHref = (locale: Locale, anchorId: string) =>
  `${localizedPagePaths.soins[locale]}#${anchorId}`;

const getHomeTreatmentCtaHref = (locale: Locale, item: TreatmentCatalogItem) =>
  item.id === 'maderotherapy'
    ? localizedPagePaths.maderotherapie[locale]
    : getTreatmentAnchorHref(locale, item.copy[locale].anchorId);

const getOverviewTreatmentCtaHref = (
  locale: Locale,
  item: TreatmentCatalogItem
) =>
  item.id === 'maderotherapy'
    ? localizedPagePaths.maderotherapie[locale]
    : localizedPagePaths.reserve[locale];

const toTreatmentData = (
  locale: Locale,
  item: TreatmentCatalogItem,
  ctaContext: 'home' | 'overview'
): SoinData => {
  const copy = item.copy[locale];

  return {
    anchorId: copy.anchorId,
    title: copy.title,
    description: copy.description,
    note: copy.note,
    icon: item.icon,
    prices: item.prices,
    ctaText: ctaContext === 'home' ? copy.homeCtaText : copy.overviewCtaText,
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
