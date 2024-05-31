const  jwt  = require("jsonwebtoken");

function verificarAdmin(req, res, next){
    const authHeader = req.headers.authorization || req.headers.Authorization;

    const [bearer, token] = authHeader.split(" ");

    const {usuario} = jwt.decode(token);
    if(!usuario.nivel) return res.status(403).json({ message: "Usuário sem permissão!" });

    req.usuarioId = usuario._id;

    next();
}

module.exports = verificarAdmin;