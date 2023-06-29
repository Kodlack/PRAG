const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  idq: Number,
  enonce: { debut: String, fin: String },
  answers: [String],
  correctAnswer: [Number],
  wrongAnswers: [Number],
  regle: String,
  lienQ: String,
});

const questionModel = mongoose.model("question", questionSchema);

module.exports = questionModel;
