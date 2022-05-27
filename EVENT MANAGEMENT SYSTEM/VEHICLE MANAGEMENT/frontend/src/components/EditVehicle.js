import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditVehicle() {
  const [model, setName] = useState("");
  const [number, setNumber] = useState("");
  const [year, setYear] = useState("");
  const [colour, setColour] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getUsers();
  }, []);

  let navigate = useNavigate();

  function getUsers() {
    let mounted = true;

    fetch(`http://localhost:8065/vehicle/get/${id}`)
      .then((res) => res.json())

      .then((result) => {
        if (mounted) {
          setName(result.model);
          setNumber(result.number);
          setYear(result.year);
          setColour(result.colour);
        }
        console.log(result);
      });
    return () => (mounted = false);
  }

  function sendData(e) {
    e.preventDefault();

    const EditVehicle = {
      model,
      number,
      year,
      colour,
    };

    axios
      .patch(`http://localhost:8065/vehicle/update/${id}`, EditVehicle)
      .then(() => {
        alert("Update Successfully");

        navigate("/vehicles");
        //window.reload();

        window.history.replaceState({}, "/");

        console.log(EditVehicle);
      })

      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <form>
        <div class="form-group">
          <h1>
            <font color="green">Update Vehicle</font>
          </h1>
          <label for="model">Vehicle Model</label>
          <input
            type="text"
            class="form-control"
            id="model"
            value={model}
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
            id="text"
            maxLength="6"
            value={number}
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
            id="number"
            maxLength="4"
            value={year}
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
            value={colour}
            placeholder="Enter Vehicle Colour"
            onChange={(e) => {
              setColour(e.target.value);
            }}
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={sendData}>
          Update
        </button>
      </form>
    </div>
  );
}
