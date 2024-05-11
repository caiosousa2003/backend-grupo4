const mongoose = require("mongoose");
require('dotenv').config({path: '../../.env'});

console.log(process.env.DATABASE_URI);

async function startDB() {
  await mongoose.connect(process.env.DATABASE_URI);
  console.log("Banco de dados inicializado");
}

module.exports = startDB;