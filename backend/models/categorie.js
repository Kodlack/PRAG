const mongoose = require("mongoose");

const categorieSchema = mongoose.Schema({
  subtheme: String,
});

const categorieModel = mongoose.model("categorie", categorieSchema);

module.exports = categorieModel;