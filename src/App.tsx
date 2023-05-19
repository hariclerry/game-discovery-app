import { CircularProgress, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import { genres, items } from "./components/data";
import GameGrid from "./components/Main/GameGrid";
import SideNav from "./components/Side/SideNav";
import useGames from "./hooks/useGames";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const { isLoading } = useGames();

  const [selected, setSelected] = useState("Platforms");
  const filteredItems = () => {
    if (selected === "Platforms") return items;
    return items
      .map((item) => {
        const platform = selected && item.platform.includes(selected);
        return platform ? item : null;
      })
      .filter((item) => item !== null);
  };
  const filtered = filteredItems();

  return (
    <>
      {isLoading && <CircularProgress value={30} size="120px" />}
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
            <SideNav title="Genres" genres={genres} />
          </GridItem>
        </Show>

        <GridItem pl="2" area={"main"}>
          <GameGrid selected={selected} onChange={setSelected} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
