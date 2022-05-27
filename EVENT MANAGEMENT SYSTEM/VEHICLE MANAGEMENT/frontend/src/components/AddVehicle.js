import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddVehicle.css";

export default function AddVehicle() {
  const [model, setName] = useState("");
  const [number, setNumber] = useState("");
  const [year, setYear] = useState("");
  const [colour, setColour] = useState("");

  let navigate = useNavigate();

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
        navigate("/vehicles");
        setName("");
        setNumber("");
        setYear("");
        setColour("");
      })
      .catch((err) => {
        alert("Fill required feilds");
      });
  }

  if (
    model === undefined ||
    number === undefined ||
    year === undefined ||
    colour === undefined
  )
    alert("Please fill out the required fields!");

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
            required
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
            maxLength="6"
            required
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
            required
            maxLength="4"
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
            required
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
