const { default: mongoose} = require("mongoose");
const {z} = require("zod");
const {validateRequest} = require("zod-express-middleware");

const create = validateRequest({
    body:z.object({
        nome: z.string({ required_error:"O nome é obrigatório"}),
        descricao: z.string({required_error: "A descricao é obrigatória"}),
        equipe: z.string({required_error: "A equipe é obrigatória"}),
    }),

});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(mongoose.isValidObjectId,"O id não é válido"),
    }),
});

const update = validateRequest({
    body: z.object({
        nome: z.string().optional(),
        descricao: z.string().optional(),
        equipe: z.string().optional(),
    }),
    params: z.object({
        id: z.custom(mongoose.isValidObjectId,"O id não é válido"),
    }),
});

module.exports={
    create,
    destroy,
    update,
};