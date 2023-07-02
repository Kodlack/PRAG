export default function TexteTrous(props) {
  console.log(props.value);

  function toHtml(texte, id) {
    var x = document.getElementById(id);
    x.innerHTML = texte;
    return x.innerHTML;
  }
  return (
    <div>
      {props.value.map((j, inex) => (
        <div key={inex}>
          <p>{j.enonce.debut}</p>
          {j.answers.map((k, indexk) => (
            <div>
              {indexk != j.correctAnswer ? (
                <label key={indexk} id="nomquestions">
                  {k}
                </label>
              ) : (
                <input
                  id="questions"
                  type="text"
                  onClick={(e) => {
                    // reponses[inex] = parseInt(e.target.value);
                  }}
                />
              )}
            </div>
          ))}
          <br />
          <p id="enonceFin">{j.enonce.fin}</p>
          {props.buttonValider ? <p>{toHtml(j.regle, "regle")}</p> : <p></p>}
        </div>
      ))}
    </div>
  );
}
