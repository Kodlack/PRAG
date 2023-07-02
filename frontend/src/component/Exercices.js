import { Button, DialogTitle, Tooltip } from "@mui/material";
import "../css/background.css";
import "../css/exercices.css";
import { useEffect, useState } from "react";
import axios from "axios";
import BasPage from "./BasPage";
import Infobulle from "./Infobulle";

function Exercice() {
  const [exos, setExos] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [reponses, setReponses] = useState([]);

  function toHtml(texte, id) {
    var x = document.getElementById(id);
    x.innerHTML = texte;
    return x.innerHTML;
  }

  function verifReponse(reponseDonnee, i) {
    console.log(questions[i].correctAnswer);
    console.log(reponseDonnee);
    if (questions[i].correctAnswer == reponseDonnee) {
      document.getElementById("ques").style.color = "#35a329";
    }
  }

  const param = { ide: 9 };

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
    axios
      .post("http://localhost:3000/exercice/:ide", param)
      .then((res) => {
        setExos(res.data);
        console.log(exos);
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
            {i.type} n°{inex + 1}
          </h3>
          <Infobulle value={i.explication}></Infobulle>
        </div>
      ))}
      {questions.map((j, inex) => (
        <div key={inex}>
          <p>{j.enonce.debut}</p>
          {j.answers.map((k, index) => (
            <div>
              <label key={index} id="ques">
                <input
                  name="question"
                  type="radio"
                  value={index}
                  onClick={(e) => setReponses(e.target.value)}
                />
                {k}
              </label>
              <br />
            </div>
          ))}
        </div>
      ))}
      <div id="regle"></div>
      <Button
        variant="contained"
        type="submit"
        sx={{ margin: "7px 0px 0px 10px", background: "#376f98" }}
        onClick={() => {
          toHtml(exos[0].questions[0].regle, "regle");
          verifReponse(reponses[0], 0);
          getExo({ ide: 3 });
        }}
      >
        Valider
      </Button>
      <BasPage />
    </div>
  );
}

export default Exercice;
