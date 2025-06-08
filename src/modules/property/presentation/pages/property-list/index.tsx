import { MobileScreen } from "@/shared/layout/mobile-screen";
import { TopBar, Section, SkeletonList, NotFoundItem, List } from "../../components";
import { PropertyItem } from "@/domain/model/property-model";

type Props = {
  list: PropertyItem[] | null
}

export default function PropertyListPage({ list }: Props) {
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