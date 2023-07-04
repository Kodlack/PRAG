import React, { useEffect, useState } from "react";
import "../css/Themes.css";
import axios from "axios";

export default function Themes(props) {
  const [categorie, setCategorie] = useState([]);

  const myStyle = {
    marginBottom: "40px",
    width: "20%",
    backgroundColor: "#376F98",
  };

  useEffect(() => {
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
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div class="bga">
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
      </div>
      <div class="grid-container">
        {categorie.map((i, index) => (
          <div class="theme">
            <h1 class="titre">{i.subtheme}</h1>
            <p class="contenu">
              Lorem Ipsum is simply dummy text of the printing and typ and
              typesetting printing and typesettingy's standard dummy text ever
              since the 1500s.
            </p>
            <button class="square-button">Selectionner</button>
          </div>
        ))}
      </div>
      <a href="/exercice/1">
        <button class="round-button" style={myStyle}>
          Démarrer
        </button>
      </a>
    </div>
  );
}
