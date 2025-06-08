import { Property } from "@/domain/model/property-model"
import { formatPrice } from "../../utils/format"
import { Button } from "@/shared/components/ui/button"
import { Ticket } from "lucide-react"
import { Reservation } from "../reservation"

type Props = {
  property: Property
}

export const Booking = ({ property }: Props) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow z-50 flex justify-between items-center rounded-t-lg">
      <div className="flex flex-col">
        <span className="text-sm">Preço por noite</span>
        <span className="font-semibold text-orange-500">{formatPrice(property.pricePerNight)}</span>
      </div>
      <Reservation>
        <Button className="bg-orange-500 w-40 h-12 text-md font-bold" disabled={!property.available}>
          <Ticket />
          Reserva
        </Button>
      </Reservation>
    </div>
  )
}