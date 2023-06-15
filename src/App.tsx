import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import GameGrid from "./components/Main/GameGrid";
import GameHeading from "./components/Main/GameHeading";
import PlatformSelector from "./components/Main/PlatformSelector";
import SortSelector from "./components/Main/SortSelector";
import NavBar from "./components/NavBar/NavBar";
import Genres from "./components/Side/Genres";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem
          area="nav"
          position="fixed"
          backdropFilter="saturate(180%) blur(20px)"
          zIndex={3}
          w="100%"
        >
          <NavBar />
        </GridItem>
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
}

export default App;
