import { amenitiesMock } from "@/modules/property/mock/filter-mock"
import { Button } from "@/shared/components/ui/button"
import { Label } from "@/shared/components/ui/label"
import { cn } from "@/shared/lib/utils"
import { useFilter } from "../../../contexts/filter-context"

export const AmenitiesFilter = () => {
  const { preFilter, applyValue } = useFilter()

  function toggleValue (value: string) {
    const list = preFilter.amenities.includes(value) 
      ? preFilter.amenities.filter(c => c !== value)
      : [...preFilter.amenities, value]

    applyValue('amenities', list)
  }

  return (
    <div className="flex flex-col gap-2">
      <Label className="ml-2 text-sm">Comodidades</Label>
      <div className="flex justify-between flex-wrap gap-2">
        {amenitiesMock.map((a, i) => {
          const active = preFilter.amenities.includes(a)

          return (
            <Button
              variant="outline"
              key={i}
              className={cn(
                active && 'text-orange-500 border-orange-500'
              )}
              onClick={() => toggleValue(a)}
            >
              {a}
            </Button>
          )
        })}
      </div>
    </div>
  )
}