const mongoose = require("mongoose");

const photoModelSchema = mongoose.Schema({
  url: String,
  title: String,
  userId: String,
  likes: 0,
  views: 0,
});

module.exports = mongoose.model("Photo", photoModelSchema);
