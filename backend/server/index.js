const db = require("./db");

const cate = require("../routes/categorie.js");
// const exo = require("../routes/exercice.js");
const donneeExo = require("./app.js");
const port = 8000;

var express = require("express");
// const router = express.Router();
var app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", donneeExo);
app.use("/", cate);
// app.use("/exo", exo);
app.listen(port, () => console.log("Connecter au localhost : " + port));
