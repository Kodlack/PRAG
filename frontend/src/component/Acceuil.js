import { Button } from "@mui/material";
import "../css/background.css";
import "../css/accueil.css";
import BasPage from "./BasPage";
import { Box } from "@mui/system";
import Carrousel from "../component/Carrousel";

function Accueil() {
  return (
    <div id="background">
      <Carrousel />
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <p id="sousTexte">
          Vous venez pour vous exercer sans aucune préférence et idée préalable
          de ce sur quoi vous voulez travailler !
        </p>
        <Button
          variant="contained"
          sx={{
            margin: "7px 0px 0px 10px",
            background: "#D9D9D9",
          }}
        >
          <a id="lienBouton" href={`/aleatoire`}>
            Exercices aléatoires
          </a>
        </Button>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <hr id="barre"></hr>
        <p id="sousTexte">
          Vos difficultés ont été identifiés et vous voulez travailler
          spécifiquement sur certaines notions !
        </p>
        <Button
          variant="contained"
          sx={{ margin: "7px 0px 0px 10px", background: "#376f98" }}
        >
          <a id="lienBouton" href={`/exercices`}>
            Exercices ciblés
          </a>
        </Button>
      </Box>
      <BasPage />
    </div>
  );
}

export default Accueil;
