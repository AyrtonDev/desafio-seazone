import { statesMock } from "@/modules/property/mock/filter-mock"
import { Label } from "@/shared/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { formatStateName } from "../../../utils/format"
import { useFilter } from "../../../contexts/filter-context"

export const StateFilter = () => {
  const { preFilter, applyValue } = useFilter()

  function handleValue (value: any) {
    applyValue('state', value)
  }

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="state" className="ml-2 text-sm">Estado</Label>
      <Select value={preFilter?.state ?? undefined} onValueChange={handleValue}>
        <SelectTrigger className="w-full" id="state">
          <SelectValue placeholder="Estado" />
        </SelectTrigger>
        <SelectContent>
          {
            statesMock.map((state, i) => (
              <SelectItem key={i} value={state}>{formatStateName(state)}</SelectItem>
            ))
          }
        </SelectContent>
      </Select>
    </div>
  )
}