import useGenres from "./useGenres";
import { Genre } from "../types/Genre";

const useGenreLookup = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((d) => d.id === id);
};
export default useGenreLookup;
