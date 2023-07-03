import { Button } from "@mui/material";
import "../../css/Etiq.css";
import { useEffect, useState } from "react";

export default function QCM(props) {
  const [reponses, setReponses] = useState([null, null, null, null, null]);
  const [bonneReponses, setBonneReponses] = useState(0);
  const [buttonValider, setButtonValider] = useState(false);

  useEffect(() => {
    setButtonValider(false);
    setReponses([null, null, null, null, null]);
  }, []);

  function verifReponse() {
    let listeQuestionRep = [];
    let compteur = 0;
    let bonneReponse = 0;

    let listerep = [];

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < props.value[i].answers.length; j++) {
        listerep.push(j);
        listeQuestionRep.push(listerep);
      }
      listerep = [];
    }

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < props.value[i].answers.length; j++) {
        if (listeQuestionRep[i][j] == props.value[i].correctAnswer[0]) {
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

    for (let i = 0; i < 5; i++) {
      if (props.value[i].correctAnswer == reponses[i]) {
        bonneReponse++;
        document.querySelectorAll(".titre")[i].style.color = "#35a329";
      }
    }
    setBonneReponses(bonneReponses + bonneReponse);
  }

  return (
    <div>
      <div class="qcm-container">
        {props.value.map((j, inex) => (
          <div key={inex} class="themequestion">
            <p class="titre">
              {j.enonce.debut} ... {j.enonce.fin}
            </p>
            <p class="contenu">Sélèctionnez la bonne réponse :</p>
            {j.answers.map((k, indexk) => (
              <button
                id="questions"
                name={j.idq}
                type="radio"
                value={indexk}
                class="square-button"
                onClick={(e) => {
                  reponses[inex] = parseInt(e.target.value);
                }}
              >
                {k}
              </button>
            ))}

            {buttonValider ? (
              <p dangerouslySetInnerHTML={{ __html: j.regle }} />
            ) : (
              <p></p>
            )}
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
