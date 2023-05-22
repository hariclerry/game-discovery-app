import { Flex, Heading } from "@chakra-ui/react";
import { Genre } from "../../hooks/useGenres";
import Genres from "./Genres";

const SideNav = ({
  title,
  onSelectGenre,
  selectedGenre,
}: {
  title: string;
  onSelectGenre: (value: Genre) => void;
  selectedGenre: Genre | null;
}) => {
  return (
    <Flex justify="space-between" gap={5} w="100%" flexDirection="column">
      <Heading size="xl">{title}</Heading>
      <Genres onSelectGenre={onSelectGenre} selectedGenre={selectedGenre} />
    </Flex>
  );
};

export default SideNav;
