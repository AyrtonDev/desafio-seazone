'use client'

import { useEffect, useState } from "react";
import { MobileScreen } from "@/shared/layout/mobile-screen";
import { TopBar, Section, SkeletonList, NotFoundItem, List } from "../../components";
import { PropertyItem } from "@/domain/model/property-model";
import { propertyListService } from "../../services/list-service";
import { makeAxiosHttpClient } from "@/modules/property/main/http";

// type Props = {}

export default function PropertyListPage({}) {
  const [list, setList] = useState<PropertyItem[] | null>(null)

  useEffect(()=>{
    getPropertyList()
  },[])

  async function getPropertyList () {
    const response = await propertyListService(makeAxiosHttpClient(), {})

    setList(response)
  }

  return (
    <MobileScreen>
      <TopBar/>
      <Section>
        {!list && <SkeletonList/>}
        {list?.length === 0 && <NotFoundItem/>}
        {list && <List data={list} />}
      </Section>
    </MobileScreen>
  )
}