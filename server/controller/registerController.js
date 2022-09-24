const User = require("../models/userModel");
const mongoose = require("mongoose");

const register = async (req, res) => {
  const { ism, familiya, email, parol } = req.body;

  try {
    const newStudent = await User.create({ ism, familiya, email, parol });
    res.status(200).json(newStudent);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { register };
