import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import SignIn from "./components/login/Login";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>

  </StrictMode>
);