import { Checkbox } from "@/shared/components/ui/checkbox"
import { Label } from "@/shared/components/ui/label"
import { useFilter } from "../../../contexts/filter-context"

export const AvailableFilter = () => {
  const { preFilter, applyValue } = useFilter()

  function handleValue(value: boolean) {
    applyValue('onlyAvailable', value)
  }

  return (
    <div className="flex gap-2 items-center">
      <Checkbox checked={preFilter?.onlyAvailable ?? false} onCheckedChange={handleValue} className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500" />
      <Label className="text-sm">Somente imóveis disponíveis</Label>
    </div>
  )
}