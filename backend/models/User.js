const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 2
  },
  email: {
    type: String,
    required: true,
    min: 6
  },
  password: {
    type: String,
    required: true,
    min: 8
  },
  regdate: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', userSchema)