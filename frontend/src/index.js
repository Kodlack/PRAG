import React from "react";
import ReactDOM from "react-dom/client";
import Exercice from "./component/exercices/Exercices";
import Navigation from "./component/Navigation";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Accueil from "./component/Acceuil";
import AdminLog from "./component/AdminComponent/AdminLog";
import EspaceAdmin from "./component/AdminComponent/EspaceAdmin";
import Themes from "./component/Themes";
import BasPage from "./component/BasPage";
import "./css/main.css";
import Decouverte from "./component/exercices/Decouverte";
import Modes from "./component/Modes";
import ChoixMode from "./component/ChoixMode";

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
    path: "/decouverte",
    element: <Decouverte />,
  },
  {
    path: "/categorie",
    element: <Themes />,
  },
  {
    path: "/notions",
    element: <ChoixMode />,
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
