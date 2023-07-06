import React from 'react';
import '../css/HeaderResultat.css';
import academie from '../photo/motif-academie-grey.png';

const HeaderResultat = () => {
  return (
    <div className="header-resultat">
        <img src={academie} alt="academie" />
        <h1>Vos résultats</h1>
    </div>
  );
};

export default HeaderResultat;