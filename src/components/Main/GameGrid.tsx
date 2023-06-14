import { SimpleGrid, Text } from "@chakra-ui/react";
import Cards from "./Cards";
import useGames from "../../hooks/useGames";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, isLoading, error } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 2, xl: 3, "2xl": 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <CardContainer key={skeleton}>
            <CardSkeleton />
          </CardContainer>
        ))}
      {data?.results.map((game, index) => (
        <CardContainer key={game.id}>
          {" "}
          <Cards game={game} />
        </CardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
