import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGrid from "./components/Main/GameGrid";
import GameHeading from "./components/Main/GameHeading";
import PlatformSelector from "./components/Main/PlatformSelector";
import SortSelector from "./components/Main/SortSelector";
import NavBar from "./components/NavBar/NavBar";
import SideNav from "./components/Side/SideNav";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
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
              onSelectGenre={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
              selectedGenreId={gameQuery.genreId}
            />
          </GridItem>
        </Show>

        <GridItem area="main" mt="150">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={5} mt={8}>
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatformId={gameQuery.platformId}
                  onSelectedPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platformId: platform.id })
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
