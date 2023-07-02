import { Button } from "@mui/material";
import { useState } from "react";

export default function EnonceFautif(props) {
  const [questions, setQuestions] = useState([]);
  const [reponses, setReponses] = useState([null, null, null, null, null]);
  const [bonneReponses, setBonneReponses] = useState(0);
  console.log(props.value);

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

  function toHtml(texte, id) {
    var x = document.getElementById(id);
    x.innerHTML = texte;
    return x.innerHTML;
  }
  return (
    <div>
      {props.value.map((j, inex) => (
        <div key={inex}>
          <p>{j.enonce.debut}</p>
          {j.answers.map((k, indexk) => (
            <button
              key={indexk}
              onClick={(e) => {
                reponses[inex] = parseInt(e.target.value);
              }}
            >
              {k}
            </button>
          ))}
          <br />
          <p id="enonceFin">{j.enonce.fin}</p>
          {props.buttonValider ? <p>{toHtml(j.regle, "regle")}</p> : <p></p>}
        </div>
      ))}
    </div>
  );
}
