import PlatformIcons from "../components/Main/PlatformIcons";
import useCustomFetch from "./useCustomFetch";
import { Genre } from "./useGenres";

export type Platforms = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = () =>
  useCustomFetch<Platforms>("/platforms/lists/parents");
export default usePlatforms;
