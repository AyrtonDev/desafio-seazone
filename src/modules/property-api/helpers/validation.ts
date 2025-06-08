import { PropertyFilters } from "@/domain/model/property-model";
import { PropertyT } from "@/shared/types";

export function validationFilter (property: PropertyT, filters: PropertyFilters) {
  if (filters.city && property.city !== filters.city) return false;
  if (filters.state && property.state !== filters.state) return false;
  if (filters.type && property.propertyType !== filters.type) return false;

  const priceMin = filters.priceMin ? parseFloat(filters.priceMin) : undefined
  const priceMax = filters.priceMax ? parseFloat(filters.priceMax) : undefined
  const capacity = filters.capacity ? parseInt(filters.capacity) : undefined
  const bedrooms = filters.bedrooms ? parseInt(filters.bedrooms) : undefined
  console.log(property.isAvailable)
  console.log(filters.onlyAvailable)

  if (priceMin !== undefined && property.pricePerNight < priceMin) return false
  if (priceMax !== undefined && property.pricePerNight > priceMax) return false
  if (capacity !== undefined && property.maxGuests < capacity) return false
  if (bedrooms !== undefined && property.bedrooms !== bedrooms) return false

  if (
    filters.amenities &&
    filters.amenities.length > 0 &&
    !filters.amenities.every((a) => property.amenities.includes(a))
  ) {
    return false
  }

  if (filters.onlyAvailable && !property.isAvailable) return false

  return true
}