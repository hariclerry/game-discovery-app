import { Flex, HStack, List, ListItem, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

const Genres = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="10px">
          <HStack key={genre.id}>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              alt="alternative"
              borderRadius={8}
              boxSize="35px"
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default Genres;
function useData(): { data: any } {
  throw new Error("Function not implemented.");
}
