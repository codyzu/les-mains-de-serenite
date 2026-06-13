// @unocss-include
import type {ImageMetadata} from 'astro';
import FestivalAnimationOffer from '../assets/offer-festival-animation.png';
import DiscoveryOffer from '../assets/images/massage-legs-offer.png';
import {getWhatsappHref} from '../utils/phone';

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
    massages: string;
    program: string;
    about: string;
    reserve: string;
    contact: string;
  };
};

export type SiteFooterData = {
  tagline: string;
  links: {
    massages: string;
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
  ctaText: string;
  ctaLink: string;
  analyticsEvent?: AnalyticsEventName;
  image?: {
    src: ImageMetadata;
    alt: string;
  };
};

export type NeedsSectionData = {
  title: string;
  intro: string;
  items: string[];
};

export type MassagePriceData = {
  duration: string;
  price: string;
  recommended?: boolean;
};

export type MassageData = {
  title: string;
  description: string;
  note?: string;
  icon: string;
  prices: MassagePriceData[];
};

export type MassagesSectionData = {
  title: string;
  intro: string;
  recommendedLabel: string;
  items: MassageData[];
};

export type ProgramPreviewData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  includesTitle: string;
  includes: string[];
  priceLabel: string;
  price: string;
  note: string;
  ctaText: string;
  ctaLink: string;
  analyticsEvent?: AnalyticsEventName;
};

export type ProgramPageData = {
  meta: {
    title: string;
    description: string;
  };
  path: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
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
    usualValueLabel: string;
    usualValue: string;
  };
  method: {
    title: string;
    body: string;
  };
  story: {
    title: string;
    body: string;
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
    note: string;
    href: string;
    analyticsEvent?: AnalyticsEventName;
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
  promo?: PromoData;
  needsSection: NeedsSectionData;
  massagesSection: MassagesSectionData;
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
    program: ProgramPageData;
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
  localized: Partial<Record<Locale, LocalizedSiteData>>;
  pages: GlobalPagesData;
};

export const defaultLocale: Locale = 'fr';

const businessPhone = '+33766612017';
const getBusinessWhatsappHref = (message: string) =>
  getWhatsappHref(businessPhone, message);
const discoveryOfferBookingHref =
  'https://cal.eu/lesmainsdeserenite/massage-45-minutes-offre-decouverte';
const festivalRecoveryMassageBookingHref =
  'https://cal.eu/lesmainsdeserenite/festival-recovery-massage-60-min';
const programFrPath = '/programme-ventre-leger-jambes-legeres';
const programEnPath = '/en/light-belly-light-legs-program';
const programFrWhatsappHref = getBusinessWhatsappHref(
  'Bonjour, je souhaite en savoir plus sur le programme Ventre Léger & Jambes Légères.'
);
const programEnWhatsappHref = getBusinessWhatsappHref(
  'Hello, I would like to know more about the Light Belly & Light Legs program.'
);

const siteBase = {
  business: {
    name: 'Les Mains de Sérénité',
    siteUrl: 'https://lesmainsdeserenite.fr',
    phone: businessPhone,
    email: 'bonjour@lesmainsdeserenite.fr',
    bookingUrl: 'https://cal.eu/lesmainsdeserenite',
    address: {
      streetAddress: '27 avenue de la plaine',
      addressLocality: 'Annecy',
      postalCode: '74000',
      addressCountry: 'FR',
    },
    seo: {
      schemaType: 'MassageTherapist',
      areaServed: 'Annecy',
    },
    legal: {
      name: 'Zahara ZUSCHLAG',
      legalStatus: 'Entrepreneur individuel en micro-entreprise',
      siren: 'SIREN à compléter',
      siret: 'SIRET à compléter',
      vatNumber:
        'TVA non applicable, art. 293 B du CGI (à adapter si la situation change)',
      hostName: 'GitHub, Inc.',
      hostAddress:
        '88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis',
      hostWebsite: 'https://github.com',
      dataRetention:
        '3 ans maximum après le dernier contact émanant de la personne',
      lastUpdated: '16 mars 2026',
    },
  },
  localized: {
    fr: {
      locale: 'fr-FR',
      lang: 'fr',
      chrome: {
        header: {
          tagline: 'Massothérapeute',
          links: {
            home: 'Accueil',
            massages: 'Massages',
            program: 'Programme',
            about: 'À propos',
            reserve: 'Réserver',
            contact: 'Contact',
          },
        },
        footer: {
          tagline: 'Massage bien-être',
          links: {
            massages: 'Massages',
            about: 'À propos',
            reserve: 'Réserver',
            contact: 'Contact',
            legal: 'Mentions légales',
            privacy: 'Politique de confidentialité',
          },
        },
      },
      pages: {
        home: {
          meta: {
            title:
              'Les Mains de Sérénité | Massage bien-être à Annecy pour femmes',
            description:
              'Massage bien-être à Annecy pour femmes, sur rendez-vous, dans un cadre calme et confortable. Drainage lymphatique, massages ciblés et conseils simples pour prolonger les bienfaits.',
          },
          hero: {
            subtitle: 'Massage bien-être à Annecy',
            title: 'Les Mains de Sérénité',
            description:
              'À Annecy, dans un cadre chaleureux, apaisant et sécurisant.',
            imageAlt: 'Ambiance bien-être et massage',
            womenOnlyLabel: 'Réservé aux femmes',
            benefitHighlight:
              'Idéal pour jambes lourdes, ventre gonflé et confort au quotidien',
            primaryCta: 'Réserver un massage',
            secondaryCta: 'Appeler',
            whatsappCta: 'WhatsApp',
          },
          promo: {
            title: 'Offre découverte',
            headline: '45 min à 55\u00A0€',
            description:
              'Une séance ciblée pour soulager les jambes lourdes ou le mal de dos, et retrouver une sensation de légèreté.',
            ctaText: 'Réserver l’offre',
            ctaLink: discoveryOfferBookingHref,
            analyticsEvent: 'reserve_click',
            image: {
              src: DiscoveryOffer,
              alt: 'Massage bien-être dans une ambiance douce et apaisante',
            },
          },
          needsSection: {
            title: 'Pour quels besoins ?',
            intro:
              'Des besoins fréquents pour lesquels ces massages sont particulièrement adaptés, avec des conseils simples pour prolonger les bienfaits selon vos besoins.',
            items: [
              'Jambes lourdes',
              'Ventre gonflé',
              'Rétention d’eau',
              'Fatigue / sensation de lourdeur',
            ],
          },
          massagesSection: {
            title: 'Massages proposés',
            intro:
              'Des massages pensés pour soulager les tensions, offrir un véritable moment de bien-être et vous aider à mieux écouter les besoins de votre corps.',
            recommendedLabel: 'Durée conseillée',
            items: [
              {
                title: 'Drainage lymphatique',
                description:
                  'Drainage lymphatique dynamique selon la méthode Renata França. Idéal pour soulager les jambes lourdes, le ventre gonflé et la rétention d’eau, il procure une agréable sensation de légèreté.',
                note: 'Après un drainage, quelques conseils simples peuvent être proposés pour prolonger les bienfaits au quotidien.',
                icon: 'i-lucide-droplets',
                prices: [
                  {duration: '1 h', price: '90 €', recommended: true},
                  {duration: '1 h 30', price: '125 €'},
                ],
              },
              {
                title: 'Massage anti-douleur',
                description:
                  'Massage ciblé pour soulager les tensions musculaires et les inconforts du quotidien. Idéal pour le dos, les épaules et la nuque, il aide à retrouver confort et détente.',
                icon: 'i-lucide-activity',
                prices: [
                  {duration: '45 min', price: '60 €'},
                  {duration: '1 h', price: '80 €', recommended: true},
                  {duration: '1 h 30', price: '115 €'},
                ],
              },
              {
                title: 'Massage remodelant',
                description:
                  'Massage tonifiant qui aide à raffermir la peau et redessiner certaines zones du corps. Il stimule la circulation et améliore l’aspect de la silhouette.',
                icon: 'i-lucide-scan',
                prices: [
                  {duration: '45 min', price: '70 €'},
                  {duration: '1 h', price: '90 €', recommended: true},
                  {duration: '1 h 30', price: '125 €'},
                ],
              },
              {
                title: 'Massage visage liftant',
                description:
                  'Soin du visage relaxant qui stimule la circulation et tonifie la peau. Il aide à illuminer le teint et procure un effet liftant naturel.',
                icon: 'i-lucide-sparkles',
                prices: [
                  {duration: '30 min', price: '50 €'},
                  {duration: '45 min', price: '65 €', recommended: true},
                  {duration: '1 h', price: '85 €'},
                ],
              },
            ],
          },
          programPreview: {
            eyebrow: 'Nouveau',
            title: 'Programme Ventre Léger & Jambes Légères',
            subtitle: 'Un accompagnement bien-être de 21 jours',
            description:
              'Pour les femmes qui souhaitent aller plus loin qu’une séance seule, ce programme associe 5 drainages lymphatiques Renata França à un bilan bien-être et à des conseils simples pour prolonger la sensation de légèreté au quotidien.',
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
            ctaLink: programFrPath,
          },
          about: {
            title: 'À propos',
            body: `
Je suis Zahara, praticienne en massage bien-être à Annecy, avec une formation d’auxiliaire de puériculture, ce qui m’a permis de développer une approche attentive, douce et à l’écoute du corps.

Formée au drainage lymphatique selon la méthode Renata França, je propose des massages réservés aux femmes, pensés pour offrir un véritable moment de relâchement et de bien-être.

Au fil de mes accompagnements, j’ai constaté que de nombreuses femmes avaient tendance à s’oublier entre la vie professionnelle, la vie familiale et les obligations du quotidien. Elles vivent parfois avec des tensions, de la fatigue ou une sensation de lourdeur qu’elles finissent par considérer comme normale.

C’est ce qui m’a donné envie d’enrichir certains accompagnements, toujours centrés sur le toucher et l’écoute du corps, avec parfois quelques conseils simples pour prolonger les bienfaits au quotidien.

Chaque séance est entièrement personnalisée, en fonction de vos besoins du moment, qu’il s’agisse de soulager des tensions, de relâcher le stress ou simplement de vous accorder un moment pour vous.

Mon objectif est simple : vous offrir une parenthèse de bien-être dans un environnement calme, rassurant et bienveillant, pensé pour que vous puissiez pleinement relâcher et profiter de l’instant.
            `,
            imageAlt: 'Ambiance bien-être et massage',
          },
          sessionSteps: {
            title: 'Comment se déroule une séance ?',
            intro:
              'Chaque séance est pensée comme un véritable moment de détente et de reconnexion au corps. Le drainage lymphatique est une technique douce, rythmée et apaisante, réalisée avec des mouvements précis pour stimuler naturellement la circulation lymphatique.',
            reassuranceNote: 'Aucun matériel n’est à prévoir de votre côté.',
            steps: [
              {
                title: 'Réservation',
                description:
                  'Choisissez le créneau qui vous convient en ligne ou par téléphone.',
              },
              {
                title: 'Lieu du rendez-vous',
                description:
                  'La séance a lieu sur rendez-vous à Annecy, dans un espace privé soigneusement aménagé pour votre confort et votre bien-être. Vous êtes accueillie dans un cadre calme, chaleureux et intime, pensé pour vous permettre de relâcher pleinement les tensions.',
              },
              {
                title: 'Votre moment de détente',
                description:
                  'Avant de commencer, nous prenons quelques minutes pour échanger sur vos besoins afin d’adapter le soin à votre corps et à vos attentes. Chaque séance est personnalisée pour vous aider à relâcher les tensions, alléger le corps et apaiser l’esprit.',
              },
            ],
          },
          testimonials: {
            title: 'Avis clientes',
            intro: 'Celles qui ont testé en parlent le mieux.',
            items: [
              {
                text: 'Je souffrais régulièrement de jambes lourdes en fin de journée. Dès la première séance, j’ai ressenti une vraie sensation de légèreté et un meilleur confort dans les jours qui ont suivi.',
                author: 'Marie, Annecy',
              },
              {
                text: 'Première expérience de drainage lymphatique pour moi. Zahara a pris le temps de tout m’expliquer et m’a mise en confiance immédiatement. Je me suis sentie à l’aise du début à la fin.',
                author: 'Sophie, Annecy',
              },
              {
                text: 'Je cherchais un moment pour relâcher les tensions accumulées entre le travail et la vie de famille. Cette séance m’a permis de vraiment déconnecter et de prendre du temps pour moi.',
                author: 'Camille, Annecy',
              },
              {
                text: 'J’ai été agréablement surprise par le lieu. La pièce est calme, chaleureuse et très soignée. On s’y sent bien immédiatement, ce qui aide vraiment à se détendre dès les premières minutes.',
                author: 'Élodie, Annecy',
              },
              {
                text: 'J’ai particulièrement apprécié l’écoute et la personnalisation de la séance. Zahara s’adapte aux besoins du moment plutôt que d’appliquer un protocole identique à tout le monde.',
                author: 'Julie, Annecy',
              },
            ],
          },
          feltBenefits: {
            title: 'Les bienfaits ressentis',
            intro:
              'Des bienfaits souvent ressentis dès la fin de la séance, puis soutenus par une meilleure écoute de soi au quotidien.',
            items: [
              'Sensation de légèreté',
              'Jambes moins lourdes',
              'Confort au quotidien',
              'Détente profonde',
              'Un vrai moment pour soi',
            ],
          },
          booking: {
            bookingPath: '/reserver',
            title: 'Réserver votre massage',
            description:
              'Réservez facilement votre massage en ligne et choisissez le créneau qui vous convient.',
            note: 'Échange facile par téléphone ou WhatsApp avant réservation',
            reassuranceNote:
              'Massage réservé exclusivement aux femmes, dans un cadre privé et confidentiel.',
            ctaText: 'Réserver en ligne',
          },
          contact: {
            title: 'Contact',
            subtitle:
              'Une question, une demande particulière, ou envie de réserver directement par téléphone ou sur WhatsApp ?',
            whatsappTitle: 'WhatsApp',
            phoneTitle: 'Téléphone',
            emailTitle: 'Email',
            locationTitle: 'Lieu',
            whatsappDescription:
              'Réponse rapide pour toute question avant réservation.',
            phoneDescription:
              'Pour échanger rapidement avant votre réservation.',
            emailDescription:
              'Idéal si vous préférez poser votre question par écrit.',
            whatsappLabel: 'Écrire sur WhatsApp',
            locationText:
              'Massages bien-être à Annecy, sur rendez-vous, dans un cadre calme et confortable.',
          },
          whatsapp: {
            generalHref: getBusinessWhatsappHref(
              'Bonjour, je souhaite des informations pour un massage'
            ),
          },
        },
        program: {
          path: programFrPath,
          meta: {
            title:
              'Programme Ventre Léger & Jambes Légères à Annecy | Les Mains de Sérénité',
            description:
              'Un accompagnement bien-être de 21 jours à Annecy associant drainage lymphatique Renata França, bilan bien-être, conseils simples et suivi WhatsApp.',
          },
          hero: {
            eyebrow: 'Programme 21 jours',
            title: 'Programme Ventre Léger & Jambes Légères',
            description:
              'Retrouvez des jambes plus légères, un ventre plus confortable et davantage d’énergie grâce à une approche globale du bien-être féminin.',
            primaryCta: 'Demander des informations',
            secondaryCta: 'Voir ce qui est inclus',
          },
          intro: {
            title: 'Un accompagnement pour prolonger les bienfaits du drainage',
            body: 'Ce programme s’adresse aux femmes qui souhaitent aller plus loin qu’une séance seule. Il associe 5 drainages lymphatiques Renata França à un bilan bien-être, des conseils simples du quotidien et un suivi WhatsApp pendant 21 jours.',
          },
          forWhom: {
            title: 'Ce programme est idéal si vous souhaitez',
            items: [
              'Retrouver des jambes plus légères',
              'Réduire les sensations de gonflement',
              'Diminuer la sensation de rétention d’eau',
              'Retrouver plus de confort au quotidien',
              'Être accompagnée avec douceur et simplicité',
            ],
          },
          includes: {
            title: 'Le programme comprend',
            items: [
              '5 séances de drainage lymphatique Renata França d’1h',
              'Un bilan bien-être de 20 minutes',
              'Un guide alimentaire anti-ballonnements et rétention d’eau',
              'Une liste de courses simplifiée',
              'Un suivi WhatsApp pendant 21 jours',
              'Des conseils personnalisés adaptés à votre quotidien',
            ],
          },
          price: {
            label: 'Tarif lancement',
            amount: '350 €',
            usualValueLabel: 'Valeur habituelle',
            usualValue: '470 €',
          },
          method: {
            title: 'Pourquoi associer drainage et habitudes du quotidien ?',
            body: 'Le drainage lymphatique procure une sensation de légèreté et aide à relâcher les tensions corporelles. Entre les séances, certaines habitudes simples peuvent soutenir ce confort : hydratation, repas plus digestes, écoute des sensations et rythme plus régulier. L’objectif n’est pas la perfection, mais un accompagnement doux et réaliste.',
          },
          story: {
            title: 'Pourquoi j’ai créé cette méthode',
            body: 'Au fil de mes accompagnements, j’ai compris qu’une séance seule ne suffisait pas toujours. Les habitudes du quotidien jouent elles aussi un rôle essentiel. C’est ainsi qu’est née la Méthode Ventre Léger : une approche simple, bienveillante et accessible qui associe le drainage lymphatique, les habitudes de vie et une meilleure écoute de soi.',
          },
          faq: {
            title: 'Questions fréquentes',
            items: [
              {
                question: 'Est-ce un régime ?',
                answer:
                  'Non. Les conseils proposés sont simples, progressifs et pensés pour soutenir votre confort au quotidien, sans pression ni perfection.',
              },
              {
                question: 'Faut-il avoir déjà fait un drainage ?',
                answer:
                  'Non. Le programme peut être une première découverte si vous souhaitez un accompagnement plus complet dès le départ.',
              },
              {
                question: 'Comment se passe le suivi WhatsApp ?',
                answer:
                  'Le suivi permet de poser vos questions, d’ajuster les conseils à votre quotidien et de garder un lien entre les séances.',
              },
            ],
          },
          cta: {
            title: 'Vous souhaitez retrouver plus de légèreté ?',
            description:
              'Envoyez un message à Zahara pour poser vos questions ou réserver votre place au tarif lancement.',
            text: 'Demander le programme',
            note: 'Réponse personnalisée par WhatsApp.',
            href: programFrWhatsappHref,
            analyticsEvent: 'whatsapp_click',
          },
        },
        reserve: {
          meta: {
            title: 'Redirection...',
            description: 'Redirection vers la reservation en ligne.',
          },
          redirect: {
            title: 'Redirection...',
            kicker: 'Reservation',
            heading: 'Redirection en cours...',
            description:
              'Vous allez etre redirige(e) vers la reservation en ligne.',
            ctaText: 'Continuer maintenant',
            delayMs: 600,
          },
        },
        reserveOnline: {
          meta: {
            title: 'Réserver un massage à Annecy | Les Mains de Sérénité',
            description:
              'Réservez votre massage bien-être à Annecy. Service réservé aux femmes, réservation simple en ligne, paiement sur place.',
          },
          reserveLink: '/reserver-en-ligne',
          hero: {
            kicker: 'Massage bien-être à Annecy',
            title: 'Réserver votre massage bien-être',
            description:
              'Choisissez votre massage et votre créneau en toute simplicité. Les séances sont proposées sur rendez-vous, dans un cadre calme, bienveillant et apaisant.',
            reassuranceItems: [
              {
                icon: 'i-lucide-flower',
                label: 'Réservé aux femmes',
              },
              {
                icon: 'i-lucide-home',
                label: 'Cadre calme et privé',
              },
              {
                icon: 'i-lucide-briefcase-medical',
                label: 'Table et matériel inclus',
              },
              {
                icon: 'i-lucide-wallet',
                label: 'Paiement sur place',
              },
            ],
            testimonialQuote:
              'Un vrai moment de détente, je recommande vivement.',
            testimonialAuthor: 'Marie, Annecy',
          },
          scheduler: {
            title: 'Choisissez votre créneau',
            description:
              'Choisissez votre massage puis votre créneau en quelques secondes.',
            detail:
              'Chaque séance est adaptée à vos besoins du moment, pour vous offrir un véritable moment de détente.',
            paymentNote: 'Aucun paiement en ligne. Règlement sur place.',
            disclaimer:
              'Service réservé aux femmes · Massage bien-être sans visée médicale',
          },
          contact: {
            title: 'Une question avant de réserver ?',
            subtitle:
              'Je vous réponds rapidement pour vous aider à choisir le massage le plus adapté.',
            whatsappTitle: 'WhatsApp',
            phoneTitle: 'Téléphone',
            emailTitle: 'Email',
            locationTitle: 'Lieu',
            whatsappDescription:
              'Réponse rapide pour toute question avant réservation.',
            phoneDescription:
              'Pour échanger rapidement avant votre réservation.',
            emailDescription:
              'Idéal si vous préférez poser votre question par écrit.',
            whatsappLabel: 'Écrire sur WhatsApp',
            whatsappHref: getBusinessWhatsappHref(
              "Bonjour, j'ai une question avant de réserver un massage."
            ),
          },
        },
      },
    },
  },
  pages: {
    mentionsLegalesPath: '/mentions-legales',
    politiqueConfidentialitePath: '/politique-de-confidentialite',
  },
} satisfies Omit<SiteData, 'localized'> & {
  localized: {
    fr: LocalizedSiteData;
  };
};

const frLocalized = siteBase.localized.fr;

const enLocalized = {
  locale: 'en-US',
  lang: 'en',
  chrome: {
    header: {
      tagline: 'Massothérapeute',
      links: {
        home: 'Home',
        massages: 'Massages',
        program: 'Program',
        about: 'About',
        reserve: 'Book',
        contact: 'Contact',
      },
    },
    footer: {
      tagline: 'Wellness massage',
      links: {
        massages: 'Massages',
        about: 'About',
        reserve: 'Book',
        contact: 'Contact',
        legal: 'Legal notice (FR)',
        privacy: 'Privacy policy (FR)',
      },
    },
  },
  pages: {
    home: {
      meta: {
        title: 'Women’s Wellness Massage in Annecy | Les Mains de Sérénité',
        description:
          'Women-only wellness massage in Annecy, by appointment, in a calm and comfortable setting. Lymphatic drainage, targeted massages, and simple guidance to help extend the benefits.',
      },
      hero: {
        subtitle: 'Wellness massage for women in Annecy',
        title: 'Les Mains de Sérénité',
        description:
          'In Annecy, enjoy a calm, caring, and reassuring space dedicated to your well-being.',
        imageAlt: 'Wellness massage atmosphere',
        womenOnlyLabel: 'For women only · English welcome',
        benefitHighlight:
          'Especially appreciated for heavy legs, bloating, and everyday comfort',
        primaryCta: 'Book a massage',
        secondaryCta: 'Call',
        whatsappCta: 'WhatsApp',
      },
      promo: {
        title: 'ANNECY ANIMATION FESTIVAL',
        headline: 'Festival Recovery Massage',
        description:
          '60 min\n\nAfter a long day of screenings, meetings, travel, and networking, take time to relax and recharge.\n\nThis personalized wellness massage is designed to help release tension in the neck, shoulders, back, and legs while promoting deep relaxation and well-being.\n\nWellness massages for women only. English welcome available.',
        ctaText: 'Book your festival massage',
        ctaLink: festivalRecoveryMassageBookingHref,
        analyticsEvent: 'reserve_click',
        image: {
          src: FestivalAnimationOffer,
          alt: 'Annecy Animation Festival wellness massage offer',
        },
      },
      needsSection: {
        title: 'Common needs',
        intro:
          'Common needs these massages are often chosen for, with simple guidance to help extend the benefits when helpful.',
        items: [
          'Heavy legs',
          'Feeling bloated',
          'Water retention',
          'Fatigue and overall heaviness',
        ],
      },
      massagesSection: {
        title: 'Available massages',
        intro:
          'Tailored massages designed to ease tension, offer a true moment of well-being, and help you listen more closely to your body’s needs.',
        recommendedLabel: 'Recommended',
        items: [
          {
            title: 'Lymphatic drainage',
            description:
              'Dynamic lymphatic drainage using the Renata França method. Commonly chosen for heavy legs, feeling bloated, and water retention, while creating a pleasant feeling of lightness.',
            note: 'After lymphatic drainage, simple guidance can be offered to help extend the benefits in everyday life.',
            icon: 'i-lucide-droplets',
            prices: [
              {duration: '1 h', price: '90 €', recommended: true},
              {duration: '1 h 30', price: '125 €'},
            ],
          },
          {
            title: 'Tension relief massage',
            description:
              'A targeted massage designed to ease muscular tension and everyday discomfort. Well-suited for the back, shoulders, and neck, and for supporting deep relaxation.',
            icon: 'i-lucide-activity',
            prices: [
              {duration: '45 min', price: '60 €'},
              {duration: '1 h', price: '80 €', recommended: true},
              {duration: '1 h 30', price: '115 €'},
            ],
          },
          {
            title: 'Body sculpting massage',
            description:
              'A toning massage that supports skin firmness and helps improve the appearance of the silhouette.',
            icon: 'i-lucide-scan',
            prices: [
              {duration: '45 min', price: '70 €'},
              {duration: '1 h', price: '90 €', recommended: true},
              {duration: '1 h 30', price: '125 €'},
            ],
          },
          {
            title: 'Lifting facial massage',
            description:
              'A relaxing facial treatment that stimulates circulation and tones the skin, leaving the face feeling refreshed and naturally toned.',
            icon: 'i-lucide-sparkles',
            prices: [
              {duration: '30 min', price: '50 €'},
              {duration: '45 min', price: '65 €', recommended: true},
              {duration: '1 h', price: '85 €'},
            ],
          },
        ],
      },
      programPreview: {
        eyebrow: 'New',
        title: 'Light Belly & Light Legs Program',
        subtitle: 'A 21-day wellness accompaniment',
        description:
          'For women who would like to go further than a single session, this program combines 5 Renata França lymphatic drainage sessions with a wellness check-in and simple guidance to help extend the feeling of lightness in everyday life.',
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
        ctaLink: programEnPath,
      },
      about: {
        title: 'About',
        body: `
I am Zahara, a wellness massage practitioner in Annecy. My background as a childcare assistant helped me develop an attentive, gentle, and body-aware approach.

Trained in lymphatic drainage with the Renata França method, I offer women-only massages designed to provide a genuine moment of release and well-being.

Through my sessions, I have noticed that many women tend to put themselves last between work, family life, and everyday responsibilities. They often live with tension, fatigue, or a feeling of heaviness until it starts to feel normal.

That is why some sessions can include a little more support, while staying centered on touch, body awareness, and, when helpful, a few simple everyday tips to extend the benefits.

Every session is fully personalized to your needs at that moment, whether you want to ease tension, let go of stress, or simply take time for yourself.

My goal is simple: to offer you a peaceful wellness break in a calm, reassuring, and caring setting where you can fully relax and enjoy the moment.
            `,
        imageAlt: 'Wellness practitioner portrait',
      },
      sessionSteps: {
        title: 'How does a session work?',
        intro: 'A simple and peaceful wellness experience.',
        reassuranceNote: 'You do not need to bring any equipment.',
        steps: [
          {
            title: 'Booking',
            description:
              'Choose the time slot that suits you online or by phone.',
          },
          {
            title: 'Appointment location',
            description:
              'Sessions take place by appointment in Annecy, in a calm and comfortable setting, with all equipment provided.',
          },
          {
            title: 'Your relaxation time',
            description:
              'Enjoy a personalized session in a calm and reassuring environment.',
          },
        ],
      },
      testimonials: {
        title: 'Client reviews',
        intro: 'Clients often describe it best.',
        items: [
          {
            text: 'I often had heavy legs at the end of the day. After the first session, I felt a real sense of lightness and better comfort over the following days.',
            author: 'Marie, Annecy',
          },
          {
            text: 'It was my first lymphatic drainage massage. Zahara took the time to explain everything and made me feel confident straight away. I felt comfortable from beginning to end.',
            author: 'Sophie, Annecy',
          },
          {
            text: 'I was looking for a moment to release the tension that had built up between work and family life. The session helped me truly switch off and take time for myself.',
            author: 'Camille, Annecy',
          },
          {
            text: 'I was pleasantly surprised by the space. The room is calm, warm, and very well cared for. You feel good there immediately, which really helps you relax from the first few minutes.',
            author: 'Élodie, Annecy',
          },
          {
            text: 'I especially appreciated how attentive and personalized the session felt. Zahara adapts to what you need in the moment instead of applying the same routine to everyone.',
            author: 'Julie, Annecy',
          },
        ],
      },
      feltBenefits: {
        title: 'Benefits often felt',
        intro:
          'These are some of the benefits clients often describe after a session, supported by a more attentive everyday relationship with the body.',
        items: [
          'A feeling of lightness',
          'Less heaviness in the legs',
          'Everyday comfort',
          'Deep relaxation',
          'A true moment for yourself',
        ],
      },
      booking: {
        bookingPath: '/en/book',
        title: 'Book your massage',
        description:
          'Book your massage online in just a few clicks and choose the time slot that suits you best.',
        note: 'Easy to reach by phone or WhatsApp before booking',
        reassuranceNote:
          'Massage exclusively reserved for women, in a private and confidential setting.',
        ctaText: 'Book online',
      },
      contact: {
        title: 'Contact',
        subtitle:
          'Have a question, a specific request, or prefer to book directly by phone or WhatsApp?',
        whatsappTitle: 'WhatsApp',
        phoneTitle: 'Phone',
        emailTitle: 'Email',
        locationTitle: 'Location',
        whatsappDescription:
          'Quick reply for any question before your booking.',
        phoneDescription: 'For a quick chat before booking.',
        emailDescription: 'Best if you prefer to ask your question in writing.',
        whatsappLabel: 'Message on WhatsApp',
        locationText:
          'Wellness massage in Annecy, by appointment, in a calm and comfortable setting.',
      },
      whatsapp: {
        generalHref: getBusinessWhatsappHref(
          'Hello, I would like more information about a massage.'
        ),
      },
    },
    program: {
      path: programEnPath,
      meta: {
        title:
          'Light Belly & Light Legs Program in Annecy | Les Mains de Sérénité',
        description:
          'A 21-day wellness accompaniment in Annecy combining Renata França lymphatic drainage, a wellness check-in, simple guidance, and WhatsApp follow-up.',
      },
      hero: {
        eyebrow: '21-day program',
        title: 'Light Belly & Light Legs Program',
        description:
          'Reconnect with lighter legs, a more comfortable belly, and more everyday energy through a holistic women’s wellness approach.',
        primaryCta: 'Ask for details',
        secondaryCta: 'See what is included',
      },
      intro: {
        title: 'An accompaniment to extend the benefits of drainage',
        body: 'This program is for women who would like to go further than a single session. It combines 5 Renata França lymphatic drainage sessions with a wellness check-in, simple everyday guidance, and WhatsApp follow-up for 21 days.',
      },
      forWhom: {
        title: 'This program is ideal if you would like to',
        items: [
          'Reconnect with lighter legs',
          'Reduce feelings of bloating',
          'Ease the feeling of water retention',
          'Feel more comfortable in everyday life',
          'Be supported with a gentle and simple approach',
        ],
      },
      includes: {
        title: 'The program includes',
        items: [
          '5 one-hour Renata França lymphatic drainage sessions',
          'A 20-minute wellness check-in',
          'A simple food guide for bloating and water retention',
          'A simplified shopping list',
          'WhatsApp follow-up for 21 days',
          'Personalized tips adapted to your everyday life',
        ],
      },
      price: {
        label: 'Launch price',
        amount: '350 €',
        usualValueLabel: 'Usual value',
        usualValue: '470 €',
      },
      method: {
        title: 'Why combine drainage and everyday habits?',
        body: 'Lymphatic drainage can bring a pleasant feeling of lightness and help release body tension. Between sessions, simple habits can support this comfort: hydration, easier-to-digest meals, listening to your body, and a steadier rhythm. The goal is not perfection, but gentle and realistic support.',
      },
      story: {
        title: 'Why I created this method',
        body: 'Through my sessions, I understood that one massage alone was not always enough. Everyday habits also play an important role. This is how the Light Belly Method was born: a simple, caring, and accessible approach combining lymphatic drainage, everyday habits, and better body awareness.',
      },
      faq: {
        title: 'Frequently asked questions',
        items: [
          {
            question: 'Is this a diet?',
            answer:
              'No. The guidance is simple, progressive, and designed to support everyday comfort without pressure or perfection.',
          },
          {
            question: 'Do I need to have tried drainage before?',
            answer:
              'No. The program can be a first discovery if you would like a more complete accompaniment from the start.',
          },
          {
            question: 'How does the WhatsApp follow-up work?',
            answer:
              'The follow-up lets you ask questions, adapt the guidance to your everyday life, and stay connected between sessions.',
          },
        ],
      },
      cta: {
        title: 'Would you like to feel lighter?',
        description:
          'Send Zahara a message to ask your questions or reserve your place at the launch price.',
        text: 'Ask about the program',
        note: 'Personal reply by WhatsApp.',
        href: programEnWhatsappHref,
        analyticsEvent: 'whatsapp_click',
      },
    },
    reserve: {
      meta: {
        title: 'Booking Redirect | Les Mains de Sérénité',
        description:
          'Redirecting you to the online booking page for Les Mains de Sérénité.',
      },
      redirect: {
        title: 'Redirecting...',
        kicker: 'Booking',
        heading: 'Redirecting...',
        description: 'You are being redirected to online booking.',
        ctaText: 'Continue now',
        delayMs: 600,
      },
    },
    reserveOnline: {
      meta: {
        title: 'Book Online | Les Mains de Sérénité Annecy',
        description:
          'Book your women-only wellness massage in Annecy. Easy online scheduling and payment on site.',
      },
      reserveLink: '/en/book-online',
      hero: {
        kicker: 'Wellness massage for women in Annecy',
        title: 'Book your wellness massage',
        description:
          'Choose your massage and your preferred time slot with ease. Sessions are available by appointment in a calm, caring, and soothing setting.',
        reassuranceItems: [
          {
            icon: 'i-lucide-flower',
            label: 'Women-only service',
          },
          {
            icon: 'i-lucide-home',
            label: 'Calm and private setting',
          },
          {
            icon: 'i-lucide-briefcase-medical',
            label: 'Massage table and equipment provided',
          },
          {
            icon: 'i-lucide-wallet',
            label: 'Pay on site',
          },
        ],
        testimonialQuote: 'A truly relaxing moment, I highly recommend it.',
        testimonialAuthor: 'Marie, Annecy',
      },
      scheduler: {
        title: 'Choose your time slot',
        description:
          'Pick your massage and your appointment time in just a few seconds.',
        detail:
          'Each session is tailored to your needs at the moment, so you can enjoy a true moment of relaxation.',
        paymentNote: 'No online payment. Please pay on site.',
        disclaimer:
          'Women-only service · Wellness massage with no medical purpose',
      },
      contact: {
        title: 'A question before booking?',
        subtitle:
          'I reply quickly to help you choose the massage that best fits your needs.',
        whatsappTitle: 'WhatsApp',
        phoneTitle: 'Phone',
        emailTitle: 'Email',
        locationTitle: 'Location',
        whatsappDescription:
          'Quick reply for any question before your booking.',
        phoneDescription: 'For a quick chat before booking.',
        emailDescription: 'Best if you prefer to ask your question in writing.',
        whatsappLabel: 'Message on WhatsApp',
        whatsappHref: getBusinessWhatsappHref(
          'Hello, I have a question before booking a massage.'
        ),
      },
    },
  },
} satisfies LocalizedSiteData;

export const site = {
  ...siteBase,
  localized: {
    fr: frLocalized,
    en: enLocalized,
  },
} satisfies SiteData;

export const getLocalizedSite = (
  locale: Locale = defaultLocale
): LocalizedSiteData => {
  const localizedSite = site.localized[locale] as LocalizedSiteData | undefined;

  if (!localizedSite) {
    throw new Error(`Missing localized site data for locale: ${locale}`);
  }

  return localizedSite;
};
