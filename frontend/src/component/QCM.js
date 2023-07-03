import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function QCM(props) {
  const [questions, setQuestions] = useState([]);
  const [reponses, setReponses] = useState([null, null, null, null, null]);
  const [bonneReponses, setBonneReponses] = useState(0);
  const [buttonValider, setButtonValider] = useState(false);

  console.log(props.value);

  useEffect(() => {
    setButtonValider(false);
    setReponses([null, null, null, null, null]);
    setQuestions(props.value);
  }, []);

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
          verifReponse(reponses);
          setButtonValider(true);
        }}
      >
        Valider
      </Button>
    </div>
  );
}
