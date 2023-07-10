import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import "../../css/background.css";
import "../../css/Etiq.css";
import "../../css/Themes.css";
import "../../css/exercices.css";
import "../../css/richelieu.css";
import pose1 from "../../photo/Pose1.png";
import pose3 from "../../photo/Pose3.png";
import pose5 from "../../photo/Pose5.png";
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

  //les exercices par défaut
  var param = [{ ide: 1 }, { ide: 2 }];

  //récupère des exercices
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
                <Infobulle value={i.explication}></Infobulle>
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
              <img src={pose3} alt="pose3" id="richelieu3" />
            </div>
          </div>
          {i.type === "QCM" ? (
            <div>
              <img src={pose5} alt="pose3" id="richelieu5" />
              <img src={pose5} alt="pose5B" id="richelieu5B" />
            </div>
          ) : (
            <div>
              <p id="texterichelieu1">
                Très bien, tu peux t'exercer maintenant !
              </p>
              <img src={pose1} alt="pose1" id="richelieu1" />
            </div>
          )}
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
              suivant={suivant}
              bonneReponses={bonneReponses}
              setBonneReponses={setBonneReponses}
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
        <a href="/notions">
          <Button
            variant="contained"
            type="reset"
            sx={{
              margin: "7px 0px 15px 10px",
              background: "#376f98",
              left: "80%",
            }}
          >
            Terminer
          </Button>
        </a>
      )}
    </div>
  );
}
