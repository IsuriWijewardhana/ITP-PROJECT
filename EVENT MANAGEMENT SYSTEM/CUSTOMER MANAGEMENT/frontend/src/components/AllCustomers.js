import React,{ useState,useEffect,useRef } from "react";
import axios from "axios";
import "./AllCustomer.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";

export default function AllCustomer({ search, setSearch }) {
  const componentRef1 = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef1.current,
    });

    const [customers,setCustomers] = useState([{
      customer_code:"",
      first_name:"",
      last_name:"",
      email:"",
      phone:"",
      age:"",
      gender:"",
      address:"",
    }]);

    useEffect(() =>{
        function getCustomers() {
         axios.get("http://localhost:8090/customer/all").then((res) =>{
            // console.log(res.data);
             setCustomers(res.data);
         } ).catch((err) =>{
             alert(err.message);
         });  

        }
        getCustomers();

    }, []);

    function deleteHandler(_id) {
      axios
        .delete(`http://localhost:8090/customer/delete/${_id}`)
  
        .then((res) => {
          alert("User Deleted!");
  
            window.location.reload();
        })
  
        .catch();
    }

    return (
        

        <div className="main2">
          <Container>
      <h3>
        <b><font color="blue">..All Customer Details..</font></b>
      </h3>
      <br />

      <input
        placeholder="Search Here by Email"
        className=""
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="reportBtn1"
        onClick={handlePrint}
        style={{
          fontSize: "15px",
          marginLeft: "200px",
          color: "red",
          backgroundColor: "yellow",
          textDecoration: "none",
          marginTop: "0px",
          padding:"3px"
        }}
      >
        Export Report as a PDF
      </button>

      <div className="table-wrapper" >
        <table className="fl-table" border="1" width="500px" >
          <div ref={componentRef1}>
          <tbody>
            <tr>
              <th><font color="black"><strong>Customer_code</strong></font></th>
              <th><font color="black"><strong>First_name</strong></font></th>
              <th><font color="black"><strong>Last_name</strong></font></th>
              <th><font color="black"><strong>Email</strong></font></th>
              <th><font color="black"><strong>Phone</strong></font></th>
              <th><font color="black"><strong>Age</strong></font></th>
              <th><font color="black"><strong>Gender</strong></font></th>
              <th><font color="black"><strong>Address</strong></font></th>
              <th><font color="black"><strong>Action</strong></font></th>
            </tr>

            {customers?.reverse()
                .filter((filteredEmp) =>
                  filteredEmp.email
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ).map((post) => (
              <tr>
                <td>{post.customer_code}</td>
                <td>{post.first_name}</td>
                <td>{post.last_name}</td>
                <td>{post.email}</td>
                <td>{post.phone}</td>
                <td>{post.age}</td>
                <td>{post.gender}</td>
                <td>{post.address}</td>

                <td>
                
                 
                          <Link to={`/update/${post._id}`}>

                              <button className="button" style={{marginRight:"20px"}}>EDIT
                              
                              </button>
                          </Link>
                          
                  
                  <button className="button1"
                  onClick={() => deleteHandler(post._id)}>DELETE
                  </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
          </div>
        </table>
      </div>
      </Container>
    </div>
  


       
    );
}

