var express = require("express");
var path = require("path");
var app = express();
const router = require("express").Router();
const bd = require("./test.json");

app.get("/", (req, res) => {
  console.log(bd);
  res.send(bd);
});
