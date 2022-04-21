import React,{useState} from "react";
import axios from "axios";

export default function AddPayment(){

    const [paymentID, setPaymentID] = useState("");
    const [customerID, setCustomerID] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [paymentMode, setPaymentMode] = useState("");
    const [package1, setPackage1] = useState("");
    const [totalAmount, setTotalAmount] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("");

    function sendData(e){
       e.preventDefault();
      
       const newPayment ={
        paymentID,
        customerID,
        firstName,
        lastName,
        paymentMode,
        package1,
        totalAmount,
        paymentStatus
       }

       axios.post("http://localhost:8070/payment/add", newPayment)
       .then(() =>{
           alert("Student Added")
       }).catch((err) =>{
          alert("err")
       })

    }

    return(

        <div className="container mx-auto" >
          <form onSubmit={sendData}>
            <div className="form-group">
              <label for="paymentID">Payment ID</label>
              <input type="text" className="form-control" id="paymentID" placeholder="Enter Payment ID"
              onChange={(e) =>{
                setPaymentID(e.target.value);
              }}/>
            </div>

            <div className="form-group">
              <label for="customerID">Customer ID</label>
              <input type="text" className="form-control" id="customerID" placeholder="Enter Customer ID"
              onChange={(e) =>{
                setCustomerID(e.target.value);
              }}/>  
            </div>

            <div>
              <label for="firstName">First Name</label>
              <input type="text" className="form-control" id="firstName" placeholder="Enter First Name"
              onChange={(e) =>{
                setFirstName(e.target.value);
              }}/>
            </div>

            <div>
              <label for="lastName">Last Name</label>
              <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name"
              onChange={(e) =>{
                setLastName(e.target.value);
              }}/>
            </div>

            <div>
              <label for="paymentMode">Payment Mode</label>
              <input type="text" className="form-control" id="paymentMode" placeholder="Enter Payment Mode"
              onChange={(e) =>{
                setPaymentMode(e.target.value);
              }}/>
            </div>

            <div>
              <label for="package1">Package</label>
              <input type="text" className="form-control" id="package1" placeholder="Enter Package"
              onChange={(e) =>{
                setPackage1(e.target.value);
              }}/>
            </div>

            <div>
              <label for="totalAmount">Total Amount</label>
              <input type="text" className="form-control" id="totalAmount" placeholder="Enter Total Amoun"
              onChange={(e) =>{
                setTotalAmount(e.target.value);
              }}/>
            </div>

            <div>
              <label for="paymentStatus">Payment Status</label>
              <input type="text" className="form-control" id="paymentStatus" placeholder="Enter Payment Status"
              onChange={(e) =>{
                setPaymentStatus(e.target.value);
              }}/>
            </div>
            <br></br>
            
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>  

    )

}