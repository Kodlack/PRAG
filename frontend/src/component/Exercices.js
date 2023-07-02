import { Button, DialogTitle, Tooltip } from "@mui/material";
import "../css/background.css";
import "../css/exercices.css";
import { useEffect, useState } from "react";
import axios from "axios";
import BasPage from "./BasPage";
import Infobulle from "./Infobulle";
import TexteTrous from "./TexteTrous";
import EnonceFautif from "./EnonceFautif";

export default function Exercice() {
  const [exos, setExos] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [reponses, setReponses] = useState([null, null, null, null, null]);
  const [bonneReponses, setBonneReponses] = useState(0);
  const [buttonValider, setButtonValider] = useState(false);
  const [indexExo, setIndexExo] = useState(1);

  function toHtml(texte, id) {
    var x = document.getElementById(id);
    x.innerHTML = texte;
    return x.innerHTML;
  }

  function verifReponse(reponseDonnee) {
    let bonneReponse = 0;

    for (let i = 0; i < 5; i++) {
      if (questions[i].correctAnswer == reponseDonnee[i]) {
        document.querySelectorAll("label")[i].style.color = "#35a329";
        console.log(questions[i].correctAnswer);
        console.log(reponseDonnee);
        console.log("nombre bonne réponse : " + bonneReponses);
        bonneReponse++;
      } else document.getElementById("nomquestions").style.color = "#f80404";
    }
    setBonneReponses(bonneReponses + bonneReponse);
  }

  function uncheck(taille) {
    for (let i = 0; i < taille; i++)
      document.querySelectorAll("input")[i].checked = false;
  }

  var param = [{ ide: 1 }, { ide: 2 }, { ide: 4 }, { ide: 9 }];

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
    document.getElementById("questions").checked = "false";
  }

  useEffect(() => {
    axios
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
  }, []);

  return (
    <div id="background">
      {exos.map((i, inex) => (
        <div key={inex}>
          <h3>
            {i.type} Exercice n°{indexExo}
          </h3>
          <Infobulle value={i.explication}></Infobulle>
          {i.type == "QCM" ? (
            i.questions.map((j, inex) => (
              <div key={inex}>
                <p>{j.enonce.debut}</p>
                {j.answers.map((k, indexk) => (
                  <div>
                    <label key={indexk} id="nomquestions">
                      <input
                        id="questions"
                        name={j.idq}
                        type="radio"
                        value={indexk}
                        onClick={(e) => {
                          reponses[inex] = parseInt(e.target.value);
                        }}
                      />
                      {k}
                    </label>
                    <br />
                  </div>
                ))}
                <p id="enonceFin">{j.enonce.fin}</p>
                {buttonValider ? <p>{toHtml(j.regle, "regle")}</p> : <p></p>}
              </div>
            ))
          ) : (
            <p></p>
          )}

          {i.type == "Texte a trou" ? (
            <TexteTrous value={questions} buttonValider={buttonValider} />
          ) : (
            <p></p>
          )}
          {i.type == "Enoncé fautif" ? (
            <EnonceFautif value={questions} buttonValider={buttonValider} />
          ) : (
            <p></p>
          )}
          {indexExo == 2 && buttonValider ? (
            <p>
              Vous avez {(bonneReponses * 100) / 10}% de bonnes réponses sur
              cette série d'exercice.
            </p>
          ) : (
            <p></p>
          )}
        </div>
      ))}
      <p id="regle"></p>
      <Button
        variant="contained"
        type="submit"
        sx={{ margin: "7px 0px 0px 10px", background: "#376f98" }}
        onClick={() => {
          verifReponse(reponses);
          setButtonValider(true);
        }}
      >
        Valider
      </Button>
      <Button
        variant="contained"
        type="reset"
        sx={{ margin: "7px 0px 0px 10px", background: "#376f98" }}
        onClick={() => {
          setButtonValider(false);
          getExo(param[3]);
          setIndexExo(indexExo + 1);
          uncheck(document.querySelectorAll("input").length);
        }}
      >
        Exercice suivant
      </Button>
      <BasPage />
    </div>
  );
}
