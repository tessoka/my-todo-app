const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const User = require("../models/User")
const { registerValidation } = require("../utils/validation") 




// ----- REGISTER USER ----- 
router.post("/", async (req, res) => {
  console.log("register triggered")
  console.log(req.body)

// validation of user before register
  const { error } = registerValidation(req.body)
  if (error) return res.status(400).json({msg: error.details[0].message})
  console.log("passed validation check")

// check if the email is already in use
  const emailExist = await User.findOne({ email: req.body.email }).exec()
  if (emailExist) return res.status(400).json({msg: "Email already exist"})
  console.log("passed email check")

// create user with hashed password
  try {
    console.log("new user initiatisation began")
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
  
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    })
  
    const savedUser = await newUser.save()
    res.status(201).json({msg: "Success!", userID: newUser._id, username: newUser.username, email: newUser.email})

  } catch (err) {
    res.status(400).send(err)
  }

})

module.exports = router;