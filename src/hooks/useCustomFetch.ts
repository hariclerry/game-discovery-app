import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import create from "../services/http-service";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useCustomFetch = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const service = create(endpoint, requestConfig);
  useEffect(
    () => {
      setLoading(true);
      const { request, cancel } = service.getAll<FetchResponse<T>>();
      request
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
      return () => cancel();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};
export default useCustomFetch;
