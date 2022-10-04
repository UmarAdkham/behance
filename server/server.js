const express = require("express");``
const app = express();
const cors = require('cors')
const mongoose = require("mongoose");

const userRouter = require("./routers/userRouter");
const photoRouter = require("./routers/PhotosRoutes")
require("dotenv").config();


// CORS
app.use(cors())




//midlleWare
app.use(express.json());
app.use(express.json({limit: '50mb', extended: true}));
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));


app.use((req, res, next) => {
  console.log("PATH", req.path);
  console.log("METHOD", req.method);
  console.log("TIME", new Date().toLocaleString());
  next();
});



app.use("/api/user", userRouter);
app.use("/api", photoRouter)

//Database-ga Ulanish
/*  */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Mongo DB databesega ulanildi");
      console.log(`Serverimiz ${process.env.PORT}-chi portda ishlamoqda`);
    });
  })
  .catch((err) => console.log(err.message));
