import axios from "axios";

const api = axios.create({
  baseURL: process.env.BACK_URL || "https:/sagitarius-bank.herokuapp.com",
});

export default api;
