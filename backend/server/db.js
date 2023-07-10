const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

//url de votre clé mongodb
const url = process.env.CLEMONGODB;
const client = new MongoClient(url);

//lancer la base de donnée mongodb
mongoose
  .connect(url)
  .then(() => {
    console.log("connecter a MongoBD");
  })
  .catch((error) => {
    console.log(error);
  });
