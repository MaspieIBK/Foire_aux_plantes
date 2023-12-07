import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/app.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/advert.css";
import "./styles/card.css";
import "./styles/backoffice.css";
import "./styles/register.css";
import "./styles/login.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
