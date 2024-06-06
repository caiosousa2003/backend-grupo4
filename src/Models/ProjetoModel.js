const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjetoSchema = new Schema({
  nome: {
    type: String,
    unique: true,
  },
  descricao: String,
  equipe: String,
});

const ProjetoModel = mongoose.model("projetos", ProjetoSchema);

module.exports = ProjetoModel;
