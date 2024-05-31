const ProjetoModel = require("../Models/ProjetoModel");//models para model

class ProjetoController {
    async create(req, res) {
        try{
            const projeto = await ProjetoModel.create(req.body);
            return res.status(200).json(projeto);

        }catch(error){
            res.status(500).json({message:"Algo deu errado!", error:error.message });

        }        
    }
     
    async read(req, res) {
        try{
            // Aqui você precisa aguardar a resposta da consulta ao banco de dados
            const projetos = await ProjetoModel.find();
            return res.status(200).json(projetos);            

        }catch(error){
            res.status(500).json({message:"Algo deu errado!",error:error.message });

        }        
        
    }

    async update(req, res) {
        
        try{
            const { id } = req.params;
            const projetosEncontrado = await ProjetoModel.findById(id);
            if(!projetosEncontrado) 
                return res.status(404).json({message:"Projeto não encontrado"});
            
            const projeto = await projetosEncontrado.set(req.body).save();


            //const projeto = await ProjetoModel.findByIdAndUpdate(id, req.body, { new: true })

            return res.status(200).json(projeto);            

        }catch(error){
            res.status(500).json({message:"Algo deu errado!",error:error.message });

        }
        
    }

    async delete(req, res) {
        try{
            const { id } = req.params;
            const projetosEncontrado = await ProjetoModel.findById(id);
            
            if(!projetosEncontrado) 
                return res.status(404).json({message:"Usuário não encontrado"});
            
            await projetosEncontrado.deleteOne();
            
            res.status(200).json({"mensagem": "projeto deletado com sucesso" });

        }catch(error){
            res.status(500).json({message:"Algo deu errado!",error:error.message });

        }        
        
    }
}

module.exports = new ProjetoController();


// repassado de acordo