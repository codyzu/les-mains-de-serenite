// @unocss-include
export type SiteData = {
  brand: string;
  subtitle: string;
  phone: string;
  email: string;
  bookingUrl: string;
  locationText: string;
  legal: {
    name: string;
    legalStatus: string;
    address: string;
    siren: string;
    siret: string;
    vatNumber: string;
    hostName: string;
    hostAddress: string;
    hostWebsite: string;
    dataRetention: string;
    lastUpdated: string;
  };
  hero: {
    title: string;
    description: string;
    location: string;
    primaryCta: string;
    secondaryCta: string;
  };
  massages: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  about: {
    title: string;
    body: string;
  };
};

export const site = {
  brand: 'Les Mains de Sérénité',
  subtitle: 'Massage bien-être à Annecy',
  phone: '06 18 75 81 28',
  email: 'bonjour@lesmainsdeserenite.fr',
  bookingUrl: 'https://calendly.com/your-link',
  locationText:
    'Massages sur rendez-vous. Le lieu sera communiqué lors de la réservation.',
  legal: {
    name: 'Zahara Zuschlag',
    legalStatus: 'Entrepreneur individuel en micro-entreprise',
    address: '27 avenue de la plaine, 74000 Annecy',
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
  hero: {
    title: 'Les Mains de Sérénité',
    description:
      'Offrez à votre corps un moment de détente profonde et de relâchement des tensions.',
    location: 'Annecy et alentours, sur rendez-vous',
    primaryCta: 'Réserver un massage',
    secondaryCta: 'Appeler',
  },
  massages: [
    {
      title: 'Massage relaxant',
      description:
        'Massage complet du corps pour favoriser la détente et apaiser les tensions.',
      icon: 'i-lucide-flower-2',
    },
    {
      title: 'Massage thérapeutique',
      description:
        'Massage ciblé pour soulager les douleurs musculaires et améliorer la mobilité.',
      icon: 'i-lucide-heart-pulse',
    },
    {
      title: 'Massage dos & nuque',
      description:
        'Idéal pour les tensions liées au stress ou au travail sur écran.',
      icon: 'i-lucide-activity',
    },
    {
      title: 'Massage anti-douleur',
      description:
        'Un soin ciblé pour apaiser les zones sensibles, relâcher les tensions et retrouver plus de confort au quotidien.',
      icon: 'i-lucide-shield-plus',
    },
  ],
  about: {
    title: 'À propos',
    body: `
Derrière Les Mains de Sérénité se trouve une praticienne passionnée par le bien-être et l’écoute du corps.

Chaque séance est adaptée aux besoins de la personne afin d’apporter relaxation, relâchement des tensions et équilibre.

L’objectif est simple : offrir un moment de calme et de soin dans un environnement accueillant et bienveillant.
    `,
  },
} satisfies SiteData;
