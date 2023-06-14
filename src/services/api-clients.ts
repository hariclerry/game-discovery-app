import axios, { CanceledError, AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3ca40608af054ceab20d1793507ab016",
  },
  // headers: {}
});

export { CanceledError };

class ApiClient<T> {
  // the variable is automatically set to whatever you insert into the constructor
  constructor(
    public endpoint: string,
    public requestConfig?: AxiosRequestConfig
  ) {}

  //T is a generic type - acts as a placeholder for a type
  getAll = async (config?: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      config
    );
    return res.data;
  };
}

export default ApiClient;
