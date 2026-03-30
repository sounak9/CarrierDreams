import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const submitContact = async (data) => {
  return axios.post(`${API_URL}/contact`, data);
};
