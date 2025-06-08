import { bedroomsMock } from "@/modules/property/mock/filter-mock"
import { Button } from "@/shared/components/ui/button"
import { Label } from "@/shared/components/ui/label"
import { cn } from "@/shared/lib/utils"
import { useEffect, useState } from "react"
import { useFilter } from "../../../contexts/filter-context"

export const BedroomsFilter = () => {
  const { preFilter, applyValue } = useFilter()
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (preFilter && preFilter.bedrooms) {
      setActive(true)
    }
  }, [preFilter])

  function handleValue (value: string) {
    if (preFilter?.bedrooms === value && active) {
      applyValue('bedrooms', '')
      setActive(false)
    } else {
      applyValue('bedrooms', value)
      setActive(true)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <Label className="ml-2 text-sm">Quantidade de quartos</Label>
      <div className="flex justify-between">
        {bedroomsMock.map((b, i) => (
          <Button
            variant="outline"
            key={i}
            className={cn(
              active && preFilter!.bedrooms === b && 'text-orange-500 border-orange-500'
            )}
            onClick={() => handleValue(b)}
          >
            {b}
          </Button>
        ))}
      </div>
    </div>
  )
}