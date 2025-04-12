// index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Changed import
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // Your main App component
import "bootstrap/dist/css/bootstrap.min.css";

// Create a root element and render the app
const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot instead of render
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
