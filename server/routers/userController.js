const express = require('express');
const { login, register } = require('../controller/loginController');


const userRouter = express.Router()


//BU REGISTER KANTROLLERI
userRouter.post("/register", register);

/**
 * LOGIN KANTROLLER
 */
userRouter.post('/login', login)





module.exports = userRouter
