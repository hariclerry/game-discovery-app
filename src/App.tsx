import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGrid from "./components/Main/GameGrid";
import SideNav from "./components/Side/SideNav";
import NavBar from "./components/NavBar/NavBar";
import { Genre } from "./hooks/useGenres";
import { Platforms } from "./hooks/usePlatforms";
import PlatformSelector from "./components/Main/PlatformSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platforms | null;
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
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem paddingX="5" area={"aside"}>
            <SideNav
              title="Genres"
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>

        <GridItem pl="2" area={"main"}>
          <HStack justify="space-between" gap={5} w="30%" mt={10}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
