import { Button } from "@mui/material";
import "../../css/background.css";
import "../../css/Themes.css";
import "../../css/exercices.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Infobulle from "./Infobulle";
import TexteTrous from "./TexteTrous";
import EnonceFautif from "./EnonceFautif";
import QCM from "./QCM";

export default function Decouverte() {
  const [exos, setExos] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [bonneReponses, setBonneReponses] = useState(0);
  const [indexExo, setIndexExo] = useState(1);
  const [suivant, setSuivant] = useState(false);

  function uncheck(taille) {
    for (let i = 0; i < taille; i++) {
      document.querySelectorAll("#questions")[i].style.color = "#6a6a6a";
    }
    for (let i = 0; i < 5; i++) {
      document.querySelectorAll(".titre")[i].style.color = "#6a6a6a";
    }
  }

  var param = [{ ide: 1 }, { ide: 9 }];

  function getExo(ideExo) {
    axios
      .post("http://localhost:3000/exercice/:ide", ideExo)
      .then((res) => {
        setExos(res.data);
        console.log(exos);
        setQuestions(res.data[0].questions);
        console.log(questions);
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
          console.log(res.data);
          setQuestions(res.data[0].questions);
          console.log(questions);
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
          <div>
            <div class="bandeau">
              <div class="upright">
                <Infobulle value={i.explication}></Infobulle>
              </div>

              <div class="qcmtheme">
                <h1 class="htext">
                  {i.theme} / {i.subtheme} <br /> Niveau {i.level} / {i.type}{" "}
                  Exercice n°
                  {indexExo}
                </h1>
                <p class="stext">Consigne : {i.consigne}</p>
              </div>
            </div>
          </div>
          {i.type === "QCM" ? (
            <QCM
              value={questions}
              suivant={suivant}
              bonneReponses={bonneReponses}
              setBonneReponses={setBonneReponses}
            />
          ) : (
            ""
          )}
          {i.type === "Texte a trou" ? (
            <TexteTrous
              value={questions}
              bonneReponses={bonneReponses}
              setBonneReponses={setBonneReponses}
            />
          ) : (
            ""
          )}
          {i.type === "Enoncé fautif" ? (
            <EnonceFautif
              value={questions}
              bonneReponses={bonneReponses}
              setBonneReponses={setBonneReponses}
            />
          ) : (
            ""
          )}
        </div>
      ))}
      {indexExo !== param.length ? (
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
      ) : (
        <Button
          variant="contained"
          type="reset"
          sx={{
            margin: "7px 0px 15px 10px",
            background: "#376f98",
            left: "80%",
          }}
          onClick={() => {}}
        >
          Terminer
        </Button>
      )}
    </div>
  );
}
