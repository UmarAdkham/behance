const express = require("express");
const { login, google_login, register, edit, photoedit, facebook_login } = require("../controller/userController");

const userRouter = express.Router();

//BU REGISTER KANTROLLERI
userRouter.post("/register", register);

/**
 * LOGIN KANTROLLER
 */
userRouter.post("/login", login);

/**
 * EDIT |Google login
 */
 userRouter.post("/google-login", google_login);


 userRouter.post("/facebook-login", facebook_login);
 /**
  * EDIT USERNAME AND PASSWORD
 */

userRouter.put("/:id", edit);


/**
 * EDIT PHOTO OF USER
 */
userRouter.put("/:id/photoedit", photoedit);

module.exports = userRouter;
