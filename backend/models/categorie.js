const mongoose = require("mongoose");

const categorieSchema = mongoose.Schema({
  _id: Number,
  subtheme: String,
});

const categorieModel = mongoose.model("categorie", categorieSchema);

module.exports = categorieModel;
