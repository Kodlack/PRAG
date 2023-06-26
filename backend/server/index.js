const http = require("http");
const app = require("./acces.js");
const port = 8000;

const server = http.createServer(app);
server.listen(port, () => console.log("Connecter au localhost : " + port));
