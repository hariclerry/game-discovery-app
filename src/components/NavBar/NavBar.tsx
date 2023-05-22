import { Image, Flex, HStack, Switch, Text } from "@chakra-ui/react";
import Search from "./Search";
import gameImage from "../../assets/game_unsplash.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = ({
  onSearch,
}: {
  onSearch: (searchInputText: string) => void;
}) => {
  return (
    <HStack padding="30px 20px 50px 20px">
      <Image
        src={gameImage}
        alt="logo"
        borderRadius="xl"
        boxSize="60px"
        objectFit="cover"
      />
      <Search onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
