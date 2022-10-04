const mongoose = require("mongoose");

const photoModelSchema = mongoose.Schema(
  {
    url: String,
    title: String,
    userId: String,
    likes: {
      type: Number,
      default: 0
    },
    views: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Photo", photoModelSchema);
