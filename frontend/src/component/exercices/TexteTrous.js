import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function TexteTrous() {
  const mystyle  ={
    fontSize:"24px",
    fontColor:"black"
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div class="qcm-container">
          <div class="themequestion">
          <p class="contenu" style={mystyle}>Compléter la seconde phrase sur le modèle de la première</p>
            <p class="titre">
              Un chapeau noir.
            </p>
            <p class="titre">
              Une casquette <input class="input" placeholder=". . . . . . ." />
            </p>
          </div>
      </div>
      <Button
        variant="contained"
        type="submit"
        color="success"
        sx={{ margin: "7px 0px 0px 10px" }}
        onClick={() => {
        }}
      >
        Valider
      </Button>
  </div>
  );
}

/*export default function TexteTrous(props) {
  console.log(props.value);

  return (
    <div>
      {props.value.map((j, inex) => (
        <div key={inex}>
          <p dangerouslySetInnerHTML={{ __html: j.enonce.debut }} />
          {j.answers.map((k, indexk) => (
            <div>
              {indexk !== j.correctAnswer[0] ? (
                <label key={indexk} id="nomquestions">
                  {k}
                </label>
              ) : (
                <input
                  id="questions"
                  type="text"
                  onClick={(e) => {
                    // reponses[inex] = parseInt(e.target.value);
                  }}
                />
              )}
            </div>
          ))}
          <p dangerouslySetInnerHTML={{ __html: j.enonce.fin }} />
          {props.buttonValider ? (
            <p dangerouslySetInnerHTML={{ __html: j.regle + j.lienQ }} />
          ) : (
            <p></p>
          )}
        </div>
      ))}
    </div>
  );
}

*/
