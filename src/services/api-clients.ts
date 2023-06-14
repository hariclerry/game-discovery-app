import axios, { CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3ca40608af054ceab20d1793507ab016",
  },
  // headers: {}
});

export { CanceledError };
