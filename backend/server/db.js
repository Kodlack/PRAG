const fs = require("fs");
const testbd = fs.readFileSync("./server/test.json");
const jokes = JSON.parse(testbd);
console.log(jokes.question);
const { MongoClient } = require("mongodb");

async function database() {
  const url = "mongodb://localhost:27017/academieFr";
  const client = new MongoClient(url);

  try {
    // Connexion au serveur
    await client.connect();
    return client.db();
  } catch (e) {
    console.error(e);
    throw e;
  }
}

database().catch(console.error);

module.exports = { database };
