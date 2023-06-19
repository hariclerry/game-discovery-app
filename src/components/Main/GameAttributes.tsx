import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../../types/Game";
import DefinitionItem from "../common/DefinitionItem";
import CreditScore from "./CreditScore";

const GameAttributes = ({ game }: { game: Game }) => {
  return (
    <>
      <SimpleGrid columns={2} as="dl" pt={4}>
        <DefinitionItem
          title="Platforms"
          content={game.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        />
        <DefinitionItem
          title="Metascore"
          content={<CreditScore score={game.metacritic} />}
        />

        <DefinitionItem
          title="Genres"
          content={game.genres.map((genre) => (
            <Text key={genre.id}> {genre.name}</Text>
          ))}
        />
        <DefinitionItem
          title="Publishers"
          content={game.publishers.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        />
      </SimpleGrid>
    </>
  );
};

export default GameAttributes;
