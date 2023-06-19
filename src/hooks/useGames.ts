import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient, { FetchResponse } from "../services/api-clients";
import useGameQuery from "../store/store";
import { Game } from "../types/Game";

const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQuery((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    keepPreviousData: true, // helps with page jump while paginating
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"), // 24 hours
  });
};
export default useGames;
