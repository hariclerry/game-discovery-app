import {
  Button,
  Heading,
  HStack,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

const Genres = ({
  onSelectGenre,
  selectedGenre,
}: {
  onSelectGenre: (value: Genre) => void;
  selectedGenre: Genre | null;
}) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" mb={3}>
        Genres
      </Heading>

      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="10px">
            <HStack key={genre.id}>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                alt="alternative"
                borderRadius={8}
                boxSize="35px"
                objectFit="cover"
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="ghost"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Genres;
