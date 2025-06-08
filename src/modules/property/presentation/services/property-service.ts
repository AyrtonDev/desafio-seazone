import { HttpClient } from "@/data/protocols/http"
import { Property } from "@/domain/model/property-model"
import { baseUrl } from "@/infra/constants/base-url"

export const propertyService = async (httpClient: HttpClient, id: number): Promise<Property | null> => {
  try {
    const { body } = await httpClient.request({
      method: 'get',
      url: `${baseUrl}${id}`
    })

    return body.body
  } catch {
    return null
  }
}