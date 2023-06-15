import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import useGameQuery from "../../store/store";

const Genres = () => {
  const { data, error } = useGenres();
  // Pass a selector to zustand to prevent re-render incase any changes from other component
  const selectedGenreId = useGameQuery((s) => s.gameQuery.genreId);
  const setGenreId = useGameQuery((s) => s.setGenreId);

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
                onClick={() => setGenreId(genre.id)}
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
