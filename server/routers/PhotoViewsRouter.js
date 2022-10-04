const express = require("express");
const { views, uploat } = require("../controller/photoViewsController");

const viewsRouter = express.Router();

viewsRouter.put("/:id", views);

viewsRouter.post("/uploat", uploat);

module.exports = viewsRouter;
