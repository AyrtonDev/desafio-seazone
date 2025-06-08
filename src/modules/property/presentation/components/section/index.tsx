import { Props } from "@/shared/types"

export const Section = ({ children }: Props) => {
  return (
    <section className="bg-gray-100 px-2 py-6 w-full h-full min-h-screen">
      {children}
    </section>
  )
}