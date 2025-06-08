import { capacityMock } from "@/modules/property/mock/filter-mock"
import { Button } from "@/shared/components/ui/button"
import { Label } from "@/shared/components/ui/label"
import { cn } from "@/shared/lib/utils"
import { useEffect, useState } from "react"
import { useFilter } from "../../../contexts/filter-context"

export const CapacityFilter = () => {
  const { preFilter, applyValue } = useFilter()
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (preFilter && preFilter.capacity) {
      setActive(true)
    }
  }, [preFilter])

  function handleValue (value: string) {
    if (preFilter?.capacity === value && active) {
      applyValue('capacity', '')
      setActive(false)
    } else {
      applyValue('capacity', value)
      setActive(true)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <Label className="ml-2 text-sm">Capacidade de hóspedes</Label>
      <div className="flex justify-between">
        {capacityMock.map((c, i) => (
          <Button
            variant="outline"
            key={i}
            className={cn(
              active && preFilter!.capacity === c && 'text-orange-500 border-orange-500'
            )}
            onClick={() => handleValue(c)}
          >
            +{c}
          </Button>
        ))}
      </div>
    </div>
  )
}