const { Router } = require('express');
const ProjetoController = require('../Controllers/ProjetoController');
const ProjetoValidator = require('../Validators/ProjetoValidator');
const verificarJwt = require('../Middlewares/verificarJwt');
const verificarAdmin = require('../Middlewares/verificarAdmin');

const ProjetoRotas = Router();

ProjetoRotas.post('/', verificarJwt, verificarAdmin, ProjetoValidator.create, ProjetoController.create);
ProjetoRotas.get('/', verificarJwt, ProjetoController.read);
ProjetoRotas.delete('/:id', verificarJwt, verificarAdmin, ProjetoValidator.destroy, ProjetoController.delete);
ProjetoRotas.put('/:id', verificarJwt, verificarAdmin, ProjetoValidator.update, ProjetoController.update);

module.exports = ProjetoRotas;
