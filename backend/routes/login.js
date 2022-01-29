const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const User = require("../models/User")
const { loginValidation } = require("../utils/validation") 
const jwt = require("jsonwebtoken")


// ----- LOGIN USER ----- 
router.post("/", async (req, res) => {

  // validation of user before register
  const { error } = loginValidation(req.body)
  if (error) return res.status(400).json({msg: error.details[0].message})
  console.log("passed validation check")

// check if the email exists
  const user = await User.findOne({ email: req.body.email }).exec()
  if (!user) return res.status(400).json({msg: "Email does not exist"})
  console.log("passed email check")

// check if password valid
  const validPass = await bcrypt.compare(req.body.password, user.password) 
  if (!validPass) return res.status(400).json({msg: "Wrong password"})
  console.log("passed password check")

// create & assign JWT
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
  res.header("auth-token", token).send(token)


// logged in successfully
  // res.status(200).json({msg: "User successfully logged in", username: user.username, email: user.email })
})

module.exports = router;