import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Home.jsx";
import User from "./User.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <User />
  </StrictMode>
);
