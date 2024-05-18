const { Router } = require('express');
const ProjetoController = require('../Controllers/ProjetoController');
const ProjetoValidator = require('../Validators/ProjetoValidator');

const ProjetoRotas = Router();

ProjetoRotas.post('/', ProjetoValidator.create, ProjetoController.create);
ProjetoRotas.get('/', ProjetoController.read);
ProjetoRotas.delete('/:id', ProjetoValidator.destroy, ProjetoController.delete);
ProjetoRotas.put('/:id', ProjetoValidator.update, ProjetoController.update);

module.exports = ProjetoRotas;
