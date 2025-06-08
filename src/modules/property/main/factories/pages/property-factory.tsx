import PropertyPage from "@/modules/property/presentation/pages/property"
import { propertyService } from "@/modules/property/presentation/services/property-service";
import { makeAxiosHttpClient } from "../../http";
import { Property } from "@/domain/model/property-model";
import { GetStaticProps } from "next";

type Params = {
  id: string
}

export const getStaticProps: GetStaticProps<any, Params> = async (context) => {
  const { id } = context.params!
  const property = await propertyService(makeAxiosHttpClient(), Number(id));
  return {
    props: {
      property,
    },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
    { params: { id: '4' } },
    { params: { id: '5' } },
  ];

  return {
    paths,
    fallback: false,
  };
}

export const makePropertyPage = (property: Property | null) => {
  return (
    <PropertyPage property={property} />
  )
}