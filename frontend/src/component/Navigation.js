import logo from "../photo/logo.png";
import "../css/navigation.css";
import { Link } from "@mui/material";

function Navigation() {
  return (
    <div>
      <img id="logoAcFr" src={logo} alt="logo de l'academie"></img>
      <p id="titreSite">LE PETIT ACADÉMICIEN SANS FAUTE</p>
      <nav id="pages">
        <Link id="lien" href="/">
          Accueil
        </Link>
        <Link id="lien" href="/interrogation">
          Mode interrogatoire
        </Link>
        <Link id="lien" href="/entrainement">
          Mode entrainement
        </Link>
        <Link id="lien" href="/exercices">
          Tous les exercices
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
