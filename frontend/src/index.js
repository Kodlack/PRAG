import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./css/main.css";
import Navigation from "./component/Navigation";
import Accueil from "./component/Acceuil";
import BasPage from "./component/BasPage";
import AdminLog from "./component/AdminComponent/AdminLog";
import EspaceAdmin from "./component/AdminComponent/EspaceAdmin";
import Themes from "./component/Themes";
import Etiq from "./component/Etiq";
import Decouverte from "./component/exercices/Decouverte";
import ChoixMode from "./component/ChoixMode";
import ModeEntrainement from "./component/exercices/ModeEntrainement";
import ModeInterrogation from "./component/exercices/ModeInterrogation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "/exercice/:ide",
    element: <ModeInterrogation />,
  },
  {
    path: "/entrainement/exercice/:ide",
    element: <ModeEntrainement />,
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
  {
    path: "/etiq",
    element: <Etiq />,
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
