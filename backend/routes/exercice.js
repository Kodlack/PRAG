const ExoModel = require("../models/exercice");
var express = require("express");
const router = express.Router();

router.post("/admin/exercice", async (req, res) => {
  const {
    ide,
    theme,
    subtheme,
    level,
    type,
    consigne,
    explication,
    lienExo,
    questions,
  } = req.body;

  var exo = new ExoModel({
    ide,
    theme,
    subtheme,
    level,
    type,
    consigne,
    explication,
    lienExo,
    questions,
  });

  try {
    exo = await exo.save();
    res.send(exo);
    console.log("Exercice ajouté !");
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/exercices", (req, res) => {
  ExoModel.find({ ide: 1 })
    .then((exercice) => res.status(200).json(exercice))
    .catch((error) => res.status(404).json({ error }));
});

router.delete("/exercices", (req, res) => {
  ExoModel.deleteOne({ ide: 1 })
    .then(() => res.status(200).json({ message: "Objet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
});

router.put("/exercices", (req, res) => {
  ExoModel.updateOne({ ide: 1 }, { ...req.body, ide: 2 })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = router;
