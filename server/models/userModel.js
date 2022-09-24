const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    ism: {
      type: String,
      required: true,
    },
    familiya: {
      type: String,
      required: true,   
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    parol: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
