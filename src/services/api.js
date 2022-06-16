import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  //local http://192.168.1.101:3000
});

export default api;
