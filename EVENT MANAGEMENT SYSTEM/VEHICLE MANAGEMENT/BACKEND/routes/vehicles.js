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

router.route("/update/:id").patch(async (req, res) => {
  /*let userId = req.params.id;
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
    }); */

  const user = await Vehicle.findById(req.params.id);
  if (user) {
    user.model = req.body.model || user.model;
    user.number = req.body.number || user.number;
    user.year = req.body.year || user.year;
    user.colour = req.body.colour || user.colour;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      model: updatedUser.model,
      number: updatedUser.number,
      year: updatedUser.year,
      colour: updatedUser.colour,
    });
  } else {
    res.status(404);
    throw new Error("Vehicle Not found");
  }
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
  /* let userId = req.params.id;
  const user = await Vehicle.findById(userId)
    .then((vehicle) => {
      res.status(200).send({ status: "User fetched", vehicle });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get Vehicle", error: err.message });
    }); */

  const user = await Vehicle.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Vehicle not found" });
  }
});

module.exports = router;
