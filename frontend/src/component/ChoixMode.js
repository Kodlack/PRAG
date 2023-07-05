import React, { useState } from "react";
import "../css/ChoixMode.css";
import HeaderMode from "../component/HeaderMode";
import CardEntrainement from "../component/CardEntrainement";
import CardInterro from "../component/CardInterro";
import axios from "axios";
import Etiq from "./Etiq";
import Themes from "./Themes";

const ChoixMode = () => {
  const [activeButton, setActiveButton] = useState("");
  const [exos, setExos] = useState([]);
  const [niveau, setNiveau] = useState(0);
  const [mode, setMode] = useState("");
  const [bool, setBool] = useState(false);
  const [choix, setChoix] = useState(false);

  function getExo() {
    let param = { level: 0 };
    if (activeButton[0] == "f") {
      param.level = 1;
    } else if (activeButton[0] == "m") {
      param.level = 2;
    } else if (activeButton[0] == "d") {
      param.level = 3;
    }
    setNiveau(param.level);
    axios
      .post("http://localhost:3000/exos", param)
      .then((res) => {
        setExos(res.data);
        console.log(exos);
        setChoix(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getMode() {
    if (activeButton[1] == "i") {
      setMode("interrogation");
    } else if (activeButton[1] == "e") {
      setMode("entrainement");
    }
  }

  return (
    <div>
      {!bool ? (
        <div className="choix-mode">
          <HeaderMode />
          <div className="content-choix-mode">
            <div className="choix-carte">
              <CardEntrainement
                activeButton={activeButton}
                setActiveButton={setActiveButton}
                setNiveau={setNiveau}
                getExo={getExo}
              />
              <CardInterro
                activeButton={activeButton}
                setActiveButton={setActiveButton}
                setNiveau={setNiveau}
                niveau={niveau}
                getExo={getExo}
              />
            </div>
            <button
              class="round-button-choix-mode"
              onClick={() => {
                getExo();
                getMode();
                setBool(true);
              }}
            >
              Étape suivante
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {choix ? (
        <Etiq mode={mode} niveau={niveau} exos={exos} choix={choix} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ChoixMode;
