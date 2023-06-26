import { Button } from "@mui/material";
import "../css/background.css";
import BasPage from "./BasPage";

function Accueil() {
  return (
    <div id="background">
      <h1>Titre Acceuil</h1>
      <p>blablabla</p>
      <h4>Modes</h4>
      <p>Pour le mode interro</p>
      <Button
        variant="contained"
        sx={{ margin: "7px 0px 0px 10px", background: "#376f98" }}
      >
        <a href={`/interrogation`}>Mode interrogatoire</a>
      </Button>
      <p>Pour le mode entrainement</p>
      <Button
        sx={{
          margin: "7px 0px 0px 10px",
          background: "#376f98",
        }}
      >
        <a href={`/entrainement`}>Mode entrainement</a>
      </Button>
      <hr></hr>
      <p>blablabla</p>
      <Button
        variant="contained"
        sx={{ margin: "7px 0px 0px 10px", background: "#376f98" }}
      >
        <a href={`/exercices`}>Tous les exercices</a>
      </Button>
      <BasPage />
    </div>
  );
}

export default Accueil;
