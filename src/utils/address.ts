import type {SiteBusinessData} from '../data/site';

export const formatAddress = ({
  streetAddress,
  postalCode,
  addressLocality,
}: Pick<
  SiteBusinessData['address'],
  'streetAddress' | 'postalCode' | 'addressLocality'
>) => `${streetAddress}, ${postalCode} ${addressLocality}`;
