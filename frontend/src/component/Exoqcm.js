import React from "react";
import "../css/Themes.css";
import Question from "./Question";

const Exoqcm = () => {
  return (
    <div>
      <div class="bga">
        <div class="qcmtheme">
          <h1 class="htext">Question à choix multiples n°X</h1>
          <p class="stext">
            Consigne : Questionnaire à choix multiple. Choisissez une et une
            seule proposition de réponse.
          </p>
        </div>
      </div>
      <div class="qcm-container">
        <Question></Question>
        <Question></Question>
      </div>
    </div>
  );
};

export default Exoqcm;
