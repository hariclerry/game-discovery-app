import create from "./http-service";

export type Game = {
  id: number;
  name: string;
};
export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export default create("/posts");
