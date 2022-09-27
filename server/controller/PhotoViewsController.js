const Photo = require("../models/PhotoModel");
const express = require("express");
// const Image = require("../models/PhotoModel");

const views = async (request, respose) => {
  Photo.findByIdAndUpdate(
    { _id: request.body.id },
    { $inc: { views: 1 } },
    (error, response) => {
      if (error) {
        console.log(error);
        return respose.send({ error: error.message });
      }
      respose.send({ views: response.views });
    }
  );
};

// const router = express.Router();

const photoR = Photo.post("localhost:5000/store-image", async (req, res) => {
  try {
    const { photo } = req.body;
    if (!photo) {
      return res.status(400).json({ msg: "Iltimos Rasm linkini kiriting!" });
    }
    let newPhoto = new Image({
      photo,
    });
    newPhoto = await newPhoto.save();
    res.json(newPhoto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// module.exports = communityRouter;

module.exports = {
  views,
  photoR,
};
