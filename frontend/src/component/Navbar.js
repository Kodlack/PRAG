import logo from "../photo/logo.png";
import "../css/navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <img id="logoAcFr" src={logo} alt="logo de l'academie"></img>
      <h3 id="titreSite">LE PETIT ACADÉMICIEN SANS FAUTE</h3>
      <hr></hr>
      {/* <Link to={"/exercice"} relative="path">
        Exercice
      </Link> */}
    </div>
  );
}

export default Navbar;
