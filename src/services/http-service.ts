import apiClient from "./api-clients";

class HttpService {
  // the variable is automatically set to whatever you insert into the constructor
  constructor(public endpoint: string) {}

  //T is a generic type - acts as a placeholder for a type
  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
