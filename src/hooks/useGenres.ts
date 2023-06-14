import { useQuery } from "@tanstack/react-query";
import { genres } from "../data/genres";
import apiClients, { FetchResponse } from "../services/api-clients";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClients.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.length, results: genres },
  });
};
//fetching static data from genres mock data to avoid making request to the api
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
