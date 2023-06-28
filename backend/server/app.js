const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
var app = express();
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const fs = require("fs");
const testbd = fs.readFileSync("./server/test.json");
const jokes = JSON.parse(testbd);

router.get("/exercices", (req, res) => {
  console.log("bd");
  //   res.send(jokes);
});

module.exports = router;
