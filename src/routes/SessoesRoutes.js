const { Router } = require('express');
const SessoesController = require('../Controllers/SessoesController');
const verificarJwt = require('../Middlewares/verificarJwt');
const SessoesValidator = require('../Validators/SessoesValidator');

const SessoesRotas = Router();

SessoesRotas.post(
  '/',
  verificarJwt,
  SessoesValidator.create,
  SessoesController.create,
);

SessoesRotas.get('/', verificarJwt, SessoesController.read);

SessoesRotas.delete(
  '/:id',
  verificarJwt,
  SessoesValidator.destroy,
  SessoesController.delete,
);

module.exports = SessoesRotas;
