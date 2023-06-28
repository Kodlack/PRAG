const mongoose = require("mongoose");

const newQuestion = mongoose.Schema({
  idq: Number,
  enonce: { Debut: String, Fin: String },
  Answers: [String, String],
  correctAnswer: [Number],
  wrongAnswers: [Number],
  regle: String,
  lienQ: String,
});

const question = mongoose.model("question", newQuestion);

exports.question = question;
