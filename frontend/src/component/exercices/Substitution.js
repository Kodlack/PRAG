import { Button, TextField, Typography } from "@mui/material";
import { fontFamily, fontSize } from "@mui/system";
import { useEffect, useState } from "react";

export default function Substitution(props) {
  const [reponses, setReponses] = useState([null, null, null, null, null]);
  const [buttonValider, setButtonValider] = useState(false);

  const resetState = () => {
    setReponses([null, null, null, null, null]);
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
            {/* <input className="input"
              id="questions"
              type="text"
              onChange={(e) => {
                reponses[inex] = e.target.value;
                console.log(reponses[inex]);
              }}
            ></input> */}
            <Typography fontSize={"24px"}>
            <TextField 
            multiline
            maxRows={2}
            variant="filled"
            sx={{
              width:"80%",
            }}
            inputProps={{ style: { fontSize : "24px", fontFamily : "Cormorant Garamond", fontWeight : "bold" } }}
            onChange={(e) => {
                reponses[inex] = e.target.value;
                console.log(reponses[inex]);
              }}>
            </TextField>
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
