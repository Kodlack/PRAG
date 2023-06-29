const questionModel = require("../models/question");
var express = require("express");
const router = express.Router();

router.post("/question", async (req, res) => {
  const {
    idq,
    subtheme,
    enonce,
    answers,
    correctAnswer,
    wrongAnswers,
    regle,
    lienQ,
  } = req.body;

  var question = new questionModel({
    idq,
    subtheme,
    enonce,
    answers,
    correctAnswer,
    wrongAnswers,
    regle,
    lienQ,
  });

  try {
    question = await question.save();
    res.send(question);
    console.log("Question ajouté !");
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/question", (req, res) => {
  questionModel
    .find({ subtheme: "rien" })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(404).json({ error }));
});

router.delete("/question", (req, res) => {
  questionModel
    .deleteAll()
    .then(() => res.status(200).json({ message: "Objet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
});

router.put("/question", (req, res) => {
  questionModel
    .updateOne({ subtheme: "rien" }, { ...req.body, subtheme: "tout" })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = router;
