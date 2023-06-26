const path = require("path");
const acces = require("./acces.js");
const { database } = require("./db.js");

const basedir = path.normalize(path.dirname(__dirname));

//mécanisme de sécurité qui permet de contrôler l'accès aux ressources entre des domaines différents

const express = require("express");
const app = express();

//Jamais apres les ROUTES, ne pas le deplacer, rajouter simplement a l'interieur si bsn, lors des cookies

(async () => {
  const oui = await database();
  app.use("/acces", acces.default(oui));
})();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Démarre le serveur
app.on("close", () => {});

exports.default = app;
