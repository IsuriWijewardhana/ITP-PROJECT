import React, {
  useEffect,
  useState,
  useRef,
  onDelete,
  deleteHandler,
} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { Container } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import "./Allvehicles.css";

export default function AllVehicles({ search, setSearch }) {
  const componentRef1 = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef1.current,
  });

  const [vehicles, setVehicles] = useState([
    {
      model: "",
      number: "",
      year: "",
      colour: "",
    },
  ]);
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

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:8065/vehicle/delete/${id}`);

      window.location.reload();

      alert("Delete successfully!");
    } catch (error) {
      alert(error);
    }
  };

  return (
    /* <div className="container">
      <h1>All Vehicles</h1>
    </div>*/

    <div className="main3">
      <container>
        <h3>
          <b>
            <font color="green">All vehicles Details</font>{" "}
          </b>
        </h3>
        <br />

        <div className="allSearch">
          <input
            placeholder="Search by Model:"
            className=""
            type="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <br />
        <div className="allReport">
          <button
            className="reportBtn1"
            onClick={handlePrint}
            style={{
              fontSize: "15px",
              marginRight: "100px",
              color: "white",
              backgroundColor: "greenyellow",
              marginTop: "0px",
              padding: "3px",
            }}
          >
            Export report as a PDF
          </button>
        </div>
        <div className="table-wrapper">
          <table className="fl-table">
            <div ref={componentRef1}>
              <tbody>
                <tr>
                  <th>Model</th>
                  <th>Number</th>
                  <th>Year</th>
                  <th>Colour</th>
                  <th>Action</th>
                </tr>

                {vehicles
                  ?.reverse()
                  .filter((filteredEmp) =>
                    filteredEmp.model.toString().includes(search)
                  )
                  .map((post) => (
                    // {vehicles.map((post) => (
                    <tr>
                      <td>{post.model}</td>
                      <td>{post.number}</td>
                      <td>{post.year}</td>
                      <td>{post.colour}</td>

                      <td>
                        <a
                          className="btn btn-warning"
                          href={`/update/${post._id}`}
                        >
                          <i
                            className="fa fa-pencil"
                            aria-hidden="true"
                            style={{
                              color: "green",
                              fontSize: "25px",
                              marginRight: "10px",
                              marginLeft: "15px",
                            }}
                          ></i>
                          &nbsp;EDIT
                        </a>
                        &nbsp;
                        <a
                          className="btn btn-danger"
                          href="#"
                          onClick={() => deleteHandler(post._id)}
                        >
                          <i
                            className="fa fa-trash"
                            aria-hidden="true"
                            style={{
                              color: "blue",
                              fontSize: "25px",
                              marginRight: "15px",
                              marginLeft: "10px",
                            }}
                          ></i>
                          &nbsp;DELETE
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </div>
          </table>
        </div>
      </container>
    </div>
  );
}
