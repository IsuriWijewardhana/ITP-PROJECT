const asyncHanler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const registerUser = asyncHanler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  // to check user already in our database
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  // user dosen't existst
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  // to check successfuly created
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error Occured!");
  }
});

//to user login
const authUser = asyncHanler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password!");
  }
});

module.exports = { registerUser, authUser };
