import { GameQuery } from "../App";
import useCustomFetch from "./useCustomFetch";

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
};

const useGames = (gameQuery: GameQuery) =>
  useCustomFetch<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchInputText,
      },
    },
    [gameQuery]
  );
export default useGames;
