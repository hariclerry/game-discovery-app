import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-clients";
import { GameTrailerType } from "../types/Game";

const useGameTrailer = (id: number) => {
  const apiClient = new ApiClient<GameTrailerType>(`/games/${id}/movies`);
  return useQuery({
    queryKey: ["trailers", id],
    queryFn: apiClient.getAll,
  });
};
export default useGameTrailer;
