const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 8065

app.use(cors())
app.use(bodyParser.json())

const URI = process.env.MONGODB_URL

mongoose.connect(URI, {
  //useCreateIndex: true,
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
  //useFindAndModify: false

  //ex cmnt 
})

const connection = mongoose.connection
connection.once("open", () => {
  console.log('MongoDB Connection Success!!!')
})

const vehicleRouter = require("./routes/vehicles.js");

app.use("/vehicle", vehicleRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`)
  })