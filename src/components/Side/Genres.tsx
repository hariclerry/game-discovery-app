import { Button, HStack, List, ListItem, Spinner } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

const Genres = ({
  onSelectGenre,
}: {
  onSelectGenre: (value: Genre) => void;
}) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  return (
    <>
      {" "}
      {isLoading && <Spinner />}
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
              <Button onClick={() => onSelectGenre(genre)} fontSize="lg">
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
