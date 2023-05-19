import { Flex, HStack, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import gameImage from "../../assets/game_unsplash.jpg";
import useGenres from "../../hooks/useGenres";

const Genres = () => {
  const { data } = useGenres();
  return (
    <Flex w="100%" justifyContent="space-between" flexDirection="column">
      {data.map((genre) => (
        <HStack key={genre.id} columnGap={2} mb={5}>
          <Image
            src={gameImage}
            alt="alternative"
            borderRadius="xl"
            boxSize="48px"
          />
          <Text fontSize="md">{genre.name}</Text>
        </HStack>
      ))}
    </Flex>
  );
};

export default Genres;
function useData(): { data: any } {
  throw new Error("Function not implemented.");
}
