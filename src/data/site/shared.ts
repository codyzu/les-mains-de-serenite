import {getWhatsappHref} from '../../utils/phone';
import type {Locale} from './types';

export const defaultLocale: Locale = 'fr';

export const businessPhone = '+33766612017';
export const getBusinessWhatsappHref = (message: string) =>
  getWhatsappHref(businessPhone, message);
export const discoveryOfferBookingHref =
  'https://cal.eu/lesmainsdeserenite/massage-45-minutes-offre-decouverte';
export const festivalRecoveryMassageBookingHref =
  'https://cal.eu/lesmainsdeserenite/festival-recovery-massage-60-min';
export const programFrWhatsappHref = getBusinessWhatsappHref(
  'Bonjour, je souhaite en savoir plus sur le programme Ventre Léger & Jambes Légères.'
);
export const programEnWhatsappHref = getBusinessWhatsappHref(
  'Hello, I would like to know more about the Light Belly & Light Legs program.'
);
