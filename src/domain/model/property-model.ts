export interface Property {
  id: number;
  title: string;
  description: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  available: boolean;
  type: string;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  image: string;
}

export interface PropertyFilters {
  city?: string;
  state?: string;
  type?: string;
  priceMin?: string;
  priceMax?: string;
  capacity?: string;
  bedrooms?: string;
  amenities?: string[];
  onlyAvailable?: boolean;
}

export interface PropertyItem {
  id: number;
  title: string;
  location: {
    city: string;
    state: string;
    country: string;
  },
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  available: boolean;
  image: string
}