import axios, {isAxiosError } from 'axios'
import { IHttpClient, IRequest, IResponse } from "./HttpClient";

export default class AxiosHttpClient implements IHttpClient {
  private readonly uri: string;

  constructor(uri: string) {
    this.uri = uri;
  }

  async request({
    endpoint,
    body,
    method = 'GET'
  }: IRequest): Promise<IResponse> {
    try {
      const response = await axios.request({ baseURL: this.uri, url: endpoint, method })

      return response.data
    } catch (error) {
      if (isAxiosError(error)) {
        return {
          kind: 'Error',
          error
        }
      }

      return error as IResponse
    }
  }
};