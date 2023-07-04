import React, { useState } from 'react';
import '../css/ChoixMode.css';
import HeaderMode from "../component/HeaderMode";
import CardEntrainement from "../component/CardEntrainement";
import CardInterro from "../component/CardInterro";

const ChoixMode = () => {
  const [activeButton, setActiveButton] = useState('');

  return (
    <div className="choix-mode">
        <HeaderMode />
        <div className='content-choix-mode'>
            <div className='choix-carte'>
              <CardEntrainement activeButton={activeButton} setActiveButton={setActiveButton} />
              <CardInterro activeButton={activeButton} setActiveButton={setActiveButton} />
            </div>
            <button class="round-button-choix-mode">Étape suivante</button>
        </div>
    </div>
  );
};

export default ChoixMode;