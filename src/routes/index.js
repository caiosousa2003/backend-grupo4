const { Router } = require('express');

const UsuarioRotas = require('./UsuarioRoutes');
const sessoesRotas = require('./SessoesRoutes');
const ProjetoRotas = require('./ProjetoRoutes');
const loginRotas = require('./LoginRoutes');

const rotas = Router();

rotas.use('/usuarios', UsuarioRotas);
rotas.use('/sessoes', sessoesRotas);
rotas.use('/projetos', ProjetoRotas);
rotas.use('/login', loginRotas);

module.exports = rotas;
