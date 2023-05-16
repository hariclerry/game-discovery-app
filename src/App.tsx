import { Flex, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import { genres } from "./components/data";
import MainContainer from "./components/Main/MainContainer";
import SideNav from "./components/Side/SideNav";
import TopNav from "./components/Top/TopNav";

function App() {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav main"`}
      gridTemplateRows={"0.5fr 5fr"}
      gridTemplateColumns={"1fr 4fr"}
      h="100%"
      // rowGap={5}
      my={10}
      mx={4}
      color="blackAlpha.800"
    >
      <GridItem pl="2" area={"header"}>
        <TopNav />
      </GridItem>
      <GridItem pl="2" area={"nav"}>
        <SideNav title="Genres" genres={genres} />
      </GridItem>
      <GridItem pl="2" area={"main"}>
        <MainContainer />
      </GridItem>
    </Grid>
  );
}

export default App;
