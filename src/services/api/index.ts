import axios from "axios";
import { BASE_URL } from "./api.constant";
const API_HEADER = {
  "x-api-key": "your-access-token",
};

/**
 * ? USAGE:
 *
 * import { fetchExample } from "api"
 *
 * fetchExample()
 * .then((res) => {
 *   // Your Magic is here
 * })
 * .catch((err) => {
 *   // Handle your API error
 *   console.error("Fetch Example Error: ", err);
 * });
 *
 */

export const fetchExample = () =>
  new Promise((resolve, reject) => {
    const url = BASE_URL + "your-url";
    axios
      .get(url, {
        headers: API_HEADER,
      })
      .then((res) => {
        res && resolve(res.data);
      })
      .catch((error) => {
        // handle error
        reject(error);
        console.log(error);
      });
  });
