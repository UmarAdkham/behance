//
const express = require("express")
const { getPhotos, upload, views, getUserPhotos,deletePhoto                                                                                                                                                                      } = require("../controller/photosController")

const photoRouter = express.Router()

photoRouter.get("/photos", getPhotos)
photoRouter.post("/upload", upload)

// korilganlar sonini oshirish
photoRouter.put("/:id", views);

// photoni ochirish
photoRouter.delete("/delete/:id", deletePhoto);

// userga tegisli rasimlarni Photo Modeldan olib olish Userid orqalik
photoRouter.post('/userPhotos', getUserPhotos)

module.exports = photoRouter