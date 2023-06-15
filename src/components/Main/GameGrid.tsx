import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../../hooks/useGames";
import CardContainer from "./CardContainer";
import CardSkeleton from "./CardSkeleton";
import Cards from "./Cards";

const GameGrid = () => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<Spinner />}
        endMessage={<p>No more data to load.</p>}
      >
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
      </InfiniteScroll>
      {/* <Tooltip label="Load more games">
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
      </Tooltip> */}
    </>
  );
};

export default GameGrid;
