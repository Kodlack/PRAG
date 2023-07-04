export default function TexteTrous(props) {
  console.log(props.value);

  return (
    <div>
      {props.value.map((j, inex) => (
        <div key={inex}>
          <p dangerouslySetInnerHTML={{ __html: j.enonce.debut }} />
          {j.answers.map((k, indexk) => (
            <div>
              {indexk !== j.correctAnswer[0] ? (
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
          <p dangerouslySetInnerHTML={{ __html: j.enonce.fin }} />
          {props.buttonValider ? (
            <p dangerouslySetInnerHTML={{ __html: j.regle + j.lienQ }} />
          ) : (
            <p></p>
          )}
        </div>
      ))}
    </div>
  );
}
