import React,{useEffect, useState} from "react"
import axios from "axios";
import "./UpdateCustomer.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function UpdateCustomer(){

    const [customer_code, setCustomer_code] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");

    const { id } = useParams();

    useEffect(() => {
        getUsers();
      }, []);
    
      let navigate= useNavigate();
    
      function getUsers() {
        let mounted = true;
    
        fetch(`http://localhost:8090/customer/get/${id}`)
          .then((res) => res.json())
    
          .then((result) => {
            if (mounted) {
              setCustomer_code(result.customer_code);
    
              setFirst_name(result.first_name);
    
              setLast_name(result.last_name);
    
              setEmail(result.email);
    
              setPhone(result.phone);
    
              setAge(result.age);
    
    setGender(result.gender);
    
    setAddress(result.address);
            }
            console.log(result);
          });
    
        return () => (mounted = false);
      }

    
    function sendData(e){

        e.preventDefault();

        //alert("Insert");

        const updateCustomer ={
            customer_code,
            first_name,
            last_name,
            email,
            phone,
            age,
            gender,
            address
        }

        axios
      .patch(`http://localhost:8090/customer/update/${id}`, updateCustomer)
      .then((res) => {
        alert("User Updated Successfully!");
        navigate("/customers");
        console.log(updateCustomer);
      })
      .catch((err) => {
        alert("Database Error");
      });
    }

    return(
    
        <div class="main3">
          <Container>
            <form>
                <div className="form-group">
                

                <h1><font color="yellow"><center>..UPDATE CUSTOMER..</center></font></h1>

                    <label for="customer_code"><strong><font color="orange">Customer_code</font></strong></label>
                    <input type="text" className="form-control" id="customer_code" placeholder="Enter code" 
                    value={customer_code}
                    onChange={(e)=>{

                      setCustomer_code(e.target.value);
                    
                     } }/>
                    
                </div>

                <div className="form-group">

                        <label for="first_name"><strong><font color="orange">First_name</font></strong></label>
                        <input type="text" className="form-control" id="first_name" placeholder="fname"
                        value={first_name}
                        onChange={(e)=>{

                            setFirst_name(e.target.value);
  
                             } }/>

                </div>

                <div className="form-group">

                        <label for="last_name"><strong><font color="orange">Last_name</font></strong></label>
                        <input type="text" className="form-control" id="last_name" placeholder="lname"
                        value={last_name}
                        onChange={(e)=>{

                            setLast_name(e.target.value);
  
                             } }/>

                </div>

                <div className="form-group">

                        <label for="email"><strong><font color="orange">Email</font></strong></label>
                        <input type="text" className="form-control" id="email"  placeholder="Enter Your Email"
                        value={email}
                        onChange={(e)=>{

                            setEmail(e.target.value);
  
                             } }/>

                </div>
                        <div className="form-group">

                        <label for="phone"><strong><font color="orange">Phone</font></strong></label>
                        <input type="text" className="form-control" id="phone" placeholder="Enter Number"
                        value={phone}
                        onChange={(e)=>{

                            setPhone(e.target.value);
  
                            } }/>

                        </div>

                
                <div className="form-group">

                    <label for="age"><strong><font color="orange">Age</font></strong></label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Age"
                    value={age}
                    onChange={(e)=>{

                        setAge(e.target.value);
                      
                       } }/>

                </div>

                <div className="form-group">

                <label for="gender"><strong><font color="orange">Gender</font></strong></label>
                    <input type="text" className="form-control" id="gender" 
                    value={gender}
                    onChange={(e)=>{

                        setGender(e.target.value);
                      
                       } }/>
                    
                </div>

                

                <div className="form-group">

                <label for="address"><strong><font color="orange">Address</font></strong></label>
                    <input type="text" className="form-control" id="address" placeholder="Enter Your Address"
                    value={address}
                    onChange={(e)=>{

                        setAddress(e.target.value);
                      
                       } }/>
                    
                </div>


                    
                    <button type="UPDATE" className="btn btn-danger" onClick={sendData} >UPDATE</button>
            </form>
            </Container>
        </div>
    )

}