// const http = require("http");
const db = require("./db");

const cate = require("../routes/categorie.js");
const exo = require("../routes/exercice.js");
const port = 8000;

var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/admin", cate);
app.use("/exo", exo);
// const server = http.createServer(app);
app.listen(port, () => console.log("Connecter au localhost : " + port));

const fs = require("fs");
const testbd = fs.readFileSync("./server/test.json");
const jokes = JSON.parse(testbd);

app.get("/exercices", (req, res) => {
  console.log("bd");
  res.send(jokes);
});
