import { Logo } from "@/shared/components/logo"
import { Button } from "@/shared/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { useRouter } from 'next/navigation';

export const DetailTopBar = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center px-2 shadow w-full h-full relative">
      <Logo/>
      <Button onClick={() => router.back()} variant="outline" className="flex justify-center items-center absolute top-3 left-3">
        <ChevronLeft />
      </Button>
    </div>
  )
}