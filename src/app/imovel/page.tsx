/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { PropertyItem } from "@/domain/model/property-model";
import { makePropertyListPage } from "@/modules/property/main/factories/pages/property-list-factory";
import { makeAxiosHttpClient } from "@/modules/property/main/http";
import { useFilter } from "@/modules/property/presentation/contexts/filter-context";
import { propertyListService } from "@/modules/property/presentation/services/list-service";
import { useEffect, useState } from "react";

export default function Page() {
  const [list, setList] = useState<PropertyItem[] | null>(null)
  const { filter } = useFilter()

  useEffect(()=>{
      getPropertyList()
    },[filter])
  
  async function getPropertyList () {
    setList(null)
    const response = await propertyListService(makeAxiosHttpClient(), filter)
    setList(response)
  }
  
  return makePropertyListPage(list)
}
