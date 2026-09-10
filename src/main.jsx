import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SettingsStorage } from "./Context/SettingsContext.jsx";
import { FetchStorage } from "./Context/FetchContext.jsx";

createRoot(document.getElementById("root")).render(
  <SettingsStorage>
    <FetchStorage>
      <StrictMode>
        <App />
      </StrictMode>
    </FetchStorage>
  </SettingsStorage>,
);
