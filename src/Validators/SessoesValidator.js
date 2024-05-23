const { default: mongoose } = require('mongoose');
const { z } = require('zod');
const { ValidateRequest } = require('zod-express-middleware');

const create = ValidateRequest({
  body: z.object({
    id_usuario: z.custom(
      mongoose.isValidObjectId,
      'O id do usuário não é valido',
    ),
  }),
});

const destroy = ValidateRequest({
  params: z.object(mongoose.isValidObjectId, 'O id da sessão não é valido'),
});

module.exports = {
  create,
  destroy,
};
