import {
  Avatar,
  Box,
  Flex,
  Heading,
  Stack,
  Switch,
  WrapItem,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Search from "./Search";

const TopNav = () => {
  return (
    <Flex align="center" justify="space-between" gap={10} w="100%">
      <WrapItem>
        <Avatar name="Harriet Ayugi" src="https://bit.ly/harriet" size="lg" />
      </WrapItem>
      <Search />
      <Switch colorScheme="teal" size="md" />
    </Flex>
  );
};

export default TopNav;
