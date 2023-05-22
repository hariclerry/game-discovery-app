import { Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import Cards from "./Cards";
import useGames from "../../hooks/useGames";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import { Genre } from "../../hooks/useGenres";
import PlatformSelector from "./PlatformSelector";
import { Platforms } from "../../hooks/usePlatforms";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, isLoading, error } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Heading size="2xl">Games </Heading>

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 3, "2xl": 4 }}
        spacing={4}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <CardContainer key={skeleton}>
              <CardSkeleton />
            </CardContainer>
          ))}
        {data.map((game, index) => (
          <CardContainer key={game.id}>
            {" "}
            <Cards game={game} icon={<ChatIcon color="green" />} />
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
