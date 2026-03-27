export type PropertyType = 'APARTMENT' | 'VILLA' | 'TOWNHOUSE' | 'NEW_BUILD';
export type PropertyStatus = 'FOR_SALE' | 'SOLD' | 'UNDER_CONTRACT';

export interface Property {
  id: string;
  title: string;
  location: string;
  region: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: string;
  summary: string;
  type: PropertyType;
  status: PropertyStatus;
  imageUrl: string;
  tags: string[];
  agentName: string;
  gallery: string[];
}
