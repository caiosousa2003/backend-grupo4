const { Router } = require('express');
const SessoesController = require('../Controllers/SessoesController');
const verificarJwt = require('../Middlewares/verificarJwt');
const sessoesValidator = require('../Validators/SessoesValidator');

const sessoessRotas = Router();

sessoessRotas.post(
  '/sessoes',
  sessoesValidator.create,
  SessoesController.create,
);
sessoessRotas.get('/sessoes', SessoesController.read);
sessoessRotas.delete(
  '/sessoes/:id',
  sessoesValidator.destroy,
  SessoesController.delete,
);
