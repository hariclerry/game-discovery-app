import { Flex, Heading } from "@chakra-ui/react";
import { Genre } from "../../hooks/useGenres";
import Genres from "./Genres";

const SideNav = ({
  title,
  onSelectGenre,
}: {
  title: string;
  onSelectGenre: (value: Genre) => void;
}) => {
  return (
    <Flex justify="space-between" gap={5} w="100%" flexDirection="column">
      <Heading size="xl">{title}</Heading>
      <Genres onSelectGenre={onSelectGenre} />
    </Flex>
  );
};

export default SideNav;
