// index.js
import React from "react";
import ReactDOM from "react-dom"; // Changed import
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // Main ain App component
import reportwebVitals from "./reportWebVitals"; // Web Vitals
import "./index.css"; // Global CSS
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>    
      <App />    
  </React.StrictMode>,
  document.getElementById("root") // Root element in index.html
);
reportwebVitals(); // Report web vitals
  

