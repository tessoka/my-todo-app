const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, () => console.log("connected to mongoDB"))

// IMPORT ROUTES
const serializeRoute = require("./routes/serialize")
const registrationRoute = require("./routes/register")
const loginRoute = require("./routes/login")

// MIDDLEWARES
app.use(cors())
app.use(express.json())

// ROUTE MIDDLEWARES
app.use("/serialize", serializeRoute)
app.use("/register", registrationRoute)
app.use("/login", loginRoute)



app.listen(5000)