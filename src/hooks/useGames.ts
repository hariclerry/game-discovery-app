import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import ApiClient, { FetchResponse } from "../services/api-clients";
import { Platform } from "./usePlatforms";

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
};

interface GQuery {
  //   page: number;
  pageSize: number;
}

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchInputText,
          page: pageParam,
        },
      }),
    keepPreviousData: true, // helps with page jump while paginating
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 10 * 1000,
  });
};
export default useGames;
