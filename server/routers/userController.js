const express = require('express');
const { register } = require('../controller/registerController');

const userRouter = express.Router()

userRouter.post("/", register);




module.exports = userRouter
