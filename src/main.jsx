import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CustContextProvider from "./context/CustomerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CustContextProvider>
    <App />
  </CustContextProvider>
);
