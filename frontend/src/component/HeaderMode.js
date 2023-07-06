import React from 'react';
import '../css/HeaderMode.css';
import academie from '../photo/motif-academie.png';

const HeaderMode = () => {
  return (
    <div className="header-mode">
        <img src={academie} alt="academie" />
        <h1>Choisissez un mode d’apprentissage</h1>
        <p>
          Donnez libre cours à votre apprentissage en sélectionnant le mode 
          entraînement pour pratiquer intensivement, puis testez-vous avec 
          confiance en basculant vers le mode interrogation, afin d'évaluer 
          vos compétences de manière approfondie.
        </p>
    </div>
  );
};

export default HeaderMode;