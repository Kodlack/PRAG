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

export default function Exercice() {
  const [exos, setExos] = useState([]);
  const [questions, setQuestions] = useState([]);
  // const [reponses, setReponses] = useState([null, null, null, null, null]);
  // const [bonneReponses, setBonneReponses] = useState(0);
  // const [buttonValider, setButtonValider] = useState(false);
  const [indexExo, setIndexExo] = useState(1);

  function verifReponse() {
    let listeQuestionRep = [];
    let compteur = 0;
    let bonneReponse = 0;

    let listerep = [];

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < questions[i].answers.length; j++) {
        listerep.push(j);
        listeQuestionRep.push(listerep);
      }
      listerep = [];
    }

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < questions[i].answers.length; j++) {
        if (listeQuestionRep[i][j] == questions[i].correctAnswer[0]) {
          document.querySelectorAll("button#questions")[compteur].style.color =
            "#35a329";
          compteur++;
        } else {
          document.querySelectorAll("button#questions")[compteur].style.color =
            "red";
          compteur++;
        }
      }
    }

    // for (let i = 0; i < 5; i++) {
    //   if (questions[i].correctAnswer == reponses[i]) {
    //     bonneReponse++;
    //   }
    // }
    // setBonneReponses(bonneReponses + bonneReponse);
  }

  function uncheck(taille) {
    for (let i = 0; i < taille; i++) {
      document.querySelectorAll("button#questions.square-button")[
        i
      ].style.color = "black";
    }
    for (let i = 0; i < 5; i++) {
      document.querySelectorAll(".titre")[i].style.color = "#6a6a6a";
    }
  }

  var param = [{ ide: 1 }, { ide: 9 }, { ide: 2 }, { ide: 4 }];

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
            <div class="button2">Exercice {indexExo}/15</div>
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
              <div class="chrono">23:59</div>
            </div>
          </div>
          
          {/* {i.type == "QCM" ? (
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
                          // reponses.push(e.target.value);
                        }}
                        onLoad={(e) => {}}
                      />
                      {k}
                    </label>
                    <br />
                  </div>
                ))}
                <p id="enonceFin">{j.enonce.fin}</p>
                {buttonValider ? (
                  <p dangerouslySetInnerHTML={{ __html: j.regle }} />
                ) : (
                  <p></p>
                )}
              </div>
            ))
          ) : (
            <p></p>
          )} */}
          {i.type == "QCM" ? <QCM value={questions} /> : ""}
          {i.type == "Texte a trou" ? <TexteTrous value={questions} /> : ""}
          {i.type == "Enoncé fautif" ? <EnonceFautif value={questions} /> : ""}
          {indexExo == 2 ? (
            <p>
              Vous avez {(2 * 100) / 10}% de bonnes réponses sur cette série
              d'exercice.
            </p>
          ) : (
            <p></p>
          )}
        </div>
      ))}
      {/* <Button
        variant="contained"
        type="submit"
        sx={{ margin: "7px 0px 0px 10px", background: "#376f98" }}
        onClick={() => {
          verifReponse();
          setButtonValider(true);
        }}
      >
        Valider
      </Button> */}
      <Button
        variant="contained"
        type="reset"
        sx={{
          margin: "7px 0px 15px 10px",
          background: "#376f98",
        }}
        onClick={() => {
          // setButtonValider(false);
          getExo(param[indexExo]);
          setIndexExo(indexExo + 1);
          uncheck(
            document.querySelectorAll("button#questions.square-button").length
          );
        }}
      >
        Exercice suivant
      </Button>
    </div>
  );
}
