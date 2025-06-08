import { Props } from "../types";

export function MobileScreen({ children }: Props) {
  return (
    <div className="w-full min-h-[100vh] flex flex-col">
      {children}
    </div>
  )
}