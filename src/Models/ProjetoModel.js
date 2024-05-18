const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjetoSchema = new Schema({
  nome: {
    type: String,
    unique: true,
  },
  descricao: String,
});

const ProjetoModel = mongoose.model('projetos', ProjetoSchema);

module.exports = ProjetoModel;
