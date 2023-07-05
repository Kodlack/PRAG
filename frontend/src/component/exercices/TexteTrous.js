import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function TexteTrous(props) {
  const [reponses, setReponses] = useState([null, null, null, null, null]);
  const [buttonValider, setButtonValider] = useState(false);
  const [activeButtonQuestion, setActiveButtonQuestion] = useState("");

  const handleClick = (content) => {
    setActiveButtonQuestion(content);
  };

  const handleButtonValider = () => {
    setButtonValider(true);
  };

  const resetState = () => {
    setReponses([null, null, null, null, null]);
    setButtonValider(false);
    setActiveButtonQuestion("");
  };

  useEffect(() => {
    resetState();
  }, [props.suivant]);

  function verifReponse() {
    let listeQuestionRep = [];
    let compteur = 0;
    let bonneReponse = 0;

    let listerep = [];

    //création d'une indexation pour pouvoir comparer les index des questions
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < props.value[i].answers.length; j++) {
        listerep.push(j);
        listeQuestionRep.push(listerep);
      }
      listerep = [];
    }

    //comparer questions afficher avec ceux de la base de données pour afficher les bonnes et mauvaises réponse
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < props.value[i].answers.length; j++) {
        if (listeQuestionRep[i][j] == props.value[i].correctAnswer[0]) {
          document.querySelectorAll("#questions")[compteur].style.color =
            "#35a329";
          compteur++;
        } else {
          document.querySelectorAll("#questions")[compteur].style.color = "red";
          compteur++;
        }
      }
    }

    //change les couleurs des bonnes réponses trouvées
    for (let i = 0; i < 5; i++) {
      if (props.value[i].correctAnswer == reponses[i]) {
        bonneReponse++;
        document.querySelectorAll(".titre")[i].style.color = "#35a329";
        console.log(reponses);
        console.log(buttonValider);
      }
    }
    props.setBonneReponses(props.bonneReponses + bonneReponse);
    console.log(props.bonneReponses);
  }

  const mystyle = {
    fontSize: "24px",
    fontColor: "black",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div class="qcm-container">
        {props.value.map((j, inex) => (
          <div key={inex} class="themequestion">
            <p class="contenu" style={mystyle}>
              Compléter la seconde phrase sur le modèle de la première
            </p>
            <p
              class="titre"
              style={mystyle}
              dangerouslySetInnerHTML={{ __html: j.enonce.debut }}
            />
            {j.answers.map((k, indexk) => (
              <div class="titreTexteTrou">
                {indexk !== j.correctAnswer[0] ? (
                  <label key={indexk} id="nomquestions">
                    {k}{" "}
                  </label>
                ) : (
                  <input
                    class="input"
                    id="questions"
                    type="text"
                    onClick={(e) => {
                      reponses[inex] = parseInt(e.target.value);
                    }}
                  />
                )}
              </div>
            ))}
            {buttonValider ? (
              <p dangerouslySetInnerHTML={{ __html: j.regle + j.lienQ }} />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <Button
        variant="contained"
        type="submit"
        color="success"
        sx={{ margin: "7px 0px 0px 10px" }}
        onClick={() => {
          verifReponse();
          handleButtonValider();
        }}
      >
        Valider
      </Button>
    </div>
  );
}
