import React from 'react';
import '../css/HeaderMode.css';
import academie from '../photo/motif-academie.png';

const HeaderMode = () => {
  return (
    <div className="header-mode">
        <img src={academie} alt="academie" />
        <h1>Choisissez un mode d’apprentissage</h1>
        <p>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting printing and typesetting printing and 
            typesettingy's standard dummy text ever since the 1500s.
        </p>
    </div>
  );
};

export default HeaderMode;