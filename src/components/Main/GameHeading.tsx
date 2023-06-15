import { Heading } from "@chakra-ui/react";
import useGenreLookup from "../../hooks/useGenreLookup";
import usePlatformLookup from "../../hooks/usePlatformLookup";
import useGameQuery from "../../store/store";

const GameHeading = () => {
  // Pass a selector to zustand to prevent re-render incase any changes from other component
  const genreId = useGameQuery((s) => s.gameQuery.genreId);
  const genre = useGenreLookup(genreId);

  const platformId = useGameQuery((s) => s.gameQuery.platformId);
  const platform = usePlatformLookup(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
