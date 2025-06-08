import { HttpClient, HttpResponse } from "@/data/protocols/http";
import { PropertyItem, PropertyFilters } from "@/domain/model/property-model";
import { ok, serverError } from "@/shared/helpers";
import { Controller } from "@/shared/protpocols";
import { PropertyT } from "@/shared/types";
import { treatmentDataResponseList } from "../helpers/treatment";
import { validationFilter } from "../helpers/validation";

export class PropertiesController implements Controller {
  constructor (
    private readonly httpClient: HttpClient<PropertyT[]>,
    private readonly url: string
  ) {}
  async handle ({hasFilters, filters}:
    {hasFilters: boolean, filters: PropertyFilters}
  ): Promise<HttpResponse<PropertyItem[]>> {
    try {
      const response = await this.httpClient.request({
        method: 'get',
        url: this.url,
      });

      if (!response) return serverError(new Error("Api do not response!"));

      const data = response.body;

      if (!hasFilters) return ok(treatmentDataResponseList(data!));

      const listFiltered = data?.filter(property => validationFilter(property, filters));

      return ok(treatmentDataResponseList(listFiltered));
    } catch (error: any) {
      return serverError(error);
    }
  }
}