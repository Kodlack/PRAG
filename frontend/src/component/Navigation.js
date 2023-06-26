import logo from "../photo/logo.png";
import "../css/navigation.css";
import { Link } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Container } from "@mui/system";

function Navigation() {
  return (
    <div>
      <div id="liensAcadem">
        <a href="https://www.academie-francaise.fr/" target="_blank">
          <AccountBalanceIcon id="lf" />
          <span id="logoAcadem1">Langue française</span>
        </a>
        <a
          id="logoAcadem1"
          href="https://www.dictionnaire-academie.fr/"
          target="_blank"
        >
          <MenuBookIcon for="dic" />
          <span id="logoAcadem1">Dictionnaire</span>
        </a>
      </div>
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
