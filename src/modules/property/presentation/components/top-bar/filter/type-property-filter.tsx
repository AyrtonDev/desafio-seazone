import { typePropertyMock } from "@/modules/property/mock/filter-mock"
import { Label } from "@/shared/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { formatStateName } from "../../../utils/format"
import { useFilter } from "../../../contexts/filter-context"

export const TypePropertyFilter = () => {
  const { preFilter, applyValue } = useFilter()

  function handleValue (value: any) {
    applyValue('type', value)
  }

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="type" className="ml-2 text-sm">Tipo de imóvel</Label>
      <Select value={preFilter?.type ?? undefined} onValueChange={handleValue}>
        <SelectTrigger className="w-full" id="type">
          <SelectValue placeholder="Ex: apartamento" />
        </SelectTrigger>
        <SelectContent>
          {
            typePropertyMock.map((type, i) => (
              <SelectItem key={i} value={type}>{formatStateName(type)}</SelectItem>
            ))
          }
        </SelectContent>
      </Select>
    </div>
  )
}