const express = require("express")
const router = express.Router()
const crypto = require("crypto-random-string");

let usersSessionTokens = []

// ----- SERIALIZE USER ----- 
router.post("/", (req, res, next) => {

  const existingUser = usersSessionTokens.find(user => user.sessionToken === req.body.sessionToken)  // IDENTIFY SESSION TOKEN

  if (existingUser === undefined) { // IF NO or WRONG SESSION TOKEN : create new session -> save it to array & return sessionToken + noOfVisits
    const newUser = {
      sessionToken: crypto(25),
      noOfVisits: 1
    }
    usersSessionTokens.push(newUser)
    res.json(newUser)
  } else { // IF USER WAS FOUND: increase noOfVisits & return sessionToken + noOfVisits
    existingUser.noOfVisits += 1
    usersSessionTokens = usersSessionTokens.map(user => user.sessionToken === existingUser.sessionToken ? existingUser : user)
    console.log(usersSessionTokens)
    res.json(existingUser)
  }
})


module.exports = router;