// ----- VALIDATIONS -----
const Joi = require('joi');

// ----- REGISTER VALIDATION -----
const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(2).required(),
    email: Joi.string().min(6).required().email({ minDomainSegments: 2 }),
    password: Joi.string().min(8).required()
  })
  return schema.validate( data )
}

// ----- LOGIN VALIDATION -----
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email({ minDomainSegments: 2 }),
    password: Joi.string().min(8).required()
  })
  return schema.validate( data )
}


module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
