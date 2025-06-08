import { FilterProvider } from "@/modules/property/presentation/contexts/filter-context"
import PropertyListPage from "@/modules/property/presentation/pages/property-list"

export const makePropertyListPage = () => {
  return (
    <FilterProvider>
      <PropertyListPage />
    </FilterProvider>
  )
}