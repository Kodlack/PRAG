const mongoose = require("mongoose");

//création d'un schéma d'une catégorie
const categorieSchema = mongoose.Schema({
  theme: String,
  subtheme: String,
});

const categorieModel = mongoose.model("categorie", categorieSchema);

module.exports = categorieModel;
