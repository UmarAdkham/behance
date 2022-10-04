const Photos = require("../models/PhotoModel")


const getPhotos = async (req, res) => {
  try {
    const photos = await Photos.find({})
    res.status(200).json(photos)
  } catch (error) {
    res.status(404).json({ error: "Error api" })
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
}

const upload = async (req, res) => {
  const { url, title, userId } = req.body;
  try {
    const newUploat = await Photos.create({ url, title, userId });
    res.status(200).json(newUploat);
  } catch (error) {
    console.log(error);
    res.json({ error: "Katta xatoki" });
  }
};


const views = async (request, respose) => {
  Photos.findByIdAndUpdate(
    { _id: request.params.id },
    { $inc: { views: 1 } },
    { new: true },
    (error, response) => {
      if (error) {
        console.log(error);
        return respose.send({ error: error.message });
      }
      respose.send({ views: response.views });
    }
  );
};





module.exports = {
  getPhotos, upload, views,
}