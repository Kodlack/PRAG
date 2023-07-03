const categorieModel = require("../models/categorie");
var express = require("express");
const router = express.Router();

router.post("/admin/cate", async (req, res) => {
  const { subtheme } = req.body;

  var categorie = new categorieModel({
    subtheme,
  });

  try {
    categorie = await categorie.save();
    res.send(categorie);
    console.log("Categorie ajouté !");
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/categorie", (req, res) => {
  categorieModel
    .find()
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(404).json({ error }));
});

router.delete("/categorie", (req, res) => {
  categorieModel
    .delete({ subtheme: req.body.subtheme })
    .then(() => res.status(200).json({ message: "Catégorie supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
});

router.put("/categorie", (req, res) => {
  categorieModel
    .updateOne(
      { subtheme: "Accord du participe passé (avec l’auxiliaire avoir)" },
      { ...req.body, _id: 6 }
    )
    .then(() => res.status(200).json({ message: "Catégorie modifié !" }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = router;
