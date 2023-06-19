import { SimpleGrid, Spinner, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw Error();
  return (
    <SimpleGrid spacing={6} padding="150px">
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </SimpleGrid>
  );
};

export default GameDetailPage;
