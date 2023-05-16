import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import gameImage from "../../assets/game_unsplash.jpg";

const Genres = ({ genres }: { genres: { id: number; name: string }[] }) => {
  return (
    <Flex w="100%" justifyContent="space-between" flexDirection="column">
      {genres.map((genre) => (
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
