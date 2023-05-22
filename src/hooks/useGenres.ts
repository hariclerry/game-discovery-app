import { genres } from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//fetching static data from genres mock data to avoid making request to the api
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
