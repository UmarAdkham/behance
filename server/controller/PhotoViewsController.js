const Photo = require("../models/PhotoModel");

const views = async (request, respose) => {
  Photo.findByIdAndUpdate(
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
  views,
};
