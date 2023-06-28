const { exercice } = require("../models/exercice");

var express = require("express");
const router = express.Router();

router.post("/exo", async (req, res) => {
  const { idq, enonce, Answers, correctAnswer, wrongAnswers, regle, lienQ } =
    req.body;

  let exo = new categorie({
    idq,
    enonce,
    Answers,
    correctAnswer,
    wrongAnswers,
    regle,
    lienQ,
  });

  try {
    exo = await exo.save();
    res.send(exo);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
