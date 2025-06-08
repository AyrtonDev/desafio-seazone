import { Button } from "@/shared/components/ui/button";
import { MobileScreen } from "@/shared/layout/mobile-screen";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <MobileScreen>
      <div className="relative w-full h-screen bg-cover bg-center " style={{ backgroundImage: 'url(/back-home.jpg)' }}>
        <div className="absolute inset-0 bg-black/20 z-0 backdrop-blur-xs"/>
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
          <Image 
            src="/logo-home.png"
            alt="logo"
            width={200}
            height={200}
            priority
          />

          <div className="flex flex-col items-center gap-4
           mt-20 p-5 w-full bg-orange-200/20 backdrop-blur-xs">
            <h2 className="font-bold text-white text-center text-2xl text-shadow-lg">Venha fazer sua reserva</h2>

            <Link href="/imovel">
              <Button className="bg-orange-500 rounded-3xl text-lg font-bold text-shadow-lg p-5 shadow active:bg-white active:text-orange-500 duration-100">Ver imóveis</Button>
            </Link>
          </div>
        </div>
      </div>
    </MobileScreen>
  )
}