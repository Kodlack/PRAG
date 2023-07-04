import React, { useState } from "react";
import "../css/CardEntrainement.css";

const CardEntrainement = ({ activeButton, setActiveButton }) => {
  const handleClick = (contentId) => {
    setActiveButton(contentId);
  };

  return (
    <div className="card-entrainement">
      <h2>Mode entraînement</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        printing and typesetting printing and typesettingy's standard dummy text
        ever since the 1500s.
      </p>
      <h3>Choisir une difficulté :</h3>
      <div className="buttons-mode">
        <button
          id="feButton"
          onClick={() => handleClick("feContent")}
          className={activeButton === "feContent" ? "active" : ""}
        >
          Facile
        </button>
        <button
          id="meButton"
          onClick={() => handleClick("meContent")}
          className={activeButton === "meContent" ? "active" : ""}
        >
          Moyen
        </button>
        <button
          id="deButton"
          onClick={() => handleClick("deContent")}
          className={activeButton === "deContent" ? "active" : ""}
        >
          Difficile
        </button>
      </div>
      <div className="mode-content">
        <p
          id="feContent"
          className={activeButton === "feContent" ? "active-content" : ""}
        >
          Le mode Facile is simply dummy text of the printing and typesetting.
        </p>
        <p
          id="meContent"
          className={activeButton === "meContent" ? "active-content" : ""}
        >
          Le mode Moyen is simply dummy text of the printing and typesetting.
        </p>
        <p
          id="deContent"
          className={activeButton === "deContent" ? "active-content" : ""}
        >
          Le mode Difficile is simply dummy text of the printing and
          typesetting.
        </p>
      </div>
    </div>
  );
};

export default CardEntrainement;
