import axios from 'axios';

// Set the base URL based on the environment
axios.defaults.baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://group-board-api.onrender.com";

console.log("Axios Base URL:", axios.defaults.baseURL);
