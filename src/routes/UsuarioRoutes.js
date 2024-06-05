const { Router } = require("express");
const UsuarioController = require("../Controllers/UsuarioController");
const verificarJwt = require("../Middlewares/verificarJwt");
const UsuarioValidator = require("../Validators/UsuarioValidator");
const verificarAdmin = require("../Middlewares/verificarAdmin");

const UsuarioRotas = Router();

UsuarioRotas.post("/", UsuarioValidator.create, UsuarioController.create);
UsuarioRotas.get("/", verificarJwt, UsuarioController.read);
UsuarioRotas.delete(
  "/:id",
  verificarJwt,
  verificarAdmin,
  UsuarioValidator.destroy,
  UsuarioController.delete
);
UsuarioRotas.put(
  "/:id",
  verificarJwt,
  verificarAdmin,
  UsuarioValidator.update,
  UsuarioController.update
);

module.exports = UsuarioRotas;
