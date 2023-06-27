const fs = require("fs");
const testbd = fs.readFileSync("./server/test.json");
const jokes = JSON.parse(testbd);

const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://admin:SDq6U1eTSGypImn5@testacad.a4jfm6i.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function database() {
  try {
    // Connexion au serveur
    await client.connect();
    console.log("Connexion Ok");
    const db = client.db("testDb");
    const collection = db.collection("exo1");
    const insertStuff = await collection.insertMany([jokes]);
    console.log(`Documents insérés => ${insertStuff}`);
    return "done";
    //return client.db();
  } catch (e) {
    console.error(e);
    throw e;
  }
}

database()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

var express = require("express");
var path = require("path");
var app = express();
const bodyParser = require("body-parser");
const router = require("express").Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.get("/exercices", (req, res) => {
  console.log("bd");
  res.status(200).json({ test: "OK" });
});
