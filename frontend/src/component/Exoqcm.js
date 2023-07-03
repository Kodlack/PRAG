import React from "react";
import "../css/Themes.css";
import Question from "./Question";

const Exoqcm = () => {
  return (
    <div>
    <div class="bga">
      <div class="bandeau">
        <div class="chrono">
          10:00
          </div>
      <div class="qcmtheme">
      <h1 class="htext">Question à choix multiples n°X</h1>
      </div>
      </div>
      </div>
      <div class="bandeau">
      <p class= "stext">Consigne : Questionnaire à choix multiple. Choisissez une et une seule proposition de réponse.</p>
      <div class="upright">
          <button class="button2">
          Exercice 5/15
          </button>
          <button class="button2" style={{backgroundColor:"#FBE62F"}}>Me rappeler la règle</button>

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
