const express = require("express");
const { login, register, edit, photoedit } = require("../controller/userController");

const userRouter = express.Router();

//BU REGISTER KANTROLLERI
userRouter.post("/register", register);

/**
 * LOGIN KANTROLLER
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
