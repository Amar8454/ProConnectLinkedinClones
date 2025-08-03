import axios from "axios";
export const BASE_URL = " https://proconnectlinkedinclones.onrender.com";

export const clientServer = axios.create({
  baseURL: BASE_URL,
});
