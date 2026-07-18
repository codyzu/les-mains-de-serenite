import type {ImageMetadata} from 'astro';

export type Locale = 'fr' | 'en';
export type LocalePathMap = Record<Locale, string>;
export type AnalyticsEventName =
  | 'reserve_click'
  | 'whatsapp_click'
  | 'phone_click'
  | 'email_click';

export type SiteBusinessData = {
  name: string;
  siteUrl: string;
  phone: string;
  email: string;
  bookingUrl: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  seo: {
    schemaType: 'MassageTherapist';
    areaServed: string;
  };
  legal: {
    name: string;
    legalStatus: string;
    siren: string;
    siret: string;
    vatNumber: string;
    hostName: string;
    hostAddress: string;
    hostWebsite: string;
    dataRetention: string;
    lastUpdated: string;
  };
};

export type SiteHeaderData = {
  tagline: string;
  links: {
    home: string;
    soins: string;
    program: string;
    about: string;
    reserve: string;
    contact: string;
  };
};

export type SiteFooterData = {
  tagline: string;
  links: {
    soins: string;
    program: string;
    about: string;
    reserve: string;
    contact: string;
    legal: string;
    privacy: string;
  };
};

export type SiteChromeData = {
  header: SiteHeaderData;
  footer: SiteFooterData;
};

export type HeroData = {
  subtitle: string;
  title: string;
  description: string;
  imageAlt: string;
  womenOnlyLabel: string;
  benefitHighlight: string;
  primaryCta: string;
  secondaryCta: string;
  whatsappCta: string;
};

export type PromoData = {
  title: string;
  headline: string;
  description: string;
  note?: string;
  ctaText: string;
  ctaLink: string;
  analyticsEvent?: AnalyticsEventName;
  image?: {
    src: ImageMetadata;
    alt: string;
  };
};

export type InlineTextLinkData = {
  text: string;
  href: string;
};

export type ReassuranceLinkData = {
  prefix: string;
  linkText: string;
  suffix?: string;
  href: string;
  analyticsEvent?: AnalyticsEventName;
};

export type NeedsSectionData = {
  title: string;
  intro: string;
  ctaText: string;
  items: Array<{
    title: string;
    description: string;
    href: string;
    ctaText?: string;
  }>;
};

export type SoinPriceData = {
  duration: string;
  price: string;
  recommended?: boolean;
};

export type SoinData = {
  anchorId?: string;
  title: string;
  description: string;
  note?: string;
  icon: string;
  prices: SoinPriceData[];
  ctaText?: string;
  ctaLink?: string;
};

export type SoinsSectionData = {
  title: string;
  intro: string;
  introLinks?: InlineTextLinkData[];
  recommendedLabel: string;
  ctaText?: string;
  ctaLink?: string;
  items: SoinData[];
};

export type ProgramPreviewItemData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  includesTitle: string;
  includes: string[];
  priceLabel: string;
  price: string;
  priceDetail?: string;
  note: string;
  ctaText: string;
  ctaLink: string;
  icon: string;
  analyticsEvent?: AnalyticsEventName;
};

export type ProgramPreviewData = {
  title: string;
  intro: string;
  introLinks?: InlineTextLinkData[];
  ctaText?: string;
  ctaLink?: string;
  items: ProgramPreviewItemData[];
};

export type HomeTransitionData = {
  title: string;
  heading: string;
  text: string;
  image: {
    src: ImageMetadata;
    alt: string;
  };
};

export type RichTextPartData = {
  text: string;
  href?: string;
};

export type OverviewCtaData = {
  title: string;
  description: string;
  text: string;
  href: string;
  analyticsEvent?: AnalyticsEventName;
  reassurance?: ReassuranceLinkData;
};

export type SoinsOverviewPageData = {
  meta: {
    title: string;
    description: string;
  };
  path: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    reassurance: string;
    ctaText: string;
    ctaHref: string;
    analyticsEvent?: AnalyticsEventName;
  };
  philosophy: {
    title: string;
    description: string;
  };
  transitionImageAlt: string;
  section: SoinsSectionData;
  choiceHelp: OverviewCtaData;
  testimonials: TestimonialsData;
  programCrossLink: OverviewCtaData;
  booking: OverviewCtaData;
};

export type ProgramsOverviewPageData = {
  meta: {
    title: string;
    description: string;
  };
  path: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    reassurance: string;
    ctaText: string;
    ctaHref: string;
    analyticsEvent?: AnalyticsEventName;
  };
  distinction: {
    singleTitle: string;
    singleDescription: string;
    programTitle: string;
    programDescription: string;
  };
  preview: ProgramPreviewData;
  aftercare: {
    eyebrow: string;
    title: string;
    description: string;
    detail: string;
  };
  soinsCrossLink: OverviewCtaData;
  booking: OverviewCtaData;
};

export type ProgramPageData = {
  meta: {
    title: string;
    description: string;
    openGraphTitle?: string;
    openGraphDescription?: string;
  };
  path: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    reassurance?: string;
    primaryCta: string;
    secondaryCta: string;
  };
  intro: {
    title: string;
    body: string;
  };
  forWhom: {
    title: string;
    items: string[];
  };
  includes: {
    title: string;
    items: string[];
  };
  price: {
    label: string;
    amount: string;
    detail?: string;
    usualValueLabel?: string;
    usualValue?: string;
  };
  method: {
    title: string;
    body: string;
  };
  story: {
    title: string;
    body: string;
  };
  visuals?: {
    methodImage?: {
      src: ImageMetadata;
      alt: string;
    };
    storyImage?: {
      src: ImageMetadata;
      alt: string;
      className?: string;
    };
  };
  techniques?: {
    title: string;
    intro: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  testimonials?: TestimonialsData;
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
    text: string;
    note: string;
    href: string;
    analyticsEvent?: AnalyticsEventName;
    reassurance?: ReassuranceLinkData;
    secondaryText?: string;
    secondaryHref?: string;
    secondaryAnalyticsEvent?: AnalyticsEventName;
  };
  aftercare?: {
    eyebrow: string;
    title: string;
    description: string;
    offerTitle: string;
    offerDetail: string;
    offerDescription: string;
    eligibility: string;
    ctaText: string;
    href: string;
    analyticsEvent?: AnalyticsEventName;
  };
  maderotherapieCrossLink: {
    title: string;
    description: string;
    text: string;
    href: string;
  };
  relatedLinks?: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      text: string;
      href: string;
    }>;
  };
};

export type MaderotherapiePageData = {
  meta: {
    title: string;
    description: string;
    openGraphTitle?: string;
    openGraphDescription?: string;
  };
  path: string;
  hero: {
    title: string;
    description: string;
    primaryCta: string;
    imageAlt: string;
    keyInfo: string[];
  };
  overview: {
    title: string;
    body: string;
  };
  instruments: {
    title: string;
    body: string;
  };
  benefits: {
    title: string;
    intro: string;
    items: Array<{
      icon: string;
      text: string;
    }>;
  };
  forYou: {
    title: string;
    intro: string;
    items: Array<{
      anchorId?: string;
      title: string;
      description: string;
    }>;
  };
  offer: {
    title: string;
    duration: string;
    price: string;
    ctaHref: string;
    description: string;
    targetAudience: string;
    benefits: string;
    positioning: string;
  };
  steps: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  beforeAfter: {
    title: string;
    before: string[];
    after: string[];
  };
  contraindications: {
    title: string;
    items: string[];
    note: string;
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
    text: string;
    href: string;
    analyticsEvent?: AnalyticsEventName;
    reassurance?: ReassuranceLinkData;
  };
  reassuranceNote: string;
  programCrossLink: {
    title: string;
    description: string;
    text: string;
    href: string;
  };
};

export type AboutData = {
  title: string;
  body: string;
  imageAlt: string;
};

export type SessionStepsData = {
  title: string;
  intro: string;
  reassuranceNote?: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
};

export type TestimonialsData = {
  title: string;
  intro: string;
  items: Array<{
    text: string;
    author: string;
  }>;
};

export type FeltBenefitsData = {
  title: string;
  intro: string;
  items: string[];
};

export type ContactBlockData = {
  title: string;
  subtitle: string;
  whatsappTitle: string;
  phoneTitle: string;
  emailTitle: string;
  locationTitle: string;
  whatsappDescription: string;
  phoneDescription: string;
  emailDescription: string;
  whatsappLabel: string;
  locationText?: string;
};

export type HomePageData = {
  meta: {
    title: string;
    description: string;
  };
  hero: HeroData;
  heroBridge: {
    parts: RichTextPartData[];
  };
  promo?: PromoData;
  needsSection: NeedsSectionData;
  soinsSection: SoinsSectionData;
  emotionalTransition: HomeTransitionData;
  programPreview: ProgramPreviewData;
  about: AboutData;
  sessionSteps: SessionStepsData;
  feltBenefits: FeltBenefitsData;
  testimonials: TestimonialsData;
  booking: {
    bookingPath: string;
    title: string;
    description: string;
    note: string;
    reassuranceNote?: string;
    ctaText: string;
  };
  contact: ContactBlockData;
  whatsapp: {
    generalHref: string;
  };
};

export type ReservePageData = {
  meta: {
    title: string;
    description: string;
  };
  redirect: {
    title: string;
    kicker: string;
    heading: string;
    description: string;
    ctaText: string;
    delayMs: number;
  };
};

export type ReserveOnlinePageData = {
  meta: {
    title: string;
    description: string;
  };
  reserveLink: string;
  hero: {
    kicker: string;
    title: string;
    description: string;
    reassuranceItems: Array<{
      icon: string;
      label: string;
    }>;
    testimonialQuote: string;
    testimonialAuthor: string;
  };
  scheduler: {
    title: string;
    description: string;
    detail: string;
    paymentNote: string;
    disclaimer: string;
    resetLabel: string;
    resetStatus: string;
  };
  contact: ContactBlockData & {
    whatsappHref: string;
  };
};

export type LocalizedSiteData = {
  locale: string;
  lang: string;
  chrome: SiteChromeData;
  pages: {
    home: HomePageData;
    soins: SoinsOverviewPageData;
    programs: ProgramsOverviewPageData;
    program: ProgramPageData;
    cureFusion: ProgramPageData;
    maderotherapie: MaderotherapiePageData;
    reserve: ReservePageData;
    reserveOnline: ReserveOnlinePageData;
  };
};

export type GlobalPagesData = {
  mentionsLegalesPath: string;
  politiqueConfidentialitePath: string;
};

export type SiteData = {
  business: SiteBusinessData;
  localized: Record<Locale, LocalizedSiteData>;
  pages: GlobalPagesData;
};
