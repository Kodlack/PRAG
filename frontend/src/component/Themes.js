import React from 'react';
import '../css/Themes.css';
import Etiq from './Etiq';
import Navigation from './Navigation';

const Themes = () => {
  const myStyle = {
    marginBottom:"40px",
    width:"20%",
    backgroundColor: "#376F98"
  };
  return (
    <div style={{textAlign:'center'}}>
    <div class="bga">
      <Navigation></Navigation>
      <div class="htheme">
      <h1 class="htext">Choisissez les notions que vous souhaitez exercer</h1>
      <p class="stext">Lorem Ipsum is simply dummy text of the printing and typesetting printing and typesetting printing and typesettingy's standard dummy text ever since the 1500s.</p>
      </div>
      </div>
      <div class="grid-container">
    <Etiq></Etiq>
    <Etiq></Etiq>
    <Etiq></Etiq>
    <Etiq></Etiq>
    </div>  
    <button class="round-button" style={myStyle}>Démarrer</button>
    </div>
  );
};

export default Themes;