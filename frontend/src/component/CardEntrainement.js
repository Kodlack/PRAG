import "../css/CardEntrainement.css";

const CardEntrainement = ({ activeButton, setActiveButton }) => {
  const handleClick = (contentId) => {
    setActiveButton(contentId);
  };

  return (
    <div className="card-entrainement">
      <h2>Mode entraînement</h2>
      <p>
        Explorez un mode entraînement sur mesure, vous permettant 
        de sélectionner les notions qui vous intéressent et de 
        réaliser des exercices à l'infini, avec des résultats détaillés 
        à la fin de chaque exercice.
      </p>
      <h3>Choisir une difficulté :</h3>
      <div className="buttons-mode">
        <button
          id="feButton"
          onClick={() => handleClick("feContent")}
          className={activeButton === "feContent" ? "active" : ""}
        >
          Facile
        </button>
        <button
          id="meButton"
          onClick={() => handleClick("meContent")}
          className={activeButton === "meContent" ? "active" : ""}
        >
          Moyen
        </button>
        <button
          id="deButton"
          onClick={() => handleClick("deContent")}
          className={activeButton === "deContent" ? "active" : ""}
        >
          Difficile
        </button>
      </div>
      <div className="mode-content">
        <p
          id="feContent"
          className={activeButton === "feContent" ? "active-content" : ""}
        >
          Le mode Facile vous propose des exercice de niveau 1.
        </p>
        <p
          id="meContent"
          className={activeButton === "meContent" ? "active-content" : ""}
        >
          Le mode Moyen vous propose des exercice de niveau 2.
        </p>
        <p
          id="deContent"
          className={activeButton === "deContent" ? "active-content" : ""}
        >
          Le mode Moyen vous propose des exercice de niveau 3.
        </p>
      </div>
    </div>
  );
};

export default CardEntrainement;
