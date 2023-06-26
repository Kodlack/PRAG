import { Button } from "@mui/material";
import "../css/background.css";
import { useState } from "react";
import axios from "axios";
import BasPage from "./BasPage";

function Exercice() {
  const [exos, setExos] = useState([]);

  function recupExo() {
    console.log("icoi");
    axios
      .get("http://localhost:8000/exercices", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        setExos(res.data);
        console.log("res");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div id="background">
      <h1>Titre </h1>
      <p>blablabla</p>
      <h3>Texte à trous</h3>
      Je mange des chocolats.
      <br /> Je mange un <input type="text"></input>.
      <br />
      <Button
        variant="contained"
        sx={{ margin: "7px 0px 0px 10px", background: "#376f98" }}
        onClick={() => recupExo()}
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
      <h3>QCM</h3>
      Des fleurs <br />
      <input name="exo" type="radio"></input> rouges tomate.
      <br />
      <input name="exo" type="radio"></input> rouge tomate.
      <br />
      <input name="exo" type="radio"></input> rouges tomates.
      <Button
        variant="contained"
        type="submit"
        sx={{ margin: "7px 0px 0px 10px", background: "#376f98" }}
      >
        Valider
      </Button>
      <h3>Question/réponse</h3>
      <br />
      <Button
        variant="contained"
        type="submit"
        sx={{ margin: "7px 0px 0px 10px", background: "#376f98" }}
        // onClick={recupExo}
      >
        Valider
      </Button>
      {exos.map((i) => (
        <p>i</p>
      ))}
      <BasPage />
    </div>
  );
}

export default Exercice;
