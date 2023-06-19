import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ApiClient from "../services/api-clients";
import ms from "ms";
import { Genre } from "../types/Genre";

const apiClient = new ApiClient<Genre>("/genres");
const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24 hours
    initialData: genres,
  });
};
//fetching static data from genres mock data to avoid making request to the api
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
