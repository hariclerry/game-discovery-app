import { Button, Heading, HStack, List, ListItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

const Genres = ({
  onSelectGenre,
  selectedGenreId,
}: {
  onSelectGenre: (value: Genre) => void;
  selectedGenreId?: number;
}) => {
  const { data, error } = useGenres();
  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" mb={3}>
        Genres
      </Heading>

      <List overflow="auto" height="100%">
        {data?.results.map((genre) => (
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
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
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
