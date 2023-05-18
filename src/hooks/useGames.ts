import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import userService, { Game } from "../services/game-service";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAll<Game[]>();
    request
      .then((res) => {
        setGames(res.data.slice(0, 10));
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => cancel();
  }, []);

  return { games, error, isLoading };
};
export default useGames;
