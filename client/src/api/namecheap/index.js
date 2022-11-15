import axios from "axios";

export const namecheapApi = axios.create({
  baseURL: "http://localhost:5000",
});
