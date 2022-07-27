import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./Views/App";
import EliminationRequest from "./Views/EliminationRequest";

import "./css/normalize.css";
import "./css/styles.css";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/elimination-info" element={<App />} />
        <Route path="/elimination-request" element={<EliminationRequest />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
