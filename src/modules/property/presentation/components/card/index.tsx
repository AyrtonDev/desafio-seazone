import { PropertyItem } from "@/domain/model/property-model"
import { mockImages } from "@/modules/property/mock/images-mock"
import { cn } from "@/shared/lib/utils"
import { MapPin, Star, TicketCheck, TicketX } from "lucide-react"
import Image from "next/image"

type Props = {
  property: PropertyItem
}

export const Card = ({ property }: Props) => {
  const images = mockImages.find(image => image.id == property.id)

  return (
    <div className="flex justify-between bg-white rounded p-2 w-full h-24 relative">
      <div className="flex gap-4">
        {images && <Image alt="imagem imóvel" src={images.mainImage} objectFit="content" width={70} height={70} className="rounded"/>}
        <div className="flex flex-col justify-between">
          <h3 className="text-sm">{property.title}</h3>
          <div className="flex gap-1">
            <MapPin size={15}/>
            <span className="text-[12px]">{`${property.location.city}, ${property.location.state}, ${property.location.country}`}</span>
          </div>
          <div className="flex gap-1 items-center">
            <Star size={15}/>
            <span className="text-[10px]">{property.rating}</span>
            <span className="text-[10px]">({property.reviewCount})</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-[12px]">Disponivel:</span>
            <div className="flex gap-1">
              {property.available ? <TicketCheck size={15} className="text-green-500" /> : <TicketX size={15} className="text-red-500" />}
              <span className={cn('text-[10px] font-semibold text-red-500', property.available && "text-green-500")}>
                {property.available ? "Sim" : "Não"}
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 right-3 flex flex-col text-orange-500">
          <span className="text-[10px] font-semibold">Preço por noite</span>
          <span className="text-sm font-semibold">R$ {property.pricePerNight}</span>
        </div>
      </div>
    </div>
  )
}