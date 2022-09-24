const mongoose = require("mongoose");

const photoModelSchema = mongoose.Schema({
  url: String,
  title: String,
  userId: ObjectID(),
  likes: 0,
  views: 0,
});

module.exports = mongoose.model("PhotoModel", photoModelSchema);