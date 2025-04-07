// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//     ,
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import { createRoot } from "react-dom/client"; // Note the new import here
// import App from "./App";
// import "./index.css";

// const container = document.getElementById("root");
// const root = createRoot(container); // Use createRoot instead of render
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

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
