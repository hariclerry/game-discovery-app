import { useQuery } from "@tanstack/react-query";
import { platforms } from "../data/platforms";
import apiClients from "../services/api-clients";

export type Platforms = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClients
        .get<Platforms[]>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms,
  });
};

//fetching static data from platforms mock data to avoid making request to the api
// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });
export default usePlatforms;
