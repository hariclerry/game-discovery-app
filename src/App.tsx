import { CircularProgress, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import { genres, items } from "./components/data";
import MainContainer from "./components/Main/MainContainer";
import SideNav from "./components/Side/SideNav";
import useGames from "./hooks/useGames";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const { games, isLoading } = useGames();

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
        gridTemplateRows={"0.5fr 5fr"}
        gridTemplateColumns={"1fr 4fr"}
        h="100%"
        // rowGap={5}
        my={10}
        mx={4}
        color="blackAlpha.800"
      >
        <GridItem pl="2" area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem pl="2" area={"aside"}>
            <SideNav title="Genres" genres={genres} />
          </GridItem>
        </Show>

        <GridItem pl="2" area={"main"}>
          <MainContainer
            games={filtered!}
            selected={selected}
            onChange={setSelected}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
