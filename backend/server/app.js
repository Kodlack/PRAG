var express = require("express");
var app = express();
var path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("express").Router();
const bd = require("./test.json");

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

function appli() {
  app.get("/exercices", (req, res) => {
    console.log("bd");
    res.send({ test: "OK" });
  });
}

appli();

exports.default = appli;
