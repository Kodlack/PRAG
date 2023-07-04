import "../css/CardInterro.css";

const CardInterro = ({ activeButton, setActiveButton }) => {
  const handleClick = (contentId) => {
    setActiveButton(contentId);
  };

  return (
    <div className="card-interro">
      <h2>Mode interrgation</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        printing and typesetting printing and typesettingy's standard dummy text
        ever since the 1500s.
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
          Le mode Facile is simply dummy text of the printing and typesetting.
        </p>
        <p
          id="miContent"
          className={activeButton === "miContent" ? "active-content" : ""}
        >
          Le mode Moyen is simply dummy text of the printing and typesetting.
        </p>
        <p
          id="diContent"
          className={activeButton === "diContent" ? "active-content" : ""}
        >
          Le mode Difficile is simply dummy text of the printing and
          typesetting.
        </p>
      </div>
    </div>
  );
};

export default CardInterro;
