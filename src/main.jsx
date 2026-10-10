import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* Styles are imported in cascade order: tokens → base → components. */
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/components.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
