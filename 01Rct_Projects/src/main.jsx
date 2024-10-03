import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/CartContext.jsx";
// import { ThemeProvider } from "./context/themecontext.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <ThemeProvider >

  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
  // </ThemeProvider>
);
