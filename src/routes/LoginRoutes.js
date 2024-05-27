const { Router } = require("express");
const AuthController = require("../Controllers/AuthController");
const AuthValidator = require("../Validators/AuthValidator");

const loginRotas = Router();

loginRotas.post("/", AuthValidator.login, AuthController.login);

module.exports = loginRotas;