const mongoose = require("mongoose");
require('dotenv').config();

async function startDB() {
  await mongoose.connect(process.env.DATABASE_URI);
  console.log("Banco de dados inicializado");
}

module.exports = startDB;