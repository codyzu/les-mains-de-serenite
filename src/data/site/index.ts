import type {Locale, LocalizedSiteData, SiteData} from './types';
import {business} from './business';
import {chrome} from './chrome';
import {cureFusionPages} from './pages/cure-fusion';
import {homePages} from './pages/home';
import {maderotherapiePages} from './pages/maderotherapie';
import {soinsPages} from './pages/soins';
import {programPages} from './pages/program';
import {programsPages} from './pages/programs';
import {reservePages} from './pages/reserve';
import {reserveOnlinePages} from './pages/reserve-online';
import {discoveryOfferBookingPages} from './pages/discovery-offer-booking';
import {globalPagePaths} from './paths';
import {defaultLocale as defaultSiteLocale} from './shared';

export type {
  AboutData,
  AnalyticsEventName,
  ContactBlockData,
  DiscoveryOfferBookingPageData,
  FeltBenefitsData,
  GlobalPagesData,
  HeroData,
  HomePageData,
  Locale,
  LocalePathMap,
  LocalizedSiteData,
  MaderotherapiePageData,
  SoinsOverviewPageData,
  SoinData,
  SoinPriceData,
  SoinsSectionData,
  NeedsSectionData,
  OverviewCtaData,
  ProgramPageData,
  ProgramsOverviewPageData,
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
} from './types';
export {defaultLocale} from './shared';
export {globalPagePaths, localizedPagePaths} from './paths';

const localized = {
  fr: {
    locale: 'fr-FR',
    lang: 'fr',
    chrome: chrome.fr,
    pages: {
      home: homePages.fr,
      soins: soinsPages.fr,
      programs: programsPages.fr,
      program: programPages.fr,
      cureFusion: cureFusionPages.fr,
      maderotherapie: maderotherapiePages.fr,
      reserve: reservePages.fr,
      reserveOnline: reserveOnlinePages.fr,
      discoveryOfferBooking: discoveryOfferBookingPages.fr,
    },
  },
  en: {
    locale: 'en-US',
    lang: 'en',
    chrome: chrome.en,
    pages: {
      home: homePages.en,
      soins: soinsPages.en,
      programs: programsPages.en,
      program: programPages.en,
      cureFusion: cureFusionPages.en,
      maderotherapie: maderotherapiePages.en,
      reserve: reservePages.en,
      reserveOnline: reserveOnlinePages.en,
      discoveryOfferBooking: discoveryOfferBookingPages.en,
    },
  },
} satisfies SiteData['localized'];

export const site = {
  business,
  localized,
  pages: {
    mentionsLegalesPath: globalPagePaths.mentionsLegales,
    politiqueConfidentialitePath: globalPagePaths.politiqueConfidentialite,
  },
} satisfies SiteData;

export const getLocalizedSite = (
  locale: Locale = defaultSiteLocale
): LocalizedSiteData => site.localized[locale];
