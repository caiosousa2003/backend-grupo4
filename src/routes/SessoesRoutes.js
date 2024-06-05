const { Router } = require("express");
const SessoesController = require("../Controllers/SessoesController");
const verificarJwt = require("../Middlewares/verificarJwt");
const SessoesValidator = require("../Validators/SessoesValidator");
const verificarUsuario = require("../Middlewares/verificarUsuario");

const SessoesRotas = Router();

SessoesRotas.post(
  "/",
  verificarJwt,
  verificarUsuario,
  SessoesValidator.create,
  SessoesController.create
);

SessoesRotas.get("/", verificarJwt, SessoesController.read);

SessoesRotas.delete(
  "/:id_usuario",
  verificarJwt,
  verificarUsuario,
  SessoesValidator.destroy,
  SessoesController.delete
);

module.exports = SessoesRotas;
