import type {SiteBusinessData} from './types';
import {businessPhone} from './shared';

export const business = {
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
    hostAddress: '88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis',
    hostWebsite: 'https://github.com',
    dataRetention:
      '3 ans maximum après le dernier contact émanant de la personne',
    lastUpdated: '16 mars 2026',
  },
} satisfies SiteBusinessData;
