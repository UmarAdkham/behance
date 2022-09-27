const express = require("express");
const { views, photoR } = require("../controller/PhotoViewsController");

const viewsRouter = express.Router();

viewsRouter.put("/:id", views);



const photoR = express.Router();

<<<<<<< HEAD
photoR.put("/:id", photoR);
=======
module.exports = viewsRouter
>>>>>>> master
