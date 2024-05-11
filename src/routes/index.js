const { Router } = require("express");

const UsuarioRotas = require("./UsuarioRoutes");

const rotas = Router();

rotas.use("/usuarios", UsuarioRotas);

module.exports = rotas;
