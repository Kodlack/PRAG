var express = require("express");
var path = require("path");
var app = express();
const bodyParser = require("body-parser");
const router = require("express").Router();
const bd = require("./test.json");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.get("/exercices", (req, res) => {
  console.log("bd");
  res.status(200).json({ test: "OK" });
});

// exports.default = acces;
