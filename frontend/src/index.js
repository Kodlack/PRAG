import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import Exercice from "./component/Exercices";
import Navigation from "./component/Navigation";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Accueil from "./component/Acceuil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "/exercices",
    element: <Exercice />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navigation />
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
