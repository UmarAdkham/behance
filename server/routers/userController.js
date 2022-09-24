const express = require('express');
const { login, register , edit } = require('../controller/userController');


const userRouter = express.Router()


//BU REGISTER KANTROLLERI
userRouter.post("/register", register);

/**
 * LOGIN KANTROLLER
 */
userRouter.post('/login', login)


/**
 * EDIT USERNAME AND PASSWORD
 */

userRouter.put('/:id' , edit)




module.exports = userRouter
