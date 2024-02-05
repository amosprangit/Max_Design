require("dotenv").config(); // Essecital for dotenv files
const express = require("express");
const mongoose = require("mongoose");
const signIn = require("./routes/signIn.js");
const app = express(); // App is running
const DB = process.env.mongoUrl;
const Port = process.env.port;
app.use(express.json()); // using middleware
// Routing
// app.use("/signIn", require("./routes/signIn.js"));
app.use("/signIn", signIn);
//This code is logging to database and the server
mongoose
  .connect(DB)
  .then(() => {
    app.listen(Port, () => {
      console.log(`Server Running on port ${Port}`);
    });
    console.log("Success Connect");
  })
  .catch((error) => {
    console.log(error);
  });
