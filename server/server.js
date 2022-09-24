const express = require("express");
const app = express();

const mongoose = require("mongoose");
const userRouter = require("./routers/userController");
require("dotenv").config();

//SERVER HALI BERI ISHLAMIDI ENV FAYL OCHILMAGAN

//midlleWare
app.use(express.json());
app.use((req, res, next) => {
  console.log("PATH", req.path);
  console.log("METHOD", req.method);
  console.log("TIME", new Date());
  next();
});

app.use("/api/user", userRouter);

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
