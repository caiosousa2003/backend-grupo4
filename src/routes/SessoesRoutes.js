const { Router } = require('express');
const SessoesController = require('../Controllers/SessoesController');
const verificarJwt = require('../Middlewares/verificarJwt');
const SessoesValidator = require('../Validators/SessoesValidator');

const SessoesRotas = Router();

SessoesRotas.post(
  '/',
  SessoesValidator.create,
  SessoesController.create,
);

SessoesRotas.get('/', SessoesController.read);

SessoesRotas.delete(
  '/:id',
  SessoesValidator.destroy,
  SessoesController.delete,
);

module.exports = SessoesRotas;
