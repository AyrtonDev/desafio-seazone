import { Logo } from "@/shared/components/logo"
import { Filter } from "./filter"

export const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-2 shadow">
      <Logo/>
      <div className="px-2">
        <Filter/>
      </div>
    </div>
  )
}