const mongoose = require("mongoose");

const newExo = mongoose.Schema({
  ide: Number,
  subtheme: String,
  level: Number,
  type: String,
  Consigne: String,
  Explication: String,
  lienExo: String,
  questions: [Object],
});

const exercice = mongoose.model("exercice", newExo);

exports.exercice = exercice;
