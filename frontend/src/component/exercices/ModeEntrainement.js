import { Button } from "@mui/material";
import "../../css/background.css";
import "../../css/Themes.css";
import "../../css/Etiq.css";
import "../../css/exercices.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Infobulle from "./Infobulle";
import TexteTrous from "./TexteTrous";
import EnonceFautif from "./EnonceFautif";
import QCM from "./QCM";
import Substitution from "./Substitution";

export default function ModeEntrainement(props) {
  const [exos, setExos] = useState([]);
  const [questions, setQuestions] = useState([]);
  // const [reponses, setReponses] = useState([null, null, null, null, null]);
  const [bonneReponses, setBonneReponses] = useState(0);
  const [indexExo, setIndexExo] = useState(1);
  const [suivant, setSuivant] = useState(false);
  const [mode, setMode] = useState("entrainement");

  function uncheck(taille) {
    for (let i = 0; i < taille; i++) {
      document.querySelectorAll("#questions")[i].style.color = "#6a6a6a";
      document.querySelectorAll("#questions")[i].style.backgroundColor =
        "#d9d9d9";
    }
    for (let i = 0; i < 5; i++) {
      document.querySelectorAll(".titre")[i].style.color = "#6a6a6a";
    }
  }

  var param = [{ ide: 1 }, { ide: 9 }, { ide: 2 }, { ide: 4 }, { ide: 8 }];

  function getExo(ideExo) {
    axios
      .post("http://localhost:3000/exercice/:ide", ideExo)
      .then((res) => {
        setExos(res.data);
        setQuestions(res.data[0].questions);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    const fetchData = async () => {
      const date = await axios
        .post("http://localhost:3000/exercice/:ide", param[0])
        .then((res) => {
          setExos(res.data);
          setQuestions(res.data[0].questions);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div class="bga">
      {exos.map((i, inex) => (
        <div key={inex}>
          <div class="row">
            <div class="column left">
              <div class="upright">
                <Infobulle
                  value={i.explication}
                  lienExo={i.lienExo}
                ></Infobulle>
              </div>
            </div>
            <div class="column middle">
              <h1 class="htext">
                {i.theme} / {i.subtheme} <br /> Niveau {i.level} / {i.type}{" "}
                <br />
                Exercice n°
                {indexExo}
              </h1>
              <p class="stext">Consigne : {i.consigne}</p>
            </div>
          </div>
          {i.type === "QCM" ? (
            <QCM
              value={questions}
              suivant={suivant}
              bonneReponses={bonneReponses}
              setBonneReponses={setBonneReponses}
              mode={mode}
            />
          ) : (
            ""
          )}
          {i.type === "Texte a trou" ? (
            <TexteTrous
              value={questions}
              suivant={suivant}
              bonneReponses={bonneReponses}
              setBonneReponses={setBonneReponses}
              mode={mode}
            />
          ) : (
            ""
          )}
          {i.type === "Enoncé fautif" ? (
            <EnonceFautif
              value={questions}
              suivant={suivant}
              bonneReponses={bonneReponses}
              setBonneReponses={setBonneReponses}
              mode={mode}
            />
          ) : (
            ""
          )}
          {i.type === "Substitution" ? (
            <Substitution
              value={questions}
              suivant={suivant}
              bonneReponses={bonneReponses}
              setBonneReponses={setBonneReponses}
              mode={mode}
            />
          ) : (
            ""
          )}
        </div>
      ))}
      <Button
        variant="contained"
        type="reset"
        sx={{
          margin: "7px 0px 15px 10px",
          background: "#376f98",
          left: "80%",
        }}
        onClick={() => {
          getExo(param[indexExo]);
          setIndexExo(indexExo + 1);
          uncheck(document.querySelectorAll("#questions").length);
          setSuivant(true);
        }}
      >
        Exercice suivant
      </Button>
      <br />
      <a href="/notions">
        <Button
          variant="contained"
          sx={{
            margin: "7px 0px 15px 10px",
            background: "#376f98",
            left: "80%",
          }}
        >
          Terminer le mode
        </Button>
      </a>
    </div>
  );
}
