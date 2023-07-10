const categorieModel = require("../models/categorie");
var express = require("express");
const router = express.Router();

//route pour créer une catégorie sur l'espace administrateur
router.post("/admin/cate", async (req, res) => {
  delete req.body._id;
  const { theme, subtheme } = req.body;

  var categorie = new categorieModel({
    theme,
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

//route pour récupérer une catégorie spécifique
router.post("/categorie", (req, res) => {
  console.log(req.body.length);
  categorieModel
    .find({ subtheme: req.body[0].subtheme })
    .then((thing) => {
      console.log(thing);
      res.status(200).json(thing);
    })
    .catch((error) => res.status(404).json({ error }));
});

//route pour récupérer toutes les catégories
router.get("/categorie", (req, res) => {
  categorieModel
    .find()
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(404).json({ error }));
});

//route pour supprimer une catégorie
router.delete("/categorie", (req, res) => {
  categorieModel
    .deleteOne({ subtheme: req.body.subtheme })
    .then(() => res.status(200).json({ message: "Catégorie supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
});

//route pour modifier une catégorie
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
