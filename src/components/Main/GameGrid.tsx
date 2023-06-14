import {
  Button,
  Icon,
  Flex,
  SimpleGrid,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import Cards from "./Cards";
import useGames from "../../hooks/useGames";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import { GameQuery } from "../../App";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
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
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <CardContainer key={game.id}>
                {" "}
                <Cards game={game} />
              </CardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Tooltip label="Load more games">
        <Flex mt={8} mb={8} justifyContent="center">
          <Button
            disabled={!hasNextPage}
            borderRadius="50%"
            padding={8}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? (
              "Loading..."
            ) : (
              <Icon as={AddIcon} color="purple.500" boxSize={6} />
            )}
          </Button>
        </Flex>
      </Tooltip>
    </>
  );
};

export default GameGrid;
