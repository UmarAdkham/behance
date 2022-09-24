const express = require('express');
const { login, register } = require('../controller/userController');


const userRouter = express.Router()


//BU REGISTER KANTROLLERI
userRouter.post("/register", register);

/**
 * LOGIN KANTROLLER
 */
userRouter.post('/login', login)





module.exports = userRouter
