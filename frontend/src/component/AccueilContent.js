import React from "react";
import "../css/AccueilContent.css";
import olivier from "../photo/motif-olivier.png";
import academie from "../photo/motif-academie.png";

const AccueilContent = () => {
  return (
    <div className="content-accueil">
      <div className="content-decouvrir">
        <img src={olivier} alt="olivier" />
        <h1>Laissez nous vous accompagner</h1>
        <p>
          Plongez dans l'univers des exercices grâce au mode découverte et 
          laissez-vous guider par Richelieu, qui vous délivrera des indications 
          claires pour une expérience enrichissante et captivante.
        </p>
        <a href="/decouverte">
          <button className="round-button">Je veux me faire accompagner</button>
        </a>
      </div>
      <hr className="solid"></hr>
      <div className="content-choisir">
        <img src={academie} alt="olivier" />
        <h1>Choisissez vos notions</h1>
        <p>
        Explorez librement toutes les notions disponibles et choisissez celles 
        qui vous intéressent le plus, tout en bénéficiant de la flexibilité de vous 
        entraîner ou de passer en mode interrogation selon vos préférences.
        </p>
        <a href="/notions">
          <button className="round-button">
            Choisir les notions que je souhaite étudier
          </button>
        </a>
      </div>
    </div>
  );
};

export default AccueilContent;
