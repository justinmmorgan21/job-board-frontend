import axios from 'axios';

const api = axios.create({
  baseURL: 
    import.meta.env.MODE === "development"
      ? "http://localhost:3000"
      : "https://group-board-api.onrender.com",
});

console.log("Axios Instance Base URL:", api.defaults.baseURL);

export default api;
