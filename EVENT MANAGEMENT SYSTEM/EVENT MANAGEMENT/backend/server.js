const express = require("express");
const { listen } = require("express/lib/application");
const events = require("./data/events");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

dotenv.config();
connectDB();
app.use(express.json());

/*
//test1
app.get("/", (req, res) => {
res.send("API is running..");
});


//send all data
app.get("/api/events", (req, res) => {
  res.send(events);
});
*/

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
