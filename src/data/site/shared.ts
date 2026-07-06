import {getWhatsappHref} from '../../utils/phone';
import type {Locale} from './types';

export const defaultLocale: Locale = 'fr';

export const businessPhone = '+33766612017';
export const getBusinessWhatsappHref = (message: string) =>
  getWhatsappHref(businessPhone, message);
export const discoveryOfferBookingHref =
  'https://cal.eu/lesmainsdeserenite/massage-45-minutes-offre-decouverte';
export const programFrWhatsappHref = getBusinessWhatsappHref(
  'Bonjour, je souhaite en savoir plus sur le programme Ventre Léger & Jambes Légères.'
);
export const programEnWhatsappHref = getBusinessWhatsappHref(
  'Hello, I would like to know more about the Light Belly & Light Legs program.'
);
export const programFrStartWhatsappHref = getBusinessWhatsappHref(
  'Bonjour, je souhaite commencer le Programme Ventre Léger & Jambes Légères. J’aimerais savoir s’il est adapté à mes besoins.'
);
export const programEnStartWhatsappHref = getBusinessWhatsappHref(
  'Hello, I would like to start the Light Belly & Light Legs Program. I would like to know whether it is suited to my needs.'
);
export const programFrQuestionWhatsappHref = getBusinessWhatsappHref(
  'Bonjour, j’ai quelques questions concernant le Programme Ventre Léger & Jambes Légères avant de me décider.'
);
export const programEnQuestionWhatsappHref = getBusinessWhatsappHref(
  'Hello, I have a few questions about the Light Belly & Light Legs Program before deciding.'
);
export const cureFusionFrWhatsappHref = getBusinessWhatsappHref(
  'Bonjour, je souhaite en savoir plus sur la Cure Fusion.'
);
export const cureFusionEnWhatsappHref = getBusinessWhatsappHref(
  'Hello, I would like to know more about Cure Fusion.'
);
export const cureFusionFrStartWhatsappHref = getBusinessWhatsappHref(
  'Bonjour, je souhaite commencer la Cure Fusion. J’aimerais savoir si elle est adaptée à mes besoins.'
);
export const cureFusionEnStartWhatsappHref = getBusinessWhatsappHref(
  'Hello, I would like to start Cure Fusion. I would like to know whether it is suited to my needs.'
);
export const cureFusionFrQuestionWhatsappHref = getBusinessWhatsappHref(
  'Bonjour, j’ai quelques questions concernant la Cure Fusion avant de me décider.'
);
export const cureFusionEnQuestionWhatsappHref = getBusinessWhatsappHref(
  'Hello, I have a few questions about Cure Fusion before deciding.'
);
export const aftercareFrWhatsappHref = getBusinessWhatsappHref(
  'Bonjour, j’ai déjà suivi votre programme et je souhaiterais réserver un soin d’entretien.'
);
export const aftercareEnWhatsappHref = getBusinessWhatsappHref(
  'Hello, I have already completed a program and would like to book a maintenance treatment.'
);
