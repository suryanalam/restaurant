import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { CustomProvider } from "./contexts/CustomContext";
import { CartProvider } from "react-use-cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <CustomProvider>
          <App />
        </CustomProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
