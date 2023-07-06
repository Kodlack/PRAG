import React from 'react';
import '../css/ResultatInterro.css';
import HeaderResultat from "../component/HeaderResultat";
import ResumeContent from "../component/ResumeContent";
import richelieu from '../photo/Pose1.png';

const ResultatInterro = () => {
  return (
    <div className="resultat-interro">
        <HeaderResultat />
        <div className='content-resultat-interro'>
            <div className='upper-resultat'>
                <div className='resultat-score'>
                    <h1>Félicitations !</h1>
                    <p className='score-final'>Votre score : 16/20</p>
                    <p className='score-time'>en 10 min et 24 secondes</p>
                </div>
                <div className='upper-conseil'>
                    <p>
                        N’hésite pas à consulter mes annotations si tu veux des conseils pour améliorer ton score.
                    </p>
                </div>
            </div>
            <div className='middle-resultat'>
                <ResumeContent />
                <img className='richelieu-resultat' src={richelieu} alt="richelieu" />
            </div>
            <div className='resultat-back-btn'>
                <button class="round-button-resultat-interro">Retour à la sélection</button>
            </div>
        </div>
    </div>
  );
};

export default ResultatInterro;