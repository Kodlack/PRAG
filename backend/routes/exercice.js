const ExoModel = require("../models/exercice");
var express = require("express");
var app = express();
const router = express.Router();

//créer dans la base de données des exercices côté admin
router.post("/admin/exo", async (req, res) => {
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

router.get("/exercice", (req, res, next) => {
  ExoModel.find(req.body)
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(404).json({ error }));
});

app.use("/exercice", (req, res, next) => {
  ExoModel.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }));
});

//récupérer des exercices
router.post("/exercice/:ide", (req, res) => {
  ExoModel.find({ ide: req.body.ide })
    .then((exercice) => {
      res.send(exercice);
    })
    .catch((error) => res.status(404).json({ error }));
});

router.delete("/exercice", (req, res) => {
  ExoModel.deleteOne({ ide: req.body.ide })
    .then(() => res.status(200).json({ message: "Exercice supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
});

router.put("/exercices", (req, res) => {
  ExoModel.updateOne({ ide: 1 }, { ...req.body, ide: 2 })
    .then(() => res.status(200).json({ message: "Exercice modifié !" }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = router;
