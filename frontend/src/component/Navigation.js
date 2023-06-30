import logo from "../photo/logo.png";
import "../css/navigation.css";
import { Link } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Container } from "@mui/system";

function Navigation() {
  return (
    <div>
      <nav className="navigation-bar">

        <ul className="nav-links-left">
            <li className="left-link"><a href="/">Accueil</a></li>
            <li className="left-link"><a href="/academie-francaise">Académie Française</a></li>
        </ul>

        <div className="logo">
            <img src={logo} alt="Logo" />
            <h1>LE PETIT ACADÉMICIEN SANS FAUTE</h1>
        </div>

        <ul className="nav-links-right">
            <li className="right-link"><a href="/decouvrir" className="right-link">Découvrir</a></li>
            <li className="right-link"><a href="/toutes-les-notions" className="right-link">Toutes les notions</a></li>
        </ul>

      </nav>
    </div>
  );
}

export default Navigation;
