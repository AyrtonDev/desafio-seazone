import { Property } from "@/domain/model/property-model"
import { MapPin, Star } from "lucide-react"

type Props = {
  property: Property
}

export const InfoPrimary = ({ property }: Props) => {
  return (
    <div className="flex justify-between px-4 py-4 bg-black mt-12 rounded-b-lg">
      <div className="flex flex-col text-white h-14 justify-between">
        <h2 className="text-md font-semibold">{property.title}</h2>
        <div className="flex gap-1 items-center">
          <MapPin size={15}/>

          <span className="text-sm">{`${property.location.city}, ${property.location.state}, ${property.location.country}`}</span>
        </div>
      </div>
      <div className="flex flex-col text-white justify-between items-end">
        <div className="flex gap-2 items-center">
          <Star size={15} className="stroke-yellow-400 fill-yellow-400"/>
          <span className="text-md font-semibold">{property.rating}</span>
        </div>
        <span className="text-sm font-semibold">({property.reviewCount})</span>
      </div>
    </div>
  )
}