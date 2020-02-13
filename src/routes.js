const { Router } = require('express')
const NoticiaController = require('./controller/NoticiaController')

const routes = Router()

routes.post('/save', NoticiaController.save)
routes.get('/search', NoticiaController.search)
routes.put('/update', NoticiaController.update)

module.exports = routes