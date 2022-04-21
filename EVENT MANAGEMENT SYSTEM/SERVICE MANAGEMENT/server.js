const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
   // useCreateIndex: true,
   // useNewUrlParser: true,
   // useUnifiedTopologyL: true,
   // useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection success!");
})

const serviceRouter = require("./routes/service.js");

app.use("/service",serviceRouter);


app.listen(PORT, () => {
    console.log('Server is up and running on port number: ${PORT}')
});
