const mongoose = require('mongoose')

const TarefaSchema = new mongoose.Schema({
    conteudo: String,
    marcacao: Boolean
})

mongoose.set('useFindAndModify', false)
module.exports = mongoose.model('Tarefa', TarefaSchema)