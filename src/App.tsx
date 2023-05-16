import { Flex } from "@chakra-ui/react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";

function App() {
  return (
    <Flex align="start" justify="start" flexDir="column" rowGap={40}>
      <TopNav />
      <Flex align="center" justify="start" gap={20}>
        <SideNav />
        <MainContainer />
      </Flex>
    </Flex>
  );
}

export default App;
