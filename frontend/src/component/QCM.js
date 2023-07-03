import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function QCM(props) {
  const [questions, setQuestions] = useState([]);
  const [reponses, setReponses] = useState([null, null, null, null, null]);
  const [bonneReponses, setBonneReponses] = useState(0);
  const [buttonValider, setButtonValider] = useState(false);

  console.log(props.value);

  useEffect(() => {
    setQuestions(props.value);
    setButtonValider(false);
    setReponses([null, null, null, null, null]);
  }, []);

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
          document.querySelectorAll("label")[compteur].style.color = "#35a329";
          compteur++;
        } else {
          document.querySelectorAll("label")[compteur].style.color = "red";
          compteur++;
        }
      }
    }

    for (let i = 0; i < 5; i++) {
      if (questions[i].correctAnswer == reponses[i]) {
        bonneReponse++;
      }
    }
    setBonneReponses(bonneReponses + bonneReponse);
  }

  return (
    <div>
      {props.value.map((j, inex) => (
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
          {buttonValider ? (
            <p dangerouslySetInnerHTML={{ __html: j.regle }} />
          ) : (
            <p></p>
          )}
        </div>
      ))}
      <Button
        variant="contained"
        type="submit"
        sx={{ margin: "7px 0px 0px 10px", background: "#376f98" }}
        onClick={() => {
          verifReponse();
          setButtonValider(true);
        }}
      >
        Valider
      </Button>
    </div>
  );
}
