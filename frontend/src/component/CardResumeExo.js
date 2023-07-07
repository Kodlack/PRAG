import React from 'react';
import '../css/CardResumeExo.css';
import richelieu from '../photo/Pose3.png';

const CardResumeExo = () => {

  return (
    <div className="card-resume-exo">
        <p>Exercice n°1 (Grammaire)</p>
        <div className='resume-raw'>
            <div className='richelieu'>
                <img src={richelieu} alt="richelieu" />
            </div>
            <div className='resume-info'>
                <div className='resume-exo'>
                    <span class="resultat-question">1</span>
                    <span class="resultat-question">2</span>
                    <span class="resultat-question">3</span>
                    <span class="resultat-question">4</span>
                </div>
                <button className='plus-btn'>Voir plus</button>
                <div className='resume-conseil'>
                    <p>Vous devriez peut-être réviser cette notion, n’hésitez pas à vous entraîner.</p>
                    <button className=''>Je veux m'entraîner</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CardResumeExo;
