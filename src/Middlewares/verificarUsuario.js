const jwt = require("jsonwebtoken");

function verificarUsuario(req, res, next) {
  const usuarioId = req.params.id_usuario || req.body.id_usuario;
  const authHeader = req.headers.authorization || req.headers.Authorization;
  const [bearer, token] = authHeader.split(" ");
  const { usuario } = jwt.decode(token);

  console.log(usuario._id);
  console.log(usuarioId);

  if (!usuario.nivel && usuario._id !== usuarioId)
    return res.status(401).json({ message: "Usuário sem permissão!" });
  next();
}

module.exports = verificarUsuario;
