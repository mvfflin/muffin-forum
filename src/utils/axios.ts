import axios from "axios";

const api = import.meta.env.VITE_API;

export const axiosInstance = axios.create({
  baseURL: api,
});
