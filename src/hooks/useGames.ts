import useCustomFetch from "./useCustomFetch";
import { Genre } from "./useGenres";

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

const useGames = (selectedGenre: Genre | null) =>
  useCustomFetch<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
export default useGames;
