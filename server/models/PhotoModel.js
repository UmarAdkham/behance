const mongoose = require("mongoose");

const photoModelSchema = mongoose.Schema({
  url: String,
  title: String,
  userId: mongoose.Schema.Types.ObjectId,
  likes: 0,
  views: 0,
});

module.exports = mongoose.model("PhotoModel", photoModelSchema);
