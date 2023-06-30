import React from 'react';
import '../css/Carrousel.css';

const Carrousel = () => {
  return (
    <div className="carrousel">
        <div class="slider">
            <div class="slides">
                <div id="slides-1" class="slide">
                    <h1>Apprendre en s’amusant</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting printing and typesetting printing and typesetting 
                        printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <button class="round-button">Je veux découvrir</button>
                </div>
                <div id="slides-2" class="slide">
                    <h1>2</h1>
                </div>
                <div id="slides-3" class="slide">
                    <h1>3</h1>
                </div>
                <div id="slides-4" class="slide">
                    <h1>4</h1>
                </div>
            </div>
            <div class="slider-nav">
                <a class="slider-navlink" href="#slides-1"></a>
                <a class="slider-navlink" href="#slides-2"></a>
                <a class="slider-navlink" href="#slides-3"></a>
                <a class="slider-navlink" href="#slides-4"></a>
            </div>
        </div>
    </div>
  );
};

export default Carrousel;