import useCustomFetch from "./useCustomFetch";

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => useCustomFetch<Genre>("/genres");

export default useGenres;
