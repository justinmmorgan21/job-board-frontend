import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// axios.defaults.baseURL = import.meta.env.MODE === "development" ? "http://localhost:3000" : "https://group-board-api.onrender.com";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
