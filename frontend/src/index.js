import React from "react";
import ReactDOM from "react-dom/client";
import Exercice from "./component/Exercices";
import Navigation from "./component/Navigation";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Accueil from "./component/Acceuil";
import AdminLog from "./component/AdminLog";
import EspaceAdmin from "./component/EspaceAdmin";
import Exoqcm from "./component/Exoqcm";
import Themes from "./component/Themes";
import BasPage from "./component/BasPage";
import "./css/main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "/exercice/:ide",
    element: <Exercice />,
  },
  {
    path: "/adminlog",
    element: <AdminLog />,
  },
  {
    path: "/admin",
    element: <EspaceAdmin />,
  },
  {
    path: "/themes",
    element: <Themes />,
  },
  {
    path: "/exoqcm",
    element: <Exoqcm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navigation />
    <RouterProvider router={router} />
    <BasPage />
  </React.StrictMode>
);

reportWebVitals();
