import create from "./http-service";

export interface Game {
  id: number;
  title: string;
  body: string;
}

export default create("/posts");
