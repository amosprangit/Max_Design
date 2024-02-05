const express = require("express");
const bcrypt = require("bcrypt"); //authenticate password
const User = require("../DB.js");
const router = express.Router();

//SignIn API Route with Funtionality
router.post("/", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const hashpassword = bcrypt.hashSync(password, 10);
  const newUser = new User({
    firstname,
    lastname,
    email,
    password: hashpassword,
  });
  try {
    await newUser.save();
    res.status(101).json("User Created Successfully !");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
