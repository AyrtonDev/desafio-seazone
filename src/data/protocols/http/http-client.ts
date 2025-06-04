export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  forbidden = 403,
  notFound = 404,
  existed = 409,
  serverError = 500
}

export type HttpMethod = 'post' | 'get' | 'delete' | 'put'

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
}
export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>;
}