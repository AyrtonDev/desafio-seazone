import { HttpClient, HttpRequest, HttpResponse } from "@/data/protocols/http";
import axios, { AxiosResponse } from "axios";

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      })
    } catch (error: any) {
      axiosResponse = error.response || {
        status: 500,
        data: {
          error: 'Unexpected error'
        }
      } as AxiosResponse;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse?.data || {}
    }
  }
}