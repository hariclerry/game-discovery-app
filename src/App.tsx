import { Flex } from "@chakra-ui/react";
import "./App.css";
import MainContainer from "./components/Main/MainContainer";
import SideNav from "./components/Side/SideNav";
import TopNav from "./components/Top/TopNav";

function App() {
  return (
    <Flex
      align="start"
      justify="start"
      flexDir="column"
      rowGap={40}
      my={10}
      mx={4}
    >
      <TopNav />
      <Flex align="center" justify="start" gap={20}>
        <SideNav />
        <MainContainer />
      </Flex>
    </Flex>
  );
}

export default App;
