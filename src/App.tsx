import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGrid from "./components/Main/GameGrid";
import SideNav from "./components/Side/SideNav";
import NavBar from "./components/NavBar/NavBar";
import { Genre } from "./hooks/useGenres";
import { Platforms } from "./hooks/usePlatforms";

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platforms | null>(
    null
  );
  const [selectGenre, setSelectGenre] = useState<Genre | null>(null);

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
              onSelectGenre={(genre) => setSelectGenre(genre)}
              selectedGenre={selectGenre}
            />
          </GridItem>
        </Show>

        <GridItem pl="2" area={"main"}>
          <GameGrid
            selected={"selected"}
            onChange={() => console.log()}
            selectedGenre={selectGenre}
            selectedPlatform={selectedPlatform}
            onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
