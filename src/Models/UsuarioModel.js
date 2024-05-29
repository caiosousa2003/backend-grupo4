const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  nome: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  senha: {
    type: String,
    select: false,
  },
  cargo: {
    type: String,
    select: false,
  },

  nivel: Boolean,
});

UsuarioSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("senha")) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(user.senha, salt);
    user.senha = hash;
  }
  next();
});
const UsuarioModel = mongoose.model("usuarios", UsuarioSchema);

module.exports = UsuarioModel;
