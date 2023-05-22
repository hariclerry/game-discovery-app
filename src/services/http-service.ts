import { AxiosRequestConfig } from "axios";
import apiClient from "./api-clients";

class HttpService {
  // the variable is automatically set to whatever you insert into the constructor
  constructor(
    public endpoint: string,
    public requestConfig?: AxiosRequestConfig
  ) {}

  //T is a generic type - acts as a placeholder for a type
  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T>(this.endpoint, {
      signal: controller.signal,
      ...this.requestConfig,
    });
    return { request, cancel: () => controller.abort() };
  }
}

const create = (endpoint: string, requestConfig?: AxiosRequestConfig) =>
  new HttpService(endpoint, requestConfig);

export default create;
