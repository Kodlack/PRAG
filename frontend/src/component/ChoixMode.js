import React, { useState } from "react";
import "../css/ChoixMode.css";
import HeaderMode from "../component/HeaderMode";
import CardEntrainement from "../component/CardEntrainement";
import CardInterro from "../component/CardInterro";

const ChoixMode = () => {
  const [mode, setMode] = useState("");
  const [niveau, setNiveau] = useState(0);
  const [bool, setBool] = useState(false);
  const [activeButton, setActiveButton] = useState("");

  return (
    <div className="choix-mode">
      <HeaderMode />
      <div className="content-choix-mode">
        <div className="choix-carte">
          <CardEntrainement />
          <CardInterro />
        </div>
        <button class="round-button-choix-mode">Étape suivante</button>
      </div>
    </div>
  );
};

export default ChoixMode;
