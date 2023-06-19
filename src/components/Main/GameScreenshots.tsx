import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../../hooks/useScreenshots";

const GameScreenshots = ({ gameId }: { gameId: number }) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw Error();
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={2} mt={4}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
