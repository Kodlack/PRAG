import "../css/CardInterro.css";

const CardInterro = ({ activeButton, setActiveButton }) => {
  const handleClick = (contentId) => {
    setActiveButton(contentId);
  };

  return (
    <div className="card-interro">
      <h2>Mode interrgation</h2>
      <p>
        Sélectionner la difficulté souhaitée et vous confronter 
        à un nombre prédéfini d'exercices. À la fin de la session, 
        un affichage des résultats mettra en évidence vos performances 
        globales.
      </p>
      <h3>Choisir une difficulté :</h3>
      <div className="buttons-mode">
        <button
          id="fiButton"
          onClick={() => {
            handleClick("fiContent");
          }}
          className={activeButton === "fiContent" ? "active" : ""}
        >
          Facile
        </button>
        <button
          id="miButton"
          onClick={() => handleClick("miContent")}
          className={activeButton === "miContent" ? "active" : ""}
        >
          Moyen
        </button>
        <button
          id="diButton"
          onClick={() => handleClick("diContent")}
          className={activeButton === "diContent" ? "active" : ""}
        >
          Difficile
        </button>
      </div>
      <div className="mode-content">
        <p
          id="fiContent"
          className={activeButton === "fiContent" ? "active-content" : ""}
        >
          Le mode Facile vous propose 15 exercices de niveau 1.
        </p>
        <p
          id="miContent"
          className={activeButton === "miContent" ? "active-content" : ""}
        >
          Le mode Moyen vous propose 20 exercices de niveau 2.
        </p>
        <p
          id="diContent"
          className={activeButton === "diContent" ? "active-content" : ""}
        >
          Le mode Difficile vous propose 25 exercices de niveau 3.
        </p>
      </div>
    </div>
  );
};

export default CardInterro;
