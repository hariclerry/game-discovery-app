import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGrid from "./components/Main/GameGrid";
import SideNav from "./components/Side/SideNav";
import useGames from "./hooks/useGames";
import NavBar from "./components/NavBar/NavBar";
import { Genre } from "./hooks/useGenres";

function App() {
  // const { isLoading } = useGames();

  const [selected, setSelected] = useState("Platforms");
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
            />
          </GridItem>
        </Show>

        <GridItem pl="2" area={"main"}>
          <GameGrid
            selected={selected}
            onChange={setSelected}
            selectedGenre={selectGenre}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
