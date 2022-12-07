import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FluentProvider, teamsDarkTheme } from "@fluentui/react-components";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FluentProvider theme={teamsDarkTheme}>
      <RouterProvider router={router}></RouterProvider>
    </FluentProvider>
  </React.StrictMode>
);
