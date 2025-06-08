import { TicketX } from "lucide-react";

export const NotFoundItem = () => (
  <div className="w-full h-96 flex flex-col justify-center items-center">
    <TicketX size={150} className="text-orange-500" />
    <h2 className="text-2xl text-orange-500">Nenhum imóvel encontrado!</h2>
  </div>
)