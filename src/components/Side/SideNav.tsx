import { Flex, Heading } from "@chakra-ui/react";
import { Genre } from "../../hooks/useGenres";
import Genres from "./Genres";

const SideNav = ({
  onSelectGenre,
  selectedGenre,
}: {
  onSelectGenre: (value: Genre) => void;
  selectedGenre: Genre | null;
}) => {
  return <Genres onSelectGenre={onSelectGenre} selectedGenre={selectedGenre} />;
};

export default SideNav;
