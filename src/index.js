import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./services/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Suspense fallback="Loading...">
    <App />
  </React.Suspense>
);

reportWebVitals();
