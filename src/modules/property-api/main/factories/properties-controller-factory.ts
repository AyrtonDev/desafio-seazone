import { AxiosHttpClient } from "@/infra/http"
import { PropertiesController } from "@/modules/property-api/controllers/properties-controller"
import { Controller } from "@/shared/protpocols"

export const makePropertiesController = (): Controller => {
  const url = process.env.NEXT_PUBLIC_URL_API
  const httpClient = new AxiosHttpClient()
  return new PropertiesController(httpClient, url as string)
}