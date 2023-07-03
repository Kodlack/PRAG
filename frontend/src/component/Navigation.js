import logo from "../photo/logo.png";
import "../css/navigation.css";

function Navigation() {
  return (
    <div>
      <nav className="navigation-bar">
        <ul className="nav-links-left">
          <li className="left-link">
            <a href="/">Accueil</a>
          </li>
          <li className="left-link">
            <a href="https://www.academie-francaise.fr/" target="_blank">
              Académie Française
            </a>
          </li>
        </ul>

        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <h1>LE PETIT ACADÉMICIEN SANS FAUTE</h1>
        </div>

        <ul className="nav-links-right">
          <li className="right-link">
            <a href="/decouvrir" className="right-link">
              Découvrir
            </a>
          </li>
          <li className="right-link">
            <a href="/toutes-les-notions" className="right-link">
              Toutes les notions
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
