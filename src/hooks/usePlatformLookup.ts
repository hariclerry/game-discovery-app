import usePlatforms from "./usePlatforms";

const usePlatformLookup = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((d) => d.id === id);
};
export default usePlatformLookup;
