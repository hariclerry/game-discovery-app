import { Genre } from "./Genre";
import { Platform } from "./Platform";

type publisher = {
  id: number;
  name: string;
};

export type GameTrailerType = {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
};

export type Screenshot = {
  id: number;
  image: string;
  width: number;
  height: number;
};
export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  slug: string;
  description_raw: string;
  publishers: publisher[];
  genres: Genre[];
};
