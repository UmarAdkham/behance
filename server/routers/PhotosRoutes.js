//
const express = require("express")
const { getPhotos, upload, views } = require("../controller/photosController")

const photoRouter = express.Router()

photoRouter.get("/photos", getPhotos)
photoRouter.get("/upload", upload)
photoRouter.put("/:id", views);


module.exports = photoRouter