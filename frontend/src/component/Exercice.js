import { Button } from "@mui/material";
import axios from "axios";

function Exercice() {
  function recupExo(e) {
    e.preventDefault();
    try {
      axios.get("http://localhost:3001/").then((response) => {
        console.log(response);
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h3>Texte à trous</h3>
      Je mange des chocolats.
      <br /> Je mange un <input type="text"></input>.
      <br />
      <Button
        variant="contained"
        type="submit"
        sx={{ margin: "7px 0px 0px 10px" }}
        onClick={recupExo}
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
        sx={{ margin: "7px 0px 0px 10px" }}
        onClick={recupExo}
      >
        Valider
      </Button>
    </div>
  );
}

export default Exercice;
