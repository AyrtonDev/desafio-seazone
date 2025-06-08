'use client'

import { MobileScreen } from "@/shared/layout/mobile-screen";
import { Section, DetailTopBar, CarouselImages, InfoPrimary, Booking, InfoSecondary } from "../../components";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { makeAxiosHttpClient } from "@/modules/property/main/http";
import { propertyService } from "../../services/property-service";
import { Property } from "@/domain/model/property-model";
import { mockImages } from "@/modules/property/mock/images-mock";
import { Loading } from "@/shared/components/loading";

export default function PropertyPage({}) {
  const params = useParams();
  const id = Number(params?.id);

  const images = mockImages.find(image => image.id === id)
  const [property, setProperty] = useState<Property | null>(null)
  
  useEffect(()=> {
    GetProperty()
  },[])
  
  async function GetProperty() {
    const response = await propertyService(makeAxiosHttpClient(), id)

    setProperty(response)
  }

  return (
    <MobileScreen>
      <DetailTopBar/>
      {!property &&
        <Loading />
      }
      {property && 
        <Section>
          <CarouselImages images={images!.images}/>
          <InfoPrimary property={property}/>
          <InfoSecondary property={property}/>
          <Booking property={property}/>
        </Section>
      }
    </MobileScreen>
  )
}