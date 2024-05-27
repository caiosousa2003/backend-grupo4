const { Router } = require('express');

const UsuarioRotas = require('./UsuarioRoutes');
const SessoesRotas = require('./SessoesRoutes');
const ProjetoRotas = require('./ProjetoRoutes');
const loginRotas = require('./LoginRoutes');

const rotas = Router();

rotas.use('/usuarios', UsuarioRotas);
rotas.use('/sessoes', SessoesRotas);
rotas.use('/projetos', ProjetoRotas);
rotas.use('/login', loginRotas);

module.exports = rotas;
