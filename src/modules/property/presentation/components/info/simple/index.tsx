import { ReactNode } from "react"

type Props = {
  icon: ReactNode
  info: string | number | ReactNode
}

export const InfoSimple = ({ icon, info }: Props) => {
  return (
    <div className="flex gap-1 items-center">
      {icon}
      <span className="text-sm">{info}</span>
    </div>
  )
}