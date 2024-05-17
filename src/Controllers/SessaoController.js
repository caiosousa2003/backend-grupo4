const SessoesModel = require('../Models/SessaoModel');

class SessoesController {
  async create(req, res) {
    const sessoes = await SessoesModel.create(req.body);

    return res.status(200).json(sessoes);
  }

  async read(req, res) {
    const sessoes = await SessoesModel.find();

    return res.status(200).json(sessoes);
  }

  update(req, res) {}

  async delete(req, res) {
    const { id } = req.params;
  }
}

module.exports = new SessoesController();
