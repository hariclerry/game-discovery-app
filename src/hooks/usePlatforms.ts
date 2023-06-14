import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ApiClient from "../services/api-clients";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms,
  });
};

//fetching static data from platforms mock data to avoid making request to the api
// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });
export default usePlatforms;
