import useCustomFetch from "./useCustomFetch";

export type Platforms = {
  id: number;
  name: string;
  slug: string;
};

//TODO: make platform data static like genres
const usePlatforms = () =>
  useCustomFetch<Platforms>("/platforms/lists/parents");
export default usePlatforms;
