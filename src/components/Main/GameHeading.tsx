import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";
import useGenreLookup from "../../hooks/useGenreLookup";
import usePlatformLookup from "../../hooks/usePlatformLookup";

const GameHeading = ({ gameQuery }: { gameQuery: GameQuery }) => {
  const genre = useGenreLookup(gameQuery.genreId);
  const platform = usePlatformLookup(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
