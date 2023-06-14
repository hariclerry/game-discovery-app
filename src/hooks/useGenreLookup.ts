import useGenres, { Genre } from "./useGenres";

const useGenreLookup = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((d) => d.id === id);
};
export default useGenreLookup;
