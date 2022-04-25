import React, { useState } from "react";
import axios from "axios";

export default function AddVehicle() {
  const [model, setName] = useState("");
  const [number, setNumber] = useState("");
  const [year, setYear] = useState("");
  const [colour, setColour] = useState("");

  function SendData(e) {
    e.preventDefault();

    const newVehicle = {
      model,
      number,
      year,
      colour,
    };

    axios
      .post("http://localhost:8065/vehicle/add", newVehicle)
      .then(() => {
        alert("Vehicle Added");
        setName("");
        setNumber("");
        setYear("");
        setColour("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <form onSubmit={SendData}>
        <div class="form-group">
          <h1>
            <font color="green">Add Vehicle</font>
          </h1>
          <label for="model">Vehicle Model</label>
          <input
            type="text"
            class="form-control"
            id="model"
            placeholder="Enter Vehicle Model"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div class="form-group">
          <label for="number">Vehicle Number</label>
          <input
            type="text"
            class="form-control"
            id="number"
            placeholder="Enter Vehicle Number"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </div>

        <div class="form-group">
          <label for="year">Vehicle year</label>
          <input
            type="text"
            class="form-control"
            id="year"
            placeholder="Enter Vehicle Year"
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </div>

        <div class="form-group">
          <label for="colour">Vehicle Colour</label>
          <input
            type="text"
            class="form-control"
            id="colour"
            placeholder="Enter Vehicle Colour"
            onChange={(e) => {
              setColour(e.target.value);
            }}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
