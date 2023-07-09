import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from "./App";
import { SocketProvider } from "./context/SocketProvider";
import { UserProvider } from "./context/UserProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SocketProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </SocketProvider>
    </BrowserRouter>
  </React.StrictMode>
);
