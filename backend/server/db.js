const fs = require("fs");
const testbd = fs.readFileSync("./server/test.json");
const jokes = JSON.parse(testbd);

const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const url = process.env.CLEMONGODB;
const client = new MongoClient(url);

mongoose
  .connect(url)
  .then(() => {
    console.log("connecter a MongoBD");
  })
  .catch((error) => {
    console.log(error);
  });

// async function database() {
//   try {
//     // Connexion au serveur
//     await client.connect();
//     console.log("Connexion Base de données Ok");
//     const db = client.db("testDb");
//     const collection = db.collection("exo1");
//     // const insertStuff = await collection.insertMany([jokes]);
//     // console.log(`Documents insérés => ${insertStuff}`);
//     return "done";
//     //return client.db();
//   } catch (e) {
//     console.error(e);
//     throw e;
//   }
// }

// database()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());
