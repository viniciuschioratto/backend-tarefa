const Tarefa = require('../models/Tarefa')


module.exports = {
    async save(request, response){
        const { conteudo, marcacao } = request.body
        const tarefa = await Tarefa.create({ conteudo, marcacao }, function(err, doc){
            if(err){
                return response.status(500).send('Erro ao inserir Tarefa.')
            }else{
                return response.json(doc)
            }
        })
        //return response.json(tarefa)
    },

    async search(request, response){
        await Tarefa.find(null, function(err, doc) {
            if(err){
                return response.status(500).send('Erro ao executar método.')
            }else{
                return response.json(doc)
            }
        })
    },

    async update(request, response){
        const { _id, marcacao } = request.body
        await Tarefa.findOneAndUpdate( { "_id": `${_id}`}, { "marcacao": `${marcacao}`}, { new: true }, function(err, doc) {
            if(err){
                return response.status(406).send('Usuario não encontrado!')
            }else{
                return response.json(doc)
            }
        })
    }
}