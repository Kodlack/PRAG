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

// function acces(db) {
//   const router = express.Router();
//   // On utilise JSON
//   router.use(express.json());
//   // simple logger for this router's requests
//   // all requests to this router will first hit this middleware
//   router.use((req, res, next) => {
//     console.log("API: method %s, path %s", req.method, req.path);
//     console.log("Body", req.body);
//     next();
//   });

// }

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/exercices", (req, res) => {
  console.log("bd");
  res.status(200).json({ test: "OK" });
});

// exports.default = acces;
