import { Label } from "@/shared/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { useFilter } from "../../../contexts/filter-context"
import { citiesMock, StateSingle } from "@/modules/property/mock/filter-mock"
import { useEffect, useState } from "react"

export const CityFilter = () => {
  const { preFilter, applyValue } = useFilter()
  const [cities, setCities] = useState<string[]>([])

  useEffect(() => {
    if (preFilter && preFilter.state) {
      setCities(citiesMock[preFilter.state as StateSingle])
    }
  }, [preFilter])

  function handleValue (value: any) {
    applyValue('city', value)
  }

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="city" className="ml-2 text-sm">Cidade</Label>
      <Select value={preFilter?.city ?? undefined} onValueChange={handleValue} disabled={!preFilter?.state}>
        <SelectTrigger className="w-full" id="city">
          <SelectValue placeholder="Cidade" />
        </SelectTrigger>
        <SelectContent>
          {
            cities.map((city, i) => (
              <SelectItem key={i} value={city}>{city}</SelectItem>
            ))
          }
        </SelectContent>
      </Select>
    </div>
  )
}