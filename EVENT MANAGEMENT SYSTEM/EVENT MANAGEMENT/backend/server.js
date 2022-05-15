const express = require("express");
const { listen } = require("express/lib/application");
const events = require("./data/events");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

//test1
app.get("/", (req, res) => {
  res.send("API is running..");
});

//send all data
app.get("/api/events", (req, res) => {
  res.send(events);
});

//find 1 data
app.get("/api/events/:id", (req, res) => {
  const event = events.find((n) => n._id === req.params.id);
  res.send(event);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
