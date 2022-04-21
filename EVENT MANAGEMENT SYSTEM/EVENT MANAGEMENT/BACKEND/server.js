const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
//const mongose = require ('mongoose');
require ("dotenv").config();

//mongoDB
//mongodbURL= mongodb+srv://admin:<password>@cluster0.qgli4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("DB Connected");
})

const eventRouter = require("./routes/event");

app.use("/event",eventRouter)

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})

