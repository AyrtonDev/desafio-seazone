import { PropertyItem } from "@/domain/model/property-model";
import { Card } from "../card";

type Props = {
  data: PropertyItem[]
}

export const List = ({ data }: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-6">
      {data.map(p => (
        <Card key={p.id} property={p} />
      ))}
    </div>
  )
}