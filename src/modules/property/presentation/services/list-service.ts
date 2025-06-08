import { HttpClient } from "@/data/protocols/http";
import { PropertyFilters, PropertyItem } from "@/domain/model/property-model";
import { baseUrl } from "@/infra/constants/base-url";

export const propertyListService = async (httpClient: HttpClient, filters: PropertyFilters): Promise<PropertyItem[]> => {
  try {
    const { body } = await httpClient.request({
      method: 'post',
      body: filters,
      url: baseUrl
    })

    console.log(filters)

    return body.body
  } catch {
    return []
  }
}