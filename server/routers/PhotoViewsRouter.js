const express = require('express')

const { views } = require('../controller/PhotoViewsController')
const viewsRouter = express.Router()



viewsRouter.put('/:id', views)

module.exports = viewsRouter