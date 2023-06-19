import { Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAttributes from "../components/Main/GameAttributes";
import ExpandableText from "../components/common/ExpandableText";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw Error();
  return (
    <SimpleGrid spacing={6} padding="150px">
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </SimpleGrid>
  );
};

export default GameDetailPage;
