import axios from "axios";

const api = axios.create({
  baseURL: "https:/sagitarius-bank.herokuapp.com",
});

export default api;
