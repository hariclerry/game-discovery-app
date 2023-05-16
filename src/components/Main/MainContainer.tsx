import { Heading, HStack, SimpleGrid } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { items } from "../data";
import Cards from "./Cards";
import Dropdown from "./Dropdown";

const MainContainer = () => {
  return (
    <>
      <Heading size="2xl">Games </Heading>
      <HStack justify="space-between" gap={5} w="30%" mt={10}>
        <Dropdown
          onChange={() => console.log("clicked")}
          options={["PC", "PlayStation", "Xbox One", "iOS", "Android"]}
          placeholderText="Platforms"
        />
        <Dropdown
          onChange={() => console.log("clicked2")}
          options={["This week", "Popularity"]}
          placeholderText="Order by: Relevance"
        />
      </HStack>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        mt={8}
      >
        {items.map((item, index) => (
          <Cards
            data={item}
            count={index * 3}
            icon={<ChatIcon color="green" />}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MainContainer;
