import { Property, PropertyItem } from "@/domain/model/property-model";
import { PropertyT } from "@/shared/types";

export function treatmentDataResponseItem (data: PropertyT): Property {
  return {
    id: data.id,
    title: data.title,
    description: data.description,
    location: {
      city: data.city,
      state: data.state,
      country: data.country,
    },
    pricePerNight: data.pricePerNight,
    rating: data.rating,
    reviewCount: data.numberOfReviews,
    available: data.isAvailable,
    type: data.propertyType,
    capacity: data.maxGuests,
    bedrooms: data.bedrooms,
    bathrooms: data.bathrooms,
    amenities: data.amenities,
    image: data.imageUrl
  }
}

export function treatmentDataResponseList(data: PropertyT[] | undefined): PropertyItem[] {
  if (!data) return []

  return data.map(item => ({
    id: item.id,
    location: {
      city: item.city,
      state: item.state,
      country: item.country
    },
    available: item.isAvailable,
    pricePerNight: item.pricePerNight,
    rating: item.rating,
    reviewCount: item.numberOfReviews,
    title: item.title,
    image: item.imageUrl
  }))
}