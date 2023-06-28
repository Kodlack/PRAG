const fs = require("fs");
const testbd = fs.readFileSync("./server/test.json");
const jokes = JSON.parse(testbd);

const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const url =
  "mongodb+srv://admin:SDq6U1eTSGypImn5@testacad.a4jfm6i.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

mongoose.connect(url).then(() => {
  console.log("Connexion Base de données Ok");
});

async function database() {
  try {
    // Connexion au serveur
    await client.connect();
    console.log("Connexion Base de données Ok");
    const db = client.db("testDb");
    const collection = db.collection("exo1");
    // const insertStuff = await collection.insertMany([jokes]);
    // console.log(`Documents insérés => ${insertStuff}`);
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
