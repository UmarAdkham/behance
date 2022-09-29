const Photo = require("../models/PhotoModel");

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
const uploat = async (req, res) => {
  const { url, title, userId } = req.body;
  try {
    const newUploat = await Photo.create({ url, title, userId });
    res.status(200).json(newUploat);
  } catch (error) {
     console.log(error);
      res.json({ error: "Katta xatoki" });
    }
};



module.exports = {
  views,
  uploat,
};
