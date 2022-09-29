const User = require("../models/userModel");
const mongoose = require("mongoose");

const login = async (req, res) => {
  const { email, parol } = req.body;

  try {
    const newStudent = await User.findOne({ email, parol });
    if(newStudent) {
      res.status(200).json({ id: newStudent._id });
    }
    else {
      res.status(404).json({ error: "Username yoki parol hato" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const register = async (req, res) => {
  const { ism, familiya, email, parol } = req.body;

  try {
    const newStudent = await User.create({ ism, familiya, email, parol });
    res.status(200).json(newStudent);
  } catch (error) {
    console.log(error);

    if (error.code === 11000) {
      res.json({ error: "Mavjud email kiritdingiz" });
    } else {
      res.json({ error: "Registerda xatolik yuz berdi" });
    }
  }
};

const edit = async (req, res) => {
  const { ism, parol } = req.body;
  console.log("first");
  console.log(req.params.id);
  try {  
    User.findOneAndUpdate(
      { _id: req.params.id },
      { ism, parol },
      { new: true },
      (err, updatedUser) => {
        if (!err) res.json(updatedUser);
        else res.json({ error: err.message });
      }
    );
  } catch (error) {
    console.log(error);
  }
};



/**
 * 
 * EDIT USER PHOTO 
 * EDIT USER PHOTO 
 */
const photoedit = async (req, res) =>{
  const {profilRasmi} = req.body;
  console.log('===================FIRST=================');
 try {
   User.findOneAndUpdate(
    {_id:req.params.id},
    {profilRasmi},
    {new:true},
    (err, updatedPhoto) => {
      if (!err) res.json(updatedPhoto);
      else res.json({ error: err.message });
    }
   )
 }catch (error) {
  console.log(error);
}
}

module.exports = { login, register, edit, photoedit };
