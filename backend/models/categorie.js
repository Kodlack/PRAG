const mongoose = require("mongoose");

const newCategorie = mongoose.Schema({
  subtheme: String,
});

const categorie = mongoose.model("categorie", newCategorie);

exports.categorie = categorie;
