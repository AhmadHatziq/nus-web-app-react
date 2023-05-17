import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App";

import "./style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
