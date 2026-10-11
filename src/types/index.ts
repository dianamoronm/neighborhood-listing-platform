export interface Sponsor {
  id: string;
  name: string;
  url: string;
}

export interface Property {
  id: string;
  name: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  imageAlt: string;
  sponsor?: Sponsor;
}
