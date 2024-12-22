import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider,createHashRouter } from "react-router-dom";
import HomeUser from "../pages/Prueva.jsx";
const Router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
