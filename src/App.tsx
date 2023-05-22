import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGrid from "./components/Main/GameGrid";
import SideNav from "./components/Side/SideNav";
import NavBar from "./components/NavBar/NavBar";
import { Genre } from "./hooks/useGenres";
import { Platforms } from "./hooks/usePlatforms";
import PlatformSelector from "./components/Main/PlatformSelector";
import SortSelector from "./components/Main/SortSelector";
import GameHeading from "./components/Main/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platforms | null;
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
          lg: "300px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchInputText) =>
              setGameQuery({ ...gameQuery, searchInputText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem paddingX={5} area="aside">
            <SideNav
              title="Genres"
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
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
