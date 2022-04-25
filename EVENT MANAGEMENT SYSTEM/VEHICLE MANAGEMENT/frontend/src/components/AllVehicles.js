import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AllVehicles() {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    function getVehicles() {
      axios
        .get("http://localhost:8065/vehicle/")
        .then((res) => {
          setVehicles(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getVehicles();
  }, []);

  return (
    /* <div className="container">
      <h1>All Vehicles</h1>
    </div>*/

    <div className="container">
      <h3>
        <b>
          <font color="green">All vehicles Details</font>{" "}
        </b>
      </h3>
      <br />

      <div className="table-wrapper">
        <table className="fl-table">
          <tbody>
            <tr>
              <th>Model</th>
              <th>Number</th>
              <th>Year</th>
              <th>Colour</th>
            </tr>

            {vehicles.map((post) => (
              <tr>
                <td>{post.model}</td>
                <td>{post.number}</td>
                <td>{post.year}</td>
                <td>{post.colour}</td>

                <td>
                  <button className="button">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
