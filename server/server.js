const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("dotenv").config({ path: "" });

//SERVER HALI BERI ISHLAMIDI ENV FAYL OCHILMAGAN




//midlleWare
app.use(express.json());
app.use((req, res, next) => {
  console.log("PATH", req.path);
  console.log("METHOD", req.method);
  console.log("TIME", req.newDate());
});

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
