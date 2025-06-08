import { Property } from "@/domain/model/property-model"
import { Button } from "@/shared/components/ui/button"
import { cn } from "@/shared/lib/utils"
import { Armchair, Bath, Bed, House, Ticket, User } from "lucide-react"
import { useEffect, useState } from "react"
import { InfoSimple } from "../simple"
import { Badge } from "@/shared/components/ui/badge"

type Props = {
  property: Property
}

export const InfoSecondary = ({ property }: Props) => {
  const [activeTab, setActiveTab] = useState('describe')
  const [showTab, setShowTab] = useState('describe')

  useEffect(() => {
    setTimeout(() => {
      setShowTab(activeTab)
    }, 320)
  }, [activeTab])

  function handleTab (tab: string) {
    setActiveTab(tab)
  }

  return (
    <div className="flex flex-col w-full py-4 gap-4 mb-14 bg-transparent">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          onClick={() => handleTab('describe')}
          className={cn(activeTab === 'describe' && 'border-b-2 border-b-orange-500 text-orange-500')}
        >
          Descrição
        </Button>
        <Button
          variant="ghost"
          onClick={() => handleTab('detail')}
          className={cn(activeTab === 'detail' && 'border-b-2 border-b-orange-500 text-orange-500')}
        >
          Detalhes
        </Button>
      </div>
      <div>
        {activeTab === 'describe' &&
          <div
            className={cn(
              'transition duration-300 px-4',
              activeTab === 'describe' && 'opacity-0',
              showTab === 'describe' && 'opacity-100'
            )}
          >
            {property.description}
          </div>
        }
        {activeTab === 'detail' &&
        <>
          <div
            className={cn(
              'transition duration-300 px-4 py-2 grid grid-cols-2 gap-4',
              activeTab === 'detail' && 'opacity-0',
              showTab === 'detail' && 'opacity-100'
            )}
          >
            <InfoSimple icon={<Bed />} info={`Quartos: ${property.bedrooms}`}/>
            <InfoSimple icon={<Ticket />} info={`Disponivel: ${property.available ? "Sim" : "Não"}`}/>
            <InfoSimple icon={<Bath />} info={`Banheiros: ${property.bathrooms}`}/>
            <InfoSimple icon={<User />} info={`Capacidade: ${property.capacity}`}/>
            <InfoSimple icon={<House />} info={`Tipo: ${property.type}`}/>
          </div>
          <div className={cn(
            "transition duration-300 w-full px-4 mt-1",
            activeTab === 'detail' && 'opacity-0',
            showTab === 'detail' && 'opacity-100'
          )}>
            <span className="text-sm flex gap-1 flex-wrap items-center"><Armchair /> Comodidades: {property.amenities.map((a, i) => (
              <Badge key={i} variant="outline">{a}</Badge>
            ))}</span>
          </div>
        </>
        }
      </div>
    </div>
  )
}