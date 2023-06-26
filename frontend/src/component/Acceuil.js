import { Button } from "@mui/material";
import "../css/background.css";
import "../css/accueil.css";
import BasPage from "./BasPage";
import { Box } from "@mui/system";

function Accueil() {
  return (
    <div id="background">
      <Box sx={{ textAlign: "center" }}>
        <h1 id="titreAccueil">Titre Accueil</h1>
        <p id="texteTitreAccueil"> blablabla</p>
        <h3 id="sousTitre">Modes</h3>
      </Box>
      <Box
        sx={{
          margin: "70px",
          display: "inline-block",
          textAlign: "center",
        }}
      >
        <p id="sousTexte">Pour le mode interro</p>
        <Button
          variant="contained"
          sx={{
            margin: "7px 0px 0px 10px",
            background: "#D9D9D9",
            color: "#6A6A6A",
          }}
        >
          <a id="lienBouton" href={`/interrogation`}>
            Mode interrogatoire
          </a>
        </Button>
      </Box>
      <Box
        sx={{
          margin: "70px",
          display: "inline-block",
          textAlign: "center",
        }}
      >
        <p id="sousTexte">Pour le mode entrainement</p>
        <Button
          variant="contained"
          sx={{
            margin: "7px 0px 0px 10px",
            background: "#D9D9D9",
          }}
        >
          <a id="lienBouton" href={`/entrainement`}>
            Mode entrainement
          </a>
        </Button>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <hr id="barre"></hr>
        <p id="sousTexte">blablabla</p>
        <Button
          variant="contained"
          sx={{ margin: "7px 0px 0px 10px", background: "#376f98" }}
        >
          <a id="lienBouton" href={`/exercices`}>
            Tous les exercices
          </a>
        </Button>
      </Box>
      <BasPage />
    </div>
  );
}

export default Accueil;
