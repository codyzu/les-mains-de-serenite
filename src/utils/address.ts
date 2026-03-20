import type {SiteData} from '../data/site';

export const formatAddress = ({
  streetAddress,
  postalCode,
  addressLocality,
}: Pick<
  SiteData['address'],
  'streetAddress' | 'postalCode' | 'addressLocality'
>) => `${streetAddress}, ${postalCode} ${addressLocality}`;
