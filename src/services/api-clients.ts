import axios, { CanceledError } from "axios";

export default axios.create({
  // baseURL: "https://api.rawg.io/api",
  baseURL: "https://jsonplaceholder.typicode.com",
  // params: {
  //   key: "3ca40608af054ceab20d1793507ab016",
  // },
  // headers: {}
});

export { CanceledError };
