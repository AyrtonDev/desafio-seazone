/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { Property } from "@/domain/model/property-model";
import { makePropertyPage } from "@/modules/property/main/factories/pages/property-factory";
import { makeAxiosHttpClient } from "@/modules/property/main/http";
import { propertyService } from "@/modules/property/presentation/services/property-service";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const params = useParams();
  const id = Number(params?.id);
  const [property, setProperty] = useState<Property | null>(null)
    
  useEffect(()=> {
    GetProperty()
  },[])
  
  async function GetProperty() {
    const response = await propertyService(makeAxiosHttpClient(), id)

    setProperty(response)
  }

  return makePropertyPage(property)
}