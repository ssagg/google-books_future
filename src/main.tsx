import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.scss";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider withNormalizeCSS>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
