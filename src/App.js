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
const rotas = require("./routes/index");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(cors());
app.use(rotas);
app.use("*", (req,res) => {
  res.status(404).json({ message: `Rota '${req.baseUrl}' não encontrada` });
});

module.exports = app;

