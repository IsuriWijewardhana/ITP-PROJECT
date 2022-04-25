import React,{useState} from "react"
import axios from "axios";

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
    
        <div class="container">
            <form>
                <div className="form-group">
                

                <h1><font color="red">Add Customer</font></h1>

                    <label for="customer_code"><strong><font color="green">Customer_code</font></strong></label>
                    <input type="text" className="form-control" id="customer_code" placeholder="Enter code" 
                    onChange={(e)=>{

                      setCustomer_code(e.target.value);
                    
                     } }/>
                    
                </div>

                <div className="form-group">

                        <label for="first_name"><strong><font color="green">First_name</font></strong></label>
                        <input type="text" className="form-control" id="first_name" placeholder="fname"
                        onChange={(e)=>{

                            setFirst_name(e.target.value);
  
                             } }/>

                </div>

                <div className="form-group">

                        <label for="last_name"><strong><font color="green">Last_name</font></strong></label>
                        <input type="text" className="form-control" id="last_name" placeholder="lname"
                        onChange={(e)=>{

                            setLast_name(e.target.value);
  
                             } }/>

                </div>

                <div className="form-group">

                        <label for="email"><strong><font color="green">Email</font></strong></label>
                        <input type="text" className="form-control" id="email"  placeholder="Enter Your Email"
                        onChange={(e)=>{

                            setEmail(e.target.value);
  
                             } }/>

                </div>
                        <div className="form-group">

                        <label for="phone"><strong><font color="green">Phone</font></strong></label>
                        <input type="text" className="form-control" id="phone" placeholder="Enter Number"
                        onChange={(e)=>{

                            setPhone(e.target.value);
  
                            } }/>

                        </div>

                
                <div className="form-group">

                    <label for="age"><strong><font color="green">Age</font></strong></label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Age"
                    onChange={(e)=>{

                        setAge(e.target.value);
                      
                       } }/>

                </div>

                <div className="form-group">

                <label for="gender"><strong><font color="green">Gender</font></strong></label>
                    <input type="text" className="form-control" id="gender" 
                    onChange={(e)=>{

                        setGender(e.target.value);
                      
                       } }/>
                    
                </div>

                

                <div className="form-group">

                <label for="address"><strong><font color="green">Address</font></strong></label>
                    <input type="text" className="form-control" id="address" placeholder="Enter Your Address"
                    onChange={(e)=>{

                        setAddress(e.target.value);
                      
                       } }/>
                    
                </div>


                    
                    <button type="submit" className="btn btn-primary" onClick={sendData} >Submit</button>
            </form>
        </div>
    )

}