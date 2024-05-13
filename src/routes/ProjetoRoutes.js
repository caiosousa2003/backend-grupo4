const { Router } = require("express");
const ProjetoController = require("../Controllers/ProjetoController"); 
const ProjetoValidator = require("../Validators/ProjetoValidator");


const ProjetoRotas = Router();

ProjetoRotas.post('/projetos',ProjetoValidator.create,ProjetoController.create);
ProjetoRotas.get('/projetos', ProjetoController.read);
ProjetoRotas.delete('/projetos/:id', ProjetoValidator.destroy,ProjetoController.delete);
ProjetoRotas.put('/projetos/:id', ProjetoValidator.update,ProjetoController.update);


module.exports = ProjetoRotas;
