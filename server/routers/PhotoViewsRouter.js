const express = require("express");
const { views, uploat } = require("../controller/PhotoViewsController");

const viewsRouter = express.Router();

viewsRouter.put("/:id", views);

viewsRouter.post("/uploat", uploat);

module.exports = viewsRouter;
