import {
  Image,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import getCroppedImageUrl from "../../services/image-url";
import CreditScore from "./CreditScore";
import PlatformIcons from "./PlatformIcons";

interface Props {
  game: Game;
  icon: React.ReactNode;
}

const Cards = ({ game, icon }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justifyContent="space-between" mb={3}>
          <PlatformIcons platforms={game.parent_platforms} />

          <CreditScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
      <CardFooter>{icon}</CardFooter>
    </Card>
  );
};

export default Cards;
