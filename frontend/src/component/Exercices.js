import { Button, DialogTitle, Tooltip } from "@mui/material";
import "../css/background.css";
import "../css/exercices.css";
import { useEffect, useState } from "react";
import axios from "axios";
import BasPage from "./BasPage";

function Exercice() {
  const [exos, setExos] = useState([]);
  const [questions, setQuestions] = useState([]);

  function toHtml(texte, id) {
    var x = document.getElementById(id);
    x.innerHTML = texte;
    return x.innerHTML;
  }

  // const envoieData = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios
  //       .post("http://localhost:3000/formulaire", {
  //         tab1,
  //         dateChoisie,
  //         activite,
  //       })
  //       .then((response) => {
  //       });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const param = { ide: 1 };

  useEffect(() => {
    axios
      .post("http://localhost:3000/exercice/:ide", param)
      .then((res) => {
        setExos(res.data);
        setQuestions(res.data[0].questions);
        console.log(questions);
        console.log(exos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="background">
      <h1>Titre </h1>
      <p>blablabla</p>
      {exos.map((i, inex) => (
        <div key={inex}>
          <h3>
            {i.type} n°{inex + 1}
          </h3>
          <p>{i.consigne}</p>
        </div>
      ))}
      {questions.map((j, inex) => (
        <div key={inex}>
          <p>{j.enonce.debut}</p>
          {j.answers.map((k) => (
            <div>
              <label>
                <input name="question" type="radio" />
                {k}
              </label>
              <br />
            </div>
          ))}
        </div>
      ))}
      <div id="explication"></div>
      <Button
        variant="contained"
        type="submit"
        sx={{ margin: "7px 0px 0px 10px", background: "#376f98" }}
        onClick={() => {
          toHtml(exos[0].questions[0].regle, "explication");
        }}
      >
        Valider
      </Button>
      <h3>Texte à trous</h3>
      Je mange des chocolats.
      <br /> Je mange un <input type="text"></input>.
      <br />
      <Button
        variant="contained"
        sx={{ margin: "7px 0px 0px 10px", background: "#376f98" }}
      >
        Valider
      </Button>
      <h3>Enoncé fautif</h3>
      <button id="eltenonceFatif">Je </button>
      <button id="eltenonceFatif">suis </button>
      <button id="eltenonceFatif">un </button>
      <button
        id="eltenonceFatif"
        onClick={() => {
          console.log("faute trouvé !!");
        }}
      >
        canart.
      </button>
      <br />
      <BasPage />
    </div>
  );
}

export default Exercice;
