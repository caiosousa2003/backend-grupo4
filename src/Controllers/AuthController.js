const UsuarioModel = require("../Models/UsuarioModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController {
  async login(req, res) {
    try {
      const { email, senha } = req.body;
      const usuarioEncontrado = await UsuarioModel.findOne({ email }).select(
        "+senha"
      );
      if (!usuarioEncontrado)
        return res.status(403).json({ message: "Usuário não existe. Realize o cadastro!" });
      const ehCorrespondente = await bcrypt.compare(
        senha,
        usuarioEncontrado.senha
      );
      if (!ehCorrespondente)
        return res.status(403).json({ message: "Senha Incorreta!" });
      const { senha: hashedsenha, ...usuario } = usuarioEncontrado.toObject();
      const token = jwt.sign(
        {usuario},
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE, }
      );

      res.status(200).json({ token });
    } catch (error) {
      res.status(500);
    }
  }
}

module.exports = new AuthController();
