import { PropertyFilters } from "@/domain/model/property-model";
import { PropertyT } from "@/shared/types";

export function validationFilter (property: PropertyT, filters: PropertyFilters) {
  if (filters.city && property.city !== filters.city) return false;
  if (filters.state && property.state !== filters.state) return false;
  if (filters.type && property.propertyType !== filters.type) return false;
  if (
    filters.priceMin !== undefined &&
    property.pricePerNight < filters.priceMin
  )
    return false;
  if (
    filters.priceMax !== undefined &&
    property.pricePerNight > filters.priceMax
  )
    return false;
  if (
    filters.capacity !== undefined &&
    property.maxGuests < filters.capacity
  )
    return false;
  if (
    filters.bedrooms !== undefined &&
    property.bedrooms < filters.bedrooms
  )
    return false;
  if (
    filters.amenities &&
    !filters.amenities.every((a) => property.amenities.includes(a))
  )
    return false;
  if (filters.onlyAvailable && !property.isAvailable) return false;

  return true;
}