const router = require("express").Router();
let Vehicle = require("../models/vehicle");

router.route("/add").post((req, res) => {
  const model = req.body.model;
  const number = req.body.number;
  const year = Number(req.body.year);
  const colour = req.body.colour;

  const newVehicle = new Vehicle({
    model,
    number,
    year,
    colour,
  });

  newVehicle
    .save()
    .then(() => {
      res.json("Vehicle Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  Vehicle.find()
    .then((vehicles) => {
      res.json(vehicles);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { model, number, year, colour } = req.body;

  const updateVehicle = {
    model,
    number,
    year,
    colour,
  };
  const update = await Vehicle.findByIdAndUpdate(userId, updateVehicle)
    .then(() => {
      res.status(200).send({ status: "User updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;
  await Vehicle.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "User deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete vehicle", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const user = await Vehicle.findById(userId)
    .then((vehicle) => {
      res.status(200).send({ status: "User fetched", vehicle });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get Vehicle", error: err.message });
    });
});

module.exports = router;
