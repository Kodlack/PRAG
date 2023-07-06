import React, { useEffect, useState } from "react";
import "../css/Themes.css";
import "../css/Etiq.css";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "axios";

const ChoixTheme = (props) => {
  const [checked, setChecked] = useState([]);
  const [categorie, setCategorie] = useState([]);
  const [choixNotions, setChoixNotions] = useState([]);
  const [activeButtonQuestion, setActiveButtonQuestion] = useState([
    new Array(5).fill(false),
    new Array(5).fill(false),
    new Array(5).fill(false),
  ]);

  const handleClick = (i, content) => {
    //if (buttonValider) return; // Ne pas gérer le clic si le bouton "Valider" a été cliqué
    const newActiveButtonQuestion = [...activeButtonQuestion];
    newActiveButtonQuestion[i][content] = newActiveButtonQuestion[i][content] == true ? false : true;
    setActiveButtonQuestion(newActiveButtonQuestion);
  };

  const myStyle = {
    marginBottom: "40px",
    width: "20%",
    backgroundColor: "#376F98",
  };

  useEffect(() => {
    console.log("props.exos");
    console.log(props.exos);
    const fetchData = async () => {
      const date = await axios
        .get("http://localhost:3000/categorie")
        .then((res) => {
          setCategorie(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData().catch(console.error);
  }, [props.choix]);

  const handleChange1 = (event) => {
    checked.push(event.target.checked);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1], checked[2]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked, checked[2]]);
  };

  const handleChange4 = (event) => {
    setChecked([checked[0], checked[1], event.target.checked]);
  };

  const [checkedState, setCheckedState] = useState(
    new Array(13).fill(true)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  

  return (
    <div class="bga" style={{ textAlign: "center" }}>
      <div>
        <div class="htheme">
          <h1 class="htext">
            Choisissez les notions que vous souhaitez exercer
          </h1>
          <p class="stext">
            Plongez dans une expérience d'apprentissage personnalisée 
            grâce à la possibilité de sélectionner les notions qui vous intéressent.
          </p>
        </div>
      </div>
      <div class="middle-theme">
        <p class="htext">Niveau choisi : {props.niveau}</p>
        <p class="htext">Mode choisi : {props.mode}</p>
        <div class="grid-container">
          {["Syntaxe", "Lexique", "Morphologie"].map((j, jdex) => (
            <div class="theme">
              <h1 class="titre">
  {/* 
  <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 36 } }}
                      checked={activeButtonQuestion[jdex][0] && activeButtonQuestion[jdex][1] && activeButtonQuestion[jdex][2]}
                      // indeterminate={
                      //   (checked[0] || checked[1] || checked[2]) &&
                      //   !(checked[0] && checked[1] && checked[2])
                      // }
                      // onChange={handleChange1}
                    />
                  }
                />
  */}
            
                {j}
              </h1>
              {categorie.map((i, index) => (
                <p class="contenu">
                  {i.theme == j ? (
                    /*<Checkbox
                      name={i.subtheme}
                      checked={checkedState[index]}
                      // checked={checked[index]}
                      onChange={(e) => {
                        handleOnChange(index)
                        // handleChange2();
                        choixNotions.push(e.target.name);
                        console.log(choixNotions);
                      }}
                    />*/
                    <button
                          //name={i.theme}
                          style={{width:"300px"}}
                          onClick={(e) => handleClick(jdex, index)}
                          className={
                            activeButtonQuestion[jdex][index] == true ? "active2" : "square-button"
                          }
                          //disabled={boutonsDesactives} // Désactiver les boutons de réponse
                      >
                        {i.subtheme}
                      </button>
                  ) : (
                    <></>
                  )}
                  
                </p>
              ))}
              {/* <p class="contenu">
              <FormControlLabel
                control={
                  <Checkbox checked={checked[1]} onChange={handleChange3} />
                }
              />
              Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
            </p>
            <p class="contenu">
              <FormControlLabel
                control={
                  <Checkbox checked={checked[2]} onChange={handleChange4} />
                }
              />
              Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
            </p> */}
            </div>
          ))}
        </div>
        {props.mode == "entrainement" ? (
          <a href="/entrainement/exercice/1">
            <button class="round-button" style={myStyle}>
              Démarrer
            </button>
          </a>
        ) : (
          <a href="/exercice/1">
            <button class="round-button" style={myStyle}>
              Démarrer
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ChoixTheme;
