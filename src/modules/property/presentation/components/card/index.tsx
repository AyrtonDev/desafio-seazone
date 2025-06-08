import { PropertyItem } from "@/domain/model/property-model"
import { mockImages } from "@/modules/property/mock/images-mock"
import { cn } from "@/shared/lib/utils"
import { MapPin, Star, TicketCheck, TicketX } from "lucide-react"
import Image from "next/image"
import Link from 'next/link';
import { formatPrice } from "../../utils/format"

type Props = {
  property: PropertyItem
}

export const Card = ({ property }: Props) => {
  const images = mockImages.find(image => image.id == property.id)

  return (
    <Link href={`/imovel/${property.id}`} className="w-full">
      <div className="flex flex-col bg-white rounded p-2 w-full h-52 relative gap-4">
        {images &&
          <div className="relative w-full h-26 overflow-hidden rounded">
            <Image alt="imagem imóvel" src={images.mainImage} fill className="object-cover" sizes="100%"/>
          </div>
        }
        <div className="flex flex-col gap-1">
          <h3 className="text-lg">{property.title}</h3>
          <div className="flex gap-1">
            <MapPin size={15}/>
            <span className="text-sm">{`${property.location.city}, ${property.location.state}, ${property.location.country}`}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-sm">Disponivel:</span>
            <div className="flex gap-1 items-center">
              {property.available ? <TicketCheck size={15} className="text-green-500" /> : <TicketX size={15} className="text-red-500" />}
              <span className={cn('text-sm font-semibold text-red-500', property.available && "text-green-500")}>
                {property.available ? "Sim" : "Não"}
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-white p-2 rounded flex gap-1 items-center">
            <Star size={12} className="stroke-yellow-400 fill-yellow-400"/>
            <span className="text-[10px]">{property.rating}</span>
            <span className="text-[10px]">({property.reviewCount})</span>
          </div>
        <div className="absolute bottom-2 right-3 flex flex-col text-orange-500">
          <span className="text-[10px] font-semibold">Preço por noite</span>
          <span className="text-sm font-semibold">{formatPrice(property.pricePerNight)}</span>
        </div>
      </div>
    </Link>
  )
}