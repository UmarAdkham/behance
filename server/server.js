const express = require("express");
const app = express();

const mongoose = require("mongoose");
const userRouter = require("./routers/userController");
const photoRouter = require("./routers/PhotoViewsRouter");

require("dotenv").config();

//SERVER HALI BERI ISHLAMIDI ENV FAYL OCHILMAGAN


// Cammient ochib ishlatib ko'ring
//midlleWare
app.use(express.json());
app.use((req, res, next) => {
  console.log("PATH", req.path);
  console.log("METHOD", req.method);
  console.log("TIME", new Date());
  next();
});

app.use("/api/user", userRouter);


app.use("/photo", photoRouter);

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
