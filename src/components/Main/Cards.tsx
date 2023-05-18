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
import PlatformIcons from "./PlatformIcons";

const Cards = ({
  data,
  count,
  icon,
}: {
  data: {
    id: number;
    name: string;
    platform: string[];
  };
  count: number;
  icon: React.ReactNode;
}) => {
  return (
    <Card>
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt={data.name}
          borderRadius="lg"
        />
        <HStack
          marginY={5}
          marginX={1}
          spacing="3"
          justifyContent="space-between"
        >
          {/* <PlatformIcons data={data.platform} /> */}
          <Badge colorScheme="green" pl={1.5} pr={1.5} borderRadius="md">
            <Text fontSize="md" color="green.700">
              {" "}
              {count}
            </Text>
          </Badge>
        </HStack>
        <Heading size="lg">{data.name}</Heading>
      </CardBody>
      <CardFooter>{icon}</CardFooter>
    </Card>
  );
};

export default Cards;
