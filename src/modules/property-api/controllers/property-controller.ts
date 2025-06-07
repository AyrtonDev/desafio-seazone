import { HttpClient, HttpResponse } from "@/data/protocols/http";
import { Property } from "@/domain/model/property-model";
import { badRequest, ok, serverError } from "@/shared/helpers";
import { Controller } from "@/shared/protpocols";
import { PropertyT } from "@/shared/types";
import { treatmentDataResponseItem } from "../helpers/treatment";

export class PropertyController implements Controller {
  constructor (
    private readonly httpClient: HttpClient<PropertyT[]>,
    private readonly url: string
  ) {}
  async handle (id: number): Promise<HttpResponse<Property>> {
    try {
      const response = await this.httpClient.request({
        method: 'get',
        url: this.url,
      })

      if (!response) return serverError(new Error("Api do not response!"))

      const data = response.body

      const propertyData = data?.find(p => p.id === id)

      if (!propertyData) return badRequest(new Error('Imovel não encontrado!'))

      const property = treatmentDataResponseItem(propertyData)

      return ok(property)
    } catch (error: any) {
      return serverError(error)
    }
  }
}