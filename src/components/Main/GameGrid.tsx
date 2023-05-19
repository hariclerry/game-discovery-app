import { Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { items } from "../data";
import Cards from "./Cards";
import Dropdown from "./Dropdown";
import { Game } from "../../services/game-service";
import useGames from "../../hooks/useGames";

const GameGrid = ({
  selected,
  onChange,
}: {
  selected?: string;
  onChange: (selected: string) => void;
}) => {
  const { games, isLoading, error } = useGames();
  // console.log("herregamesss-----", games);
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
        spacing={10}
        padding="10px"
      >
        {games.map((game, index) => (
          <Cards key={game.id} game={game} icon={<ChatIcon color="green" />} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
