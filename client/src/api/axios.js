import axios from "axios";

const api = axios.create({
  baseURL: "/api",       // usa el proxy de Vite
  withCredentials: true   // habilita cookies (refresh token httpOnly)
});

export default api;

