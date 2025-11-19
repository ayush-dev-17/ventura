import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { IPOProvider } from "./context/IpoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IPOProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IPOProvider>
  </React.StrictMode>
);
