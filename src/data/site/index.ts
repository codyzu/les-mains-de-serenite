import type {Locale, LocalizedSiteData, SiteData} from './types';
import {business} from './business';
import {chrome} from './chrome';
import {cureFusionPages} from './pages/cure-fusion';
import {homePages} from './pages/home';
import {maderotherapiePages} from './pages/maderotherapie';
import {massagesPages} from './pages/massages';
import {programPages} from './pages/program';
import {programsPages} from './pages/programs';
import {reservePages} from './pages/reserve';
import {reserveOnlinePages} from './pages/reserve-online';
import {globalPagePaths} from './paths';
import {defaultLocale as defaultSiteLocale} from './shared';

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
  MassagesOverviewPageData,
  MassageData,
  MassagePriceData,
  MassagesSectionData,
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
      massages: massagesPages.fr,
      programs: programsPages.fr,
      program: programPages.fr,
      cureFusion: cureFusionPages.fr,
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
      massages: massagesPages.en,
      programs: programsPages.en,
      program: programPages.en,
      cureFusion: cureFusionPages.en,
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
    mentionsLegalesPath: globalPagePaths.mentionsLegales,
    politiqueConfidentialitePath: globalPagePaths.politiqueConfidentialite,
  },
} satisfies SiteData;

export const getLocalizedSite = (
  locale: Locale = defaultSiteLocale
): LocalizedSiteData => site.localized[locale];
