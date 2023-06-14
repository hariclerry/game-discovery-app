import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClients, { FetchResponse } from "../services/api-clients";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};
export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
};

const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClients
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchInputText,
          },
        })
        .then((res) => res.data),
    staleTime: 10 * 1000,
  });
};
export default useGames;
