import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../../types/Game";
import getCroppedImageUrl from "../../services/image-url";
import CreditScore from "./CreditScore";
import Emoji from "./Emoji";
import PlatformIcons from "./PlatformIcons";

interface Props {
  game: Game;
}

const Cards = ({ game }: Props) => {
  return (
    <Link to={`/games/${game.slug}`}>
      <Card>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
        />
        <CardBody>
          <HStack justifyContent="space-between" mb={3}>
            <PlatformIcons platforms={game.parent_platforms} />

            <CreditScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
          <Emoji rating={game.rating_top} />
        </CardBody>
      </Card>
    </Link>
  );
};

export default Cards;
