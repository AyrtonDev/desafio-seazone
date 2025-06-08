 
'use client'

import { MobileScreen } from "@/shared/layout/mobile-screen";
import { Section, DetailTopBar, CarouselImages, InfoPrimary, Booking, InfoSecondary } from "../../components";
import { useParams } from "next/navigation";
import { Property } from "@/domain/model/property-model";
import { mockImages } from "@/modules/property/mock/images-mock";
import { Loading } from "@/shared/components/loading";

type Props = {
  property: Property | null
}

export default function PropertyPage({ property }: Props) {
  const params = useParams();
  const id = Number(params?.id);

  const images = mockImages.find(image => image.id === id)

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