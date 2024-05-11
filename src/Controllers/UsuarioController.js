const UsuarioModel = require("../Models/UsuarioModel");

class UsuarioController {

    async create (req, res) {
        try{
            const usuario = await UsuarioModel.create(req.body);

            return res.status(200).json(usuario);
        } catch (error){
            res.status(500).json({message:"ERRO!", error : error.message});
        }
    }

    async read (req, res) {
        try{
            const usuarios = await UsuarioModel.find();

            return res.status(200).json(usuarios);
        }catch (error){
            res.status(500).json({message:"ERRO!", error : error.message});
        }
        
    }

    async update (req, res) {
        try{
            const { id } = req.params;
            const usuarioEncontrado = await UsuarioModel.findById(id);
            
            if (!usuarioEncontrado) return res.status(404).json({message:"Usuário não encontrado"});
            
            const usuario = await usuarioEncontrado.set(req.body).save();

            return res.status(200).json(usuario);
        } catch(error){
            res.status(500).json({message:"ERRO!", error : error.message});
        }

    }

    async delete (req, res) {
        try{
            const { id } = req.params;
            const usuarioEncontrado = await UsuarioModel.findById(id);
            
            if (!usuarioEncontrado) return res.status(404).json({message:"Usuário não encontrado"});

            await usuarioEncontrado.deleteOne();

            return res.status(200).json({message : "Usuario Deletado"});
        }catch (error){
            res.status(500).json({message:"ERRO!", error : error.message});
        }

    }

}

module.exports = new UsuarioController();