import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Substitution(props) {
  const [reponses, setReponses] = useState(["", "", "", "", ""]);
  const [buttonValider, setButtonValider] = useState(false);

  const resetState = () => {
    setReponses(["", "", "", "", ""]);
    setButtonValider(false);
  };

  useEffect(() => {
    resetState();
  }, [props.suivant]);

  function verifReponse() {
    let compteur = 0;
    let bonneReponse = 0;

    //comparer questions afficher avec ceux de la base de données pour afficher les bonnes et mauvaises réponse
    for (let i = 0; i < 5; i++) {
      if (reponses[i] == props.value[i].correctAnswer[0]) {
        document.querySelectorAll("#questions")[compteur].style.color =
          "#35a329";
        compteur++;
        bonneReponse++;
        console.log(reponses);
        console.log(props.value[i].correctAnswer[0]);
      } else {
        document.querySelectorAll("#questions")[compteur].style.color = "red";
        compteur++;
      }
    }

    props.setBonneReponses(props.bonneReponses + bonneReponse);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div class="qcm-container">
        {props.value.map((j, inex) => (
          <div key={inex} class="themequestion">
            <p className="titre">{j.enonce.debut}</p>
            <Typography fontSize={"24px"}>
              <TextField
                id="questions"
                multiline
                maxRows={2}
                variant="filled"
                sx={{
                  width: "80%",
                }}
                inputProps={{
                  style: {
                    fontSize: "24px",
                    fontFamily: "Cormorant Garamond",
                    fontWeight: "bold",
                  },
                }}
                onChange={(e) => {
                  reponses[inex] = e.target.value;
                  console.log(e.target.value);
                  console.log(reponses);
                }}
              ></TextField>
            </Typography>
            {buttonValider ? (
              <p
                id="regle"
                dangerouslySetInnerHTML={{ __html: j.regle + j.lienQ }}
              />
            ) : (
              <p></p>
            )}
          </div>
        ))}
      </div>
      <Button
        variant="contained"
        type="submit"
        sx={{ margin: "7px 0px 0px 10px", background: "#376f98" }}
        onClick={() => {
          verifReponse();
          setButtonValider(true);
        }}
      >
        Valider
      </Button>
    </div>
  );
}
