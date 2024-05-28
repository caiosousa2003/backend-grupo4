const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");


const create = validateRequest({
  body: z.object({
    id_usuario: z.custom(mongoose.isValidObjectId, {
      message: "O id do usuário não é válido",
    }),
  }),
});
const destroy = validateRequest({
  params: z.object(mongoose.isValidObjectId, "O id da sessão não é valido"),
});

module.exports = {
  create,
  destroy,
};
