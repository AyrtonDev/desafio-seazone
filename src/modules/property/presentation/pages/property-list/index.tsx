'use client'

import { useEffect, useState } from "react";
import { MobileScreen } from "@/shared/layout/mobile-screen";
import { TopBar, Section, SkeletonList, NotFoundItem, List } from "../../components";
import { PropertyItem } from "@/domain/model/property-model";
import { propertyListService } from "../../services/list-service";
import { makeAxiosHttpClient } from "@/modules/property/main/http";
import { useFilter } from "../../contexts/filter-context";

export default function PropertyListPage({}) {
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