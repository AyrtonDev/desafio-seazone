import { AxiosHttpClient } from "@/infra/http"
import { PropertyController } from "@/modules/property-api/controllers/property-controller"
import { Controller } from "@/shared/protpocols"

export const makePropertyController = (): Controller => {
  const url = process.env.NEXT_PUBLIC_URL_API
  const httpClient = new AxiosHttpClient()
  return new PropertyController(httpClient, url as string)
}