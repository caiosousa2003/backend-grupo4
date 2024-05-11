/*

// TESTE - ABRIR SERVIDOR

const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(8000, () => console.log("Servidor rodando!"));

*/

// TESTE - ABRIR BANCO DE DADOS

const express = require("express");
const rotas = require("./routes");

const app = express();

app.use(express.json());
app.use(rotas);

module.exports = app;

