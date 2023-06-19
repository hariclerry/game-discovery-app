import { Spinner } from "@chakra-ui/react";
import useGameTrailer from "../../hooks/useGameTrailer";

const GameTrailer = ({ gameId }: { gameId?: number }) => {
  const { data, error, isLoading } = useGameTrailer(gameId!);
  if (isLoading) return <Spinner />;

  if (error) throw Error();

  const first = data?.results[0];
  return (
    <>
      {!data?.results.length ? null : (
        <video src={first?.data[480]} poster={first?.preview} controls />
      )}
    </>
  );
};

export default GameTrailer;
