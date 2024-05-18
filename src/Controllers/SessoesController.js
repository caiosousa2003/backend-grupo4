const SessoesModel = require('../Models/SessoesModel');

class SessoesController {
  async create(req, res) {
    try {
      const sessoes = await SessoesModel.create(req.body);

      return res.status(200).json(sessoes);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Algo deu errado', error: error.mensage });
    }
  }

  async read(req, res) {
    try {
      const sessoes = await SessoesModel.find().populate(
        'id_usuario',
        '-senha',
      );

      return res.status(200).json(sessoes);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Algo deu errado', error: error.mensage });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const sessaoEncontrada = await SessoesModel.findById(id);

      if (!sessaoEncontrada)
        return res.status(404).json({ message: 'Sessão não encontrada' });
      await sessaoEncontrada.deleteOne();

      return res.status(200).json({ mensagem: 'Sessao deletada com sucesso' });
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Algo deu errado', error: error.mensage });
    }
  }
}

module.exports = new SessoesController();
