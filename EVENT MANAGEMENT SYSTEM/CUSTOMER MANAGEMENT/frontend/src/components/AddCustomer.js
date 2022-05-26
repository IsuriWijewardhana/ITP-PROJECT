import React,{useState} from "react"
import axios from "axios";
import "./AddCustomer.css";
import { Container } from "react-bootstrap";



export default function AddCustomer(){

    const [customer_code, setCustomer_code] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    
    function sendData(e){

        e.preventDefault();

        //alert("Insert");

        const newCustomer ={
            customer_code,
            first_name,
            last_name,
            email,
            phone,
            age,
            gender,
            address
        }

        axios.post("http://localhost:8090/customer/add",newCustomer).then(()=>{
            alert("Customer Added")

            

        }).catch((err)=>{
            alert(err)
        })

       //console.log(newCustomer);
    }

    return(
    
        <div class="main1">
            <Container>
            <form>
                <div className="form-group">
                
               
                <h1><font color="red"><center>..ADD CUSTOMER..</center></font></h1>
                

                    <label for="customer_code"><strong><font color="blue">Customer_code</font></strong></label>
                    <input type="text"  className="form-control" id="customer_code" placeholder="Enter code" required
                    onChange={(e)=>{

                      setCustomer_code(e.target.value);
                    
                     } }/>
                    
                </div>

                <div className="form-group">

                        <label for="first_name"><strong><font color="blue">First_name</font></strong></label>
                        <input type="text" required className="form-control" id="first_name" placeholder="fname" 
                        onChange={(e)=>{

                            setFirst_name(e.target.value);
  
                             } }/>

                </div>

                <div className="form-group">

                        <label for="last_name"><strong><font color="blue">Last_name</font></strong></label>
                        <input type="text" required className="form-control" id="last_name" placeholder="lname" 
                        onChange={(e)=>{

                            setLast_name(e.target.value);
  
                             } }/>

                </div>

                <div className="form-group">

                        <label for="email"><strong><font color="blue">Email</font></strong></label>
                        <input type="text" required className="form-control" id="email"  placeholder="Enter Your Email" maxlength = "20"
                        onChange={(e)=>{

                            setEmail(e.target.value);
  
                             } }/>

                </div>
                        <div className="form-group">

                        <label for="phone"><strong><font color="blue">Phone</font></strong></label>
                        <input type="text" required className="form-control" id="phone" placeholder="Enter Number" 
                        onChange={(e)=>{

                            setPhone(e.target.value);
  
                            } }/>

                        </div>

                
                <div className="form-group">

                    <label for="age"><strong><font color="blue">Age</font></strong></label>
                    <input type="text" required className="form-control" id="age" placeholder="Enter Age" 
                    onChange={(e)=>{

                        setAge(e.target.value);
                      
                       } }/>

                </div>

                <div className="form-group">

                <label for="gender"><strong><font color="blue">Gender</font></strong></label>
                    <input type="text" required className="form-control" id="gender" placeholder="gender"
                    onChange={(e)=>{

                        setGender(e.target.value);
                      
                       } }/>
                    
                </div>

                

                <div className="form-group">

                <label for="address"><strong><font color="blue">Address</font></strong></label>
                    <input type="text" required className="form-control" id="address" placeholder="Enter Your Address" maxlength = "10"
                    onChange={(e)=>{

                        setAddress(e.target.value);
                      
                       } }/>
                    
                </div>


                    
                    <button type="submit" className="btn btn-danger" onClick={sendData} >Submit</button>
            </form>
            </Container>
        </div>
    )

}