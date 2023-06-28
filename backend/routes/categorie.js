const categorieModel = require("../models/categorie");
var express = require("express");
const router = express.Router();

router.post("/exercices", async (req, res) => {
  const { subtheme } = req.body;

  var categorie = new categorieModel({
    subtheme,
  });

  try {
    categorie = await categorie.save();
    res.send(categorie);
    console.log("categorie envoyé");
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/exercices", (req, res) => {
  categorieModel
    .find({ subtheme: "rien" })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(404).json({ error }));
});

router.delete("/exercices", (req, res) => {
  categorieModel
    .deleteOne({ subtheme: "gr" })
    .then(() => res.status(200).json({ message: "Objet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
});

router.put("/exercices", (req, res) => {
  categorieModel
    .updateOne({ subtheme: "rien" }, { ...req.body, subtheme: "tout" })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = router;
