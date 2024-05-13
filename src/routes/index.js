const { Router } = require("express");

const UsuarioRotas = require("./UsuarioRoutes");
const ProjetoRotas = require("./ProjetoRoutes");

const rotas = Router();

rotas.use("/usuarios", UsuarioRotas);
rotas.use("/projetos",ProjetoRotas);

module.exports = rotas;
