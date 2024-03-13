import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UpvoteProvider } from "./context/UpvoteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UpvoteProvider>
      <App />
    </UpvoteProvider>
  </React.StrictMode>
);

reportWebVitals();
