import React from 'react';
import '../css/Carrousel.css';

const Carrousel = () => {

    const onClickGoTo = (link) => {
        window.location.href = link;
        window.open(link, '_blank')
    };

  return (
    <div className="carrousel">
        <div class="slider">
            <div class="slides">
                <div id="slides-1" class="slide">
                    <h1>L'Académie Française</h1>
                    <p>
                    Ce site est propulsé par l'Académie française, veillant à la préservation et à la promotion de la langue française. N'hésitez pas à découvrir leur site officiel.
                    </p>
                    <button class="round-button" onClick={() => onClickGoTo("https://www.academie-francaise.fr/")}>Je veux découvrir</button>
                </div>
                <div id="slides-2" class="slide">
                    <h1>Richelieu vous accompagne !</h1>
                    <p>
                        Vous ne savez pas par quoi commencez ? <br/>
                        Découvrez le mode découverte et laissez vous accompagner par Richelieu en personne au travers des différents exercices disponibles.
                    </p>
                    <a href="/decouverte">
                        <button class="round-button">Je veux découvrir</button>
                    </a>
                </div>
                <div id="slides-3" class="slide">
                    <h1>Ciblez vos lacunes</h1>
                    <p>
                        Ne perdez pas plus de temps et travaillez les notions qui vous intérresssent vraiment !
                    </p>
                    <a href="/notions">
                        <button class="round-button-org">Je veux découvrir</button>
                    </a>
                </div>
            </div>
            <div class="slider-nav">
                <a class="slider-navlink" href="#slides-1"></a>
                <a class="slider-navlink" href="#slides-2"></a>
                <a class="slider-navlink" href="#slides-3"></a>
            </div>
        </div>
    </div>
  );
};

export default Carrousel;