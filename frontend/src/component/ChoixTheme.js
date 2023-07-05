import React, { useEffect, useState } from "react";
import "../css/Themes.css";
import "../css/Etiq.css";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "axios";

const ChoixTheme = (props) => {
  const [checked, setChecked] = useState([]);
  const [categorie, setCategorie] = useState([]);

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
        .post("http://localhost:3000/categorie", props.exos)
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

  return (
    <div class="bga" style={{ textAlign: "center" }}>
      <div>
        <div class="htheme">
          <h1 class="htext">
            Choisissez les notions que vous souhaitez exercer
          </h1>
          <p class="stext">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            printing and typesetting printing and typesettingy's standard dummy
            text ever since the 1500s.
          </p>
        </div>
        <p>Niveau choisi : {props.niveau}</p>
      </div>
        <div class="grid-container">
        {["Syntaxe", "Lexique", "Morphologie"].map((j, jdex) => (
          <div class="theme">
            <h1 class="titre">
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 36 } }}
                    // checked={checked[0] && checked[1] && checked[2]}
                    // indeterminate={
                    //   (checked[0] || checked[1] || checked[2]) &&
                    //   !(checked[0] && checked[1] && checked[2])
                    // }
                    // onChange={handleChange1}
                  />
                }
              />
              {j}
            </h1>
            {categorie.map((i, index) => (
              <p class="contenu">
                <FormControlLabel
                  control={
                    <Checkbox
                      name={i.subtheme}
                      // checked={checked[index]}
                      onChange={(e) => {
                        // handleChange2();
                        console.log(e.target.name);
                      }}
                    />
                  }
                />
                {i.subtheme}
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
  );
};

export default ChoixTheme;
