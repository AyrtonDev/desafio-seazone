'use client'

import { Button } from "@/shared/components/ui/button"
import { Calendar } from "@/shared/components/ui/calendar"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components/ui/dialog"
import { Input } from "@/shared/components/ui/input"
import { Props } from "@/shared/types"
import { Label } from "@radix-ui/react-label"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { DateRange } from 'react-day-picker'
import { toast } from "sonner"

export const Reservation = ({ children }: Props) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleValue(e: any) {
    const { id, value } = e.target

    if (id === 'name') return setName(value) 

    return setEmail(value)
  }

  function submit () {
    if (name.length === 0) {
      return toast.error('Campo "nome" não pode ficar vazio!', { duration: 5000 })
    }

    if (email.length === 0) {
      return toast.error('Campo "email" não pode ficar vazio!', { duration: 5000 })
    }

    if (!date) {
      return toast.error('Por favor, selecione uma data para continuar!', { duration: 5000 })
    }

    return setTimeout(() => {
      toast.success('Reserva feita com sucesso!')
      setOpen(false)
      router.push('/imovel')
    }, 1000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Dados para reserva</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input id="name" placeholder="Pedro Duarte" className="col-span-3" value={name} onChange={(e) => handleValue(e)}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              E-mail
            </Label>
            <Input id="email" placeholder="exemplo@mail.com" className="col-span-3" value={email} onChange={(e) => handleValue(e)}/>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Calendar
              mode="range"
              selected={date}
              onSelect={setDate}
              className="rounded-lg border"
              classNames={{
                day_selected: "bg-orange-500 text-white hover:bg-orange-600",
                day_range_start: "bg-orange-500 text-white hover:bg-orange-600 rounded-l-md",
                day_range_end: "bg-orange-500 text-white hover:bg-orange-600 rounded-r-md",
                day_range_middle: "bg-orange-100 text-orange-900",
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-orange-500 font-semibold" onClick={submit}>Concluir Reserva</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
