import { Flex, Heading } from "@chakra-ui/react";
import Genres from "./Genres";

const SideNav = ({
  title,
  genres,
}: {
  title: string;
  genres: { id: number; name: string }[];
}) => {
  return (
    <Flex justify="space-between" gap={5} w="100%" flexDirection="column">
      <Heading size="xl">{title}</Heading>
      <Genres />
    </Flex>
  );
};

export default SideNav;
