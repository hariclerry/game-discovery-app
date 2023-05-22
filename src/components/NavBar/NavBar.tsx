import { Image, Flex, HStack, Switch, Text } from "@chakra-ui/react";
import Search from "./Search";
import gameImage from "../../assets/game_unsplash.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack pl="10px">
      <Image src={gameImage} alt="logo" borderRadius="xl" boxSize="60px" />
      <Search />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
