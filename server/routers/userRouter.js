const express = require("express");
const { login, register, edit, photoedit, getUsers } = require("../controller/userController");

const userRouter = express.Router();

//BU REGISTER KONTROLLERI
userRouter.post("/register", register);

/**
 * LOGIN KONTROLLER
 */
userRouter.post("/login", login);

/**
 * EDIT USERNAME AND PASSWORD
 */

userRouter.put("/:id", edit);


/**
 * EDIT PHOTO OF USER
 */
userRouter.put("/:id/photoedit", photoedit);


module.exports = userRouter;
