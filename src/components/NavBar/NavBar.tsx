import { Flex, GridItem, HStack, Image } from "@chakra-ui/react";
import gameImage from "../../assets/game_unsplash.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";

const NavBar = () => {
  return (
    <HStack
      padding="30px 20px 10px 20px"
      position="fixed"
      backdropFilter="saturate(180%) blur(20px)"
      zIndex={3}
      w="100%"
    >
      <Image
        src={gameImage}
        alt="logo"
        borderRadius="xl"
        boxSize="60px"
        objectFit="cover"
      />
      <Search />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
