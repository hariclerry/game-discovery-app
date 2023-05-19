import {
  Image,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Badge,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Game } from "../../services/game-service";
import getCroppedImageUrl from "../../services/image-url";
import CreditScore from "./CreditScore";
import PlatformIcons from "./PlatformIcons";

interface Props {
  game: Game;
  icon: React.ReactNode;
}

const Cards = ({ game, icon }: Props) => {
  return (
    <Card width="400px" borderRadius="lg" overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justifyContent="space-between">
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
