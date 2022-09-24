const express = require('express');
const { register } = require('../controller/registerController');

const userRouter = express.Router()


//BU REGISTER KANTROLLERI
userRouter.post("/", register);




module.exports = userRouter
