import { LogoMain } from "../logo"

export const ViewBlockDesk = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-6">
      <LogoMain />
      <h2 className="text-4xl text-orange-500 font-semibold">Site desenolvido para celulares!</h2>
      <p className="text-xl w-1/2 text-center text-orange-500">Este site foi feito apenas para navegação usando celulares, futuramente terá a versão para computadores</p>
    </div>
  )
}