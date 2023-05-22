import { Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { items } from "../data";
import Cards from "./Cards";
import Dropdown from "./Dropdown";
import { Game } from "../../hooks/useGames";
import useGames from "../../hooks/useGames";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import { Genre } from "../../hooks/useGenres";

const GameGrid = ({
  selected,
  onChange,
  selectedGenre,
}: {
  selected?: string;
  onChange: (selected: string) => void;
  selectedGenre: Genre | null;
}) => {
  const { data, isLoading, error } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {
        // error && <Text>{error} </Text>
      }
      <Heading size="2xl">Games </Heading>
      {/* <HStack justify="space-between" gap={5} w="30%" mt={10}>
        <Dropdown
          onChange={onChange}
          options={["PC", "PlayStation", "Xbox", "iOS", "Android"]}
          placeholderText="Platforms"
        />
        <Dropdown
          onChange={() => console.log("clicked2")}
          options={["This week", "Popularity"]}
          placeholderText="Order by: Relevance"
        />
      </HStack> */}
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
          <CardContainer>
            {" "}
            <Cards
              key={game.id}
              game={game}
              icon={<ChatIcon color="green" />}
            />
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
