const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userRouter = express.Router();
const { UserModel } = require("../model/userModel");

userRouter.post("/register", async (req, res) => {
  const { username, email, password, location, age } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      const user = new UserModel({
        username,
        email,
        password: hash,
        location,
        age,
      });
      await user.save();
      res.status(200).send({ msg: "Registration Successful" });
    });
  } catch (err) {
    res.status(400).send({ msg: err.message });
    console.log(err);
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    // console.log(user._id);
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.status(200).send({
            msg: "Login Successful",
            token: jwt.sign({ id: user._id }, "peter"),
          });
        } else {
          res.status(400).send({ msg: err.message });
        }
      });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
    console.log(err);
  }
});

// userRouter.get("/movie", (req, res) => {
//   const token = req.headers.authorization;

//   jwt.verify(token, "peter", (err, decoded) => {
//     decoded
//       ? res.status(200).send({ msg: "Movie-Data" })
//       : res.status(400).send({ msg: err.message });
//   });
// });

module.exports = { userRouter };
