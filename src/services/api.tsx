import axios from "axios";

export const api = axios.create({
  baseURL: "https://login2-0-servidor.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});