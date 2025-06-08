import { Button } from "@/shared/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/shared/components/ui/sheet"
import { ListFilter } from "lucide-react"
import { StateFilter } from "./state-filter"
import { useFilter } from "../../../contexts/filter-context"
import { CityFilter } from "./city-filter"
import { PriceFilter } from "./price-filter"
import { TypePropertyFilter } from "./type-property-filter"
import { CapacityFilter } from "./capacity-filter"
import { BedroomsFilter } from "./bedrooms-filter"
import { AvailableFilter } from "./available-filter"
import { Separator } from "@/shared/components/ui/separator"
import { ScrollArea } from "@/shared/components/ui/scroll-area"
import { AmenitiesFilter } from "./amenities-filter"
import { useState } from "react"

export const Filter = () => {
  const { applyFilter, cleanFilter } = useFilter()
  const [open, setOpen] = useState(false)

  function handleApplyFilter() {
    applyFilter()
    setOpen(false)
  }

  function handleCleanFilter() {
    cleanFilter()
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="size-8">
          <ListFilter />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filtro</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[70vh] w-full">
          <div className="flex flex-col w-full px-4 gap-4">
            <StateFilter />
            <Separator />
            <CityFilter />
            <Separator />
            <TypePropertyFilter />
            <Separator />
            <PriceFilter />
            <Separator />
            <CapacityFilter />
            <Separator />
            <BedroomsFilter />
            <Separator />
            <AmenitiesFilter />
            <Separator />
            <AvailableFilter />
          </div>
        </ScrollArea>
        <SheetFooter>
          <Button variant="outline" onClick={handleCleanFilter}>Limpar</Button>
          <Button className="bg-orange-500" onClick={handleApplyFilter}>Aplicar</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}