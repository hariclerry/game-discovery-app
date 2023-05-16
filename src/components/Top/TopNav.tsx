import { Image, Flex, HStack, Switch, Text } from "@chakra-ui/react";
import Search from "./Search";
import gameImage from "../../assets/game_unsplash.jpg";

const TopNav = () => {
  return (
    <Flex align="center" justify="space-between" gap={10} w="100%">
      <Image
        src={gameImage}
        alt="Dan Abramov"
        borderRadius="xl"
        boxSize="48px"
      />
      <Search />
      <HStack>
        <Switch colorScheme="teal" size="md" />
        <Text fontSize="xs">Dark Mode</Text>
      </HStack>
    </Flex>
  );
};

export default TopNav;
