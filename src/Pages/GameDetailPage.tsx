import { Box, Heading, SimpleGrid, Spinner, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAttributes from "../components/Main/GameAttributes";
import ExpandableText from "../components/common/ExpandableText";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/Main/GameTrailer";
import GameScreenshots from "../components/Main/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw Error();
  return (
    <SimpleGrid
      spacing={6}
      pt="150px"
      paddingX={6}
      columns={{ base: 1, md: 2 }}
    >
      <Box>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </Box>
      <Box>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailPage;
