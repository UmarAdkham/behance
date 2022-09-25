const mongoose = require("mongoose");

const photoModelSchema = mongoose.Schema({
  
  desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    },
  likes: 0,
  views: 0,
});

module.exports = mongoose.model("PhotoModel", photoModelSchema);
