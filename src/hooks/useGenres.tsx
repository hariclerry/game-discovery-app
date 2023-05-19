import useCustomFetch from "./useCustomFetch";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useCustomFetch<Genre>("/genres");

export default useGenres;
