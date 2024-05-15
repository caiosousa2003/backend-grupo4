const { Router } = require("express");
const AuthController = require("../Controllers/AuthController");
const AuthValidator = require("../Validators/AuthValidator");

const loginRotas = Router();

loginRotas.post("/", AuthController.login, AuthValidator.login);

module.exports = loginRotas;