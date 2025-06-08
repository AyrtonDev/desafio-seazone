/* eslint-disable @typescript-eslint/no-unused-vars */
import { Carousel, CarouselContent, CarouselItem } from "@/shared/components/ui/carousel"
import { type CarouselApi } from "@/shared/components/ui/carousel"
import Image from "next/image"

import { useEffect, useState } from "react"

type Props = {
  images: string[]
}

export const CarouselImages = ({ images }: Props) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [_, setCount] = useState(0)
 
  useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])
 
  return (
    <div className="relative">
      <Carousel setApi={setApi} className="w-full h-60 mt-[-8px] [&>div:first-child]:rounded-t-lg">
        <CarouselContent>
          {images.map((img, i) => (
            <CarouselItem key={i} className="relative h-72">
              <Image
                src={img}
                alt={`imagem ${i}`}
                fill
                className="object-cover rounded"
                sizes="100%"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
       <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-4 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-white/60"
            }`}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute bottom-[-50px] left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  )
}