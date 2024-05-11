const { Router } = require("express");
const UsuarioController = require("../Controllers/UsuarioController");
const UsuarioValidator = require("../Validators/UsuarioValidator");

const UsuarioRotas = Router();

UsuarioRotas.post('/', UsuarioValidator.create, UsuarioController.create);
UsuarioRotas.get('/', UsuarioController.read);
UsuarioRotas.delete('/:id', UsuarioValidator.destroy, UsuarioController.delete);
UsuarioRotas.put('/:id', UsuarioValidator.update, UsuarioController.update);


module.exports = UsuarioRotas;