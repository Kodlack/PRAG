import { Button } from "@mui/material";
import "../css/background.css";
import { useEffect, useState } from "react";
import axios from "axios";
import BasPage from "./BasPage";

function Exercice() {
  const [exos, setExos] = useState([]);

  function toHtml(texte, id) {
    var x = document.getElementById(id);
    x.innerHTML = texte;
    return x.innerHTML;
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/exercices")
      .then((res) => {
        setExos(res.data.data[0].exercices);
        console.log(res.data.data[0].exercices);
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
          <p>{i.Consigne}</p>
          {i.questions.map((j, nb) => {
            {
              j.Answers.map((k, nb) => {
                <p key={nb}>{k}</p>;
              });
            }
          })}
        </div>
      ))}
      <span id="exo"></span>
      <Button
        variant="contained"
        type="submit"
        sx={{ margin: "7px 0px 0px 10px", background: "#376f98" }}
        onClick={() => {
          toHtml(exos[0].Explication, "exo");
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
