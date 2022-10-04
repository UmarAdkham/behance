//
const express = require("express")
const {getPhotos, upload} = require("../controller/PhotosController")

const photoRouter = express.Router()

photoRouter.get("/photos" , getPhotos)
photoRouter.get("/upload" , upload)


module.exports = photoRouter