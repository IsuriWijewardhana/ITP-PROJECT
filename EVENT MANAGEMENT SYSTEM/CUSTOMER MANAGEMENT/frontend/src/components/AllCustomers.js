import React,{ useState,useEffect } from "react";
import axios from "axios";

export default function AllCustomer() {

    const [customers,setCustomers] = useState([]);

    useEffect(() =>{
        function getCustomers() {
         axios.get("http://localhost:8090/customer/").then((res) =>{
            // console.log(res.data);
             setCustomers(res.data);
         } ).catch((err) =>{
             alert(err.message);
         });  

        }
        getCustomers();

    }, []);

    return (
        <div className="container">

        <div className="container">
      <h3>
        <b><font color="blue">All Customer Details</font></b>
      </h3>
      <br />

      <div className="table-wrapper">
        <table className="fl-table" border="1" width="800px" >
          <tbody>
            <tr>
              <th><font color="green">Customer_code</font></th>
              <th><font color="green">First_name</font></th>
              <th><font color="green">Last_name</font></th>
              <th><font color="green">Email</font></th>
              <th><font color="green">Phone</font></th>
              <th><font color="green">Age</font></th>
              <th><font color="green">Gender</font></th>
              <th><font color="green">Address</font></th>
            </tr>

            {customers.map((post) => (
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
                  <button className="button">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  


        </div>
    );
}

