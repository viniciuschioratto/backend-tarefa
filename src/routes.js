const { Router } = require('express')
const NoticiaController = require('./controller/NoticiaController')

const routes = Router()

routes.post('api/save', NoticiaController.save)
routes.get('api/search', NoticiaController.search)
routes.put('api/update', NoticiaController.update)

module.exports = routes