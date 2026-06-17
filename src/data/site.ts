import type {Locale, LocalizedSiteData, SiteData} from './site/types';
import {business} from './site/business';
import {chrome} from './site/chrome';
import {homePages} from './site/pages/home';
import {maderotherapiePages} from './site/pages/maderotherapie';
import {programPages} from './site/pages/program';
import {reservePages} from './site/pages/reserve';
import {reserveOnlinePages} from './site/pages/reserve-online';
import {defaultLocale as defaultSiteLocale} from './site/shared';

export type {
  AboutData,
  AnalyticsEventName,
  ContactBlockData,
  FeltBenefitsData,
  GlobalPagesData,
  HeroData,
  HomePageData,
  Locale,
  LocalePathMap,
  LocalizedSiteData,
  MaderotherapiePageData,
  MassageData,
  MassagePriceData,
  MassagesSectionData,
  NeedsSectionData,
  ProgramPageData,
  ProgramPreviewData,
  PromoData,
  ReserveOnlinePageData,
  ReservePageData,
  SessionStepsData,
  SiteBusinessData,
  SiteChromeData,
  SiteData,
  SiteFooterData,
  SiteHeaderData,
  TestimonialsData,
} from './site/types';
export {defaultLocale} from './site/shared';

const localized = {
  fr: {
    locale: 'fr-FR',
    lang: 'fr',
    chrome: chrome.fr,
    pages: {
      home: homePages.fr,
      program: programPages.fr,
      maderotherapie: maderotherapiePages.fr,
      reserve: reservePages.fr,
      reserveOnline: reserveOnlinePages.fr,
    },
  },
  en: {
    locale: 'en-US',
    lang: 'en',
    chrome: chrome.en,
    pages: {
      home: homePages.en,
      program: programPages.en,
      maderotherapie: maderotherapiePages.en,
      reserve: reservePages.en,
      reserveOnline: reserveOnlinePages.en,
    },
  },
} satisfies SiteData['localized'];

export const site = {
  business,
  localized,
  pages: {
    mentionsLegalesPath: '/mentions-legales',
    politiqueConfidentialitePath: '/politique-de-confidentialite',
  },
} satisfies SiteData;

export const getLocalizedSite = (
  locale: Locale = defaultSiteLocale
): LocalizedSiteData => {
  const localizedSite = site.localized[locale] as LocalizedSiteData | undefined;

  if (!localizedSite) {
    throw new Error(`Missing localized site data for locale: ${locale}`);
  }

  return localizedSite;
};
