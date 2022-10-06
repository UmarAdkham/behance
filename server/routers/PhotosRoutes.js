//
const express = require("express")
const { getPhotos, upload, views, likes } = require("../controller/photosController")

const photoRouter = express.Router()

photoRouter.get("/photos", getPhotos)
photoRouter.get("/upload", upload)
photoRouter.put("/:id", views);
photoRouter.put('likes/:id' , likes);


module.exports = photoRouter