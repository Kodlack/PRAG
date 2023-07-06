import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function QCM(props) {
  const [reponses, setReponses] = useState([null, null, null, null, null]);
  const [buttonValider, setButtonValider] = useState(false);
  const [activeButtonQuestion, setActiveButtonQuestion] = useState([null, null, null, null, null]);
  const [resetButtons, setResetButtons] = useState(false);

  const handleClick = (i, content) => {
    const newActiveButtonQuestion = [...activeButtonQuestion];
    newActiveButtonQuestion[i] = parseInt(content);
    setActiveButtonQuestion(newActiveButtonQuestion);
    setReponses((prevReponses) => {
      const newReponses = [...prevReponses];
      newReponses[i] = parseInt(content);
      return newReponses;
    });
  };

  const handleButtonValider = () => {
    setButtonValider(true);
  };

  const resetState = () => {
    setReponses([null, null, null, null, null]);
    setButtonValider(false);
    setActiveButtonQuestion([null, null, null, null, null]);
    setResetButtons(true);
  };

  useEffect(() => {
    resetState();
  }, [props.suivant]);

  function verifReponse() {
    let listeQuestionRep = [];
    let compteur = 0;
    let bonneReponse = 0;
    let listerep = [];

    // Création d'une indexation pour pouvoir comparer les index des questions
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < props.value[i].answers.length; j++) {
        listerep.push(j);
        listeQuestionRep.push(listerep);
      }
      listerep = [];
    }

    // Comparer les questions affichées avec celles de la base de données pour afficher les bonnes et mauvaises réponses
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < props.value[i].answers.length; j++) {
        const button = document.querySelectorAll("#questions")[compteur];
        if (listeQuestionRep[i][j] === props.value[i].correctAnswer[0]) {
          button.style.backgroundColor = "#35a329";
          button.style.color = "white";
        } else if (activeButtonQuestion[i] === j) {
          button.style.backgroundColor = "red";
          button.style.color = "white";
        } else {
          button.style.color = "red";
        }
        compteur++;
      }
    }

    // Change les couleurs des bonnes réponses trouvées
    for (let i = 0; i < 5; i++) {
      if (props.value[i].correctAnswer == reponses[i]) {
        bonneReponse++;
        document.querySelectorAll(".titre")[i].style.color = "#35a329";
      }
    }
    props.setBonneReponses(props.bonneReponses + bonneReponse);
  }

  useEffect(() => {
    if (resetButtons) {
      const buttons = document.querySelectorAll(".square-button");
      buttons.forEach((button) => {
        button.style.backgroundColor = "";
        button.style.color = "";
      });
      const titles = document.querySelectorAll(".titre");
      titles.forEach((title)=> {
        title.style.color = "";
      });
      setResetButtons(false);
    }
  }, [resetButtons]);

  return (
      <div style={{ textAlign: "center" }}>
        <div className="qcm-container">
          {props.value.map((j, inex) => (
              <div key={inex} className="themequestion">
                <p className="titre">
                  {j.enonce.debut} ... {j.enonce.fin}
                </p>
                <p className="contenu">Sélectionnez la bonne réponse :</p>
                {j.answers.map((k, indexk) => (
                    <button
                        id="questions"
                        name={j.answers[indexk]}
                        type="radio"
                        value={indexk}
                        onClick={(e) => handleClick(inex, indexk)}
                        className={
                          activeButtonQuestion[inex] == indexk ? "active" : "square-button"
                        }
                    >
                      {k}
                    </button>
                ))}
                {buttonValider ? (
                    <p
                        id="regle"
                        dangerouslySetInnerHTML={{ __html: j.regle + j.lienQ }}
                    />
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