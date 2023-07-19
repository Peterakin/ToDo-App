import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-w1jvva1am7dhbpug.us.auth0.com"
        clientId="n6XyFnmvXjGYYL1cRMZ1WY4cf2eTLBx7"
        authorizationParams={{
          redirect_uri: "http://localhost:5173/app",
        }}
      >
        <Routes>
          <Route path="/app"  element={<App />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
