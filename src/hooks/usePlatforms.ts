import PlatformIcons from "../components/Main/PlatformIcons";
import useCustomFetch from "./useCustomFetch";
import { Genre } from "./useGenres";

export type Platforms = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = () =>
  useCustomFetch<Platforms>(
    "/platforms/lists/parents"
    // { params: { genres: selectedGenre?.id } },
    // [selectedGenre?.id]
  );
export default usePlatforms;