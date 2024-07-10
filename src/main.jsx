import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BasketProvider } from "./context/BasketContext.jsx";

import "./styles/navbar.css";
import "./styles/app.css";
import "./styles/footer.css";
import "./styles/card.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BasketProvider>
      <App />
    </BasketProvider>
  </React.StrictMode>
);
