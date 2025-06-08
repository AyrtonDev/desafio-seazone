import { PropertyItem } from "@/domain/model/property-model"
import PropertyListPage from "@/modules/property/presentation/pages/property-list"
import { propertyListService } from "@/modules/property/presentation/services/list-service";
import { makeAxiosHttpClient } from "../../http";

export async function getStaticProps() {
  const list = await propertyListService(makeAxiosHttpClient(), {});
  return {
    props: {
      list,
    },
    revalidate: 300,
  };
}

export const makePropertyListPage = (list: PropertyItem[] | null) => {
  return <PropertyListPage list={list}/>
}