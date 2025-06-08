import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { useFilter } from "../../../contexts/filter-context"

export const PriceFilter = () => {
  const { preFilter, applyValue } = useFilter()

  function handleValue(e: any) {
    const { id, value } = e.target

    applyValue(id, value)
  }

  return (
  <div className="flex justify-between gap-2">
    <div className="flex flex-col gap-2">
      <Label htmlFor="priceMin" className="ml-2 text-sm">Preço á parti de</Label>
      <Input type="number" placeholder="R$ 0" id="priceMin" onChange={handleValue} value={preFilter?.priceMin ?? ''}/>
    </div>
    <div className="flex flex-col gap-2">
      <Label htmlFor="priceMax" className="ml-2 text-sm">Até</Label>
      <Input type="number" placeholder="R$ 0" id="priceMax" onChange={handleValue} value={preFilter?.priceMax ?? ''}/>
    </div>
  </div>
  )
}