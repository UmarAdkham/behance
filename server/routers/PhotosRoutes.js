//
const express = require("express")
const { getPhotos, upload, views, getUserPhotos, } = require("../controller/photosController")

const photoRouter = express.Router()

photoRouter.get("/photos", getPhotos)
photoRouter.post("/upload", upload)

// korilganlar sonini oshirish
photoRouter.put("/:id", views);

// userga tegisli rasimlarni Photo Modeldan olib olish Userid orqalik
photoRouter.post('/userPhotos', getUserPhotos)

module.exports = photoRouter