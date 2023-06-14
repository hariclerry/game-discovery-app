import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGrid from "./components/Main/GameGrid";
import SideNav from "./components/Side/SideNav";
import NavBar from "./components/NavBar/NavBar";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import PlatformSelector from "./components/Main/PlatformSelector";
import SortSelector from "./components/Main/SortSelector";
import GameHeading from "./components/Main/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchInputText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
          <NavBar
            onSearch={(searchInputText) =>
              setGameQuery({ ...gameQuery, searchInputText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem
            paddingX={5}
            area="aside"
            mt="150"
            position="fixed"
            height="100%"
          >
            <SideNav
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>

        <GridItem area="main" mt="150">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={5} mt={8}>
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectedPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                />
              </Box>
              <SortSelector
                onSelectedSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
                sortOrder={gameQuery.sortOrder}
              />
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
