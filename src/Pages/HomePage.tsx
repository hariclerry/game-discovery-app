import { Grid, GridItem, Flex, Box, Show } from "@chakra-ui/react";
import GameGrid from "../components/Main/GameGrid";
import GameHeading from "../components/Main/GameHeading";
import PlatformSelector from "../components/Main/PlatformSelector";
import SortSelector from "../components/Main/SortSelector";
import Genres from "../components/Side/Genres";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem
            paddingX={5}
            area="aside"
            mt="150"
            position="fixed"
            height="100%"
          >
            <Genres />
          </GridItem>
        </Show>

        <GridItem area="main" mt="150">
          <Box paddingLeft={2}>
            <GameHeading />
            <Flex marginBottom={5} mt={8}>
              <Box marginRight={5}>
                <PlatformSelector />
              </Box>
              <SortSelector />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
