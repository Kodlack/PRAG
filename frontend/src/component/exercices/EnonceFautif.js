import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function EnonceFautif(props) {
  const [reponses, setReponses] = useState([null, null, null, null, null]);
  const [buttonValider, setButtonValider] = useState(false);
  const [enonce, setEnonce] = useState([]);
  const [activeButton, setActiveButton] = useState([false, false, false, false, false]);
  const [activeMot, setActiveMot] = useState([null, null, null, null, null]);


  const handleClick = (j) => {
    //if (buttonValider) return; // Ne pas gérer le clic si le bouton "Valider" a été cliqué
    const newActiveButton = [...activeButton];
    newActiveButton[j] = (newActiveButton[j] == true ? false : true);
    setActiveButton(newActiveButton);
    //setActiveButton(activeButton == j ? null : j);
    const newActiveMot = [...activeMot];
    newActiveMot[j] = null;
    setActiveMot(newActiveMot);
    //setActiveMot(null);
  };

  const handleClickMot = (j, k) => {
    //if (buttonValider) return; // Ne pas gérer le clic si le bouton "Valider" a été cliqué
    const newActiveMot = [...activeMot];
    newActiveMot[j] = newActiveMot[j] == k ? null : k;
    setActiveMot(newActiveMot);
    //setActiveMot(activeMot == k ? null : k);
    const newActiveButton = [...activeButton];
    newActiveButton[j] = false;
    setActiveButton(newActiveButton);
    //setActiveButton(null);
  };

  const resetState = () => {
    setReponses([null, null, null, null, null]);
    setButtonValider(false);
    // setActiveButtonQuestion("");
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

    console.log(reponses);
    console.log(listeQuestionRep);
    //comparer questions afficher avec ceux de la base de données pour afficher les bonnes et mauvaises réponse
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < props.value[i].answers.length; j++) {
        if (listeQuestionRep[i][j] == props.value[i].correctAnswer[0]) {
          if (props.mode != "interrogation")
            document.querySelectorAll("#questions")[compteur].style.color =
              "red";
          compteur++;
        } else {
          if (props.mode != "interrogation")
            document.querySelectorAll("#questions")[compteur].style.color =
              "#35a329";
          compteur++;
        }
      }
    }

    //change les couleurs des bonnes réponses trouvées
    for (let i = 0; i < 5; i++) {
      if (props.value[i].correctAnswer == reponses[i]) {
        bonneReponse++;
        // document.querySelectorAll("#questions")[i].style.color = "#35a329";
      }
    }
    props.setBonneReponses(props.bonneReponses + bonneReponse);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div class="qcm-container">
        {props.value.map((j, inex) => (
          <div key={inex} class="themequestion">
            <p className="titre">
              Sélectionnez la/les erreur(s) de la phrase suivante :
            </p>
            {j.enonce.debut.split(" ").map((k, indexk) => (
              <button
                id="questions"
                name={j.idq}
                className={
                  (activeMot != null && activeMot[inex] == indexk)  ? "boutonEnonce2" : "boutonEnonce"
                }
                value={indexk}
                onClick={(e) => {
                  handleClickMot(inex, indexk);
                  reponses[inex] = parseInt(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {k}
              </button>
            ))}
            {buttonValider && props.mode != "interrogation" ? (
              <p
                id="regle"
                dangerouslySetInnerHTML={{ __html: j.regle + j.lienQ }}
              />
            ) : (
              <p></p>
            )}
            <button id="pasdefaute" 
            onClick={(e) => handleClick(inex)}
            className={
              activeButton[inex] == true ? "active" : "square-button"
            }
            >
              Pas de faute
            </button>
          </div>
        ))}
      </div>
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
