import { Image, Flex, HStack, Switch, Text } from "@chakra-ui/react";
import Search from "./Search";
import gameImage from "../../assets/game_unsplash.jpg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={gameImage} alt="logo" borderRadius="xl" boxSize="60px" />
      <Search />
      <HStack>
        <Switch colorScheme="teal" size="md" />
        <Text fontSize="xs">Dark Mode</Text>
      </HStack>
    </HStack>
  );
};

export default NavBar;
