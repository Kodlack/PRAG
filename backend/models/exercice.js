const mongoose = require("mongoose");

const ExoSchema = mongoose.Schema({
  ide: Number,
  theme: String,
  subtheme: String,
  level: Number,
  type: String,
  consigne: String,
  explication: String,
  lienExo: String,
  questions: [
    {
      idq: Number,
      enonce: { debut: String, fin: String },
      answers: [String],
      correctAnswer: [Number],
      wrongAnswers: [Number],
      regle: String,
      lienQ: String,
    },
    {
      idq: Number,
      enonce: { debut: String, fin: String },
      answers: [String, String],
      correctAnswer: [Number],
      wrongAnswers: [Number],
      regle: String,
      lienQ: String,
    },
    {
      idq: Number,
      enonce: { debut: String, fin: String },
      answers: [String, String],
      correctAnswer: [Number],
      wrongAnswers: [Number],
      regle: String,
      lienQ: String,
    },
    {
      idq: Number,
      enonce: { debut: String, fin: String },
      answers: [String, String],
      correctAnswer: [Number],
      wrongAnswers: [Number],
      regle: String,
      lienQ: String,
    },
    {
      idq: Number,
      enonce: { debut: String, fin: String },
      answers: [String, String],
      correctAnswer: [Number],
      wrongAnswers: [Number],
      regle: String,
      lienQ: String,
    },
  ],
});

const ExoModel = mongoose.model("exercice", ExoSchema);

module.exports = ExoModel;
