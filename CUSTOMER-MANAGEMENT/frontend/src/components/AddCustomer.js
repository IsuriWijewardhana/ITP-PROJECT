import React,{useState} from "react";

export default function AddCustomer(){

    const [Customer_code,setCustomer_code] = useState("");
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
    const [address,setAddress] = useState("");
    const [phone_number,setPhone] = useState("");
    const [email,setEmail] = useState("");

    function sendData(e){
        e.preventDefault();
        alert("Insert");

    }

   return(
       <div className="container">
           <form onSubmit={sendData}>
           <div class="form-group">
                <label for="name">Customer_code</label>
                < input type="text" class="form-control" id="code"  placeholder="Enter Customer Code"
                onChange={(e)=>{
                    setCustomer_code(e.target.value);
                }}
                
                />
            </div>

            <div class="form-group">
                <label for="name">Customer Name</label>
                < input type="text" class="form-control" id="name"  placeholder="Enter Customer Name"
                      onChange={(e)=>{
                        setName(e.target.value);
                    }}
                
                />
            </div>

            
            <div class="form-group">
                <label for="email">Customer Email</label>
                < input type="text" class="form-control" id="email"  placeholder="Enter Customer Email"
                      onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                
                />
            </div>


            <div class="form-group">
                <label for="age">Customer Age</label>
                < input type="text" class="form-control" id="age"  placeholder="Enter Customer Age"
                      onChange={(e)=>{
                        setAge(e.target.value);
                    }}
                
                />
            </div>

            <div class="form-group">
                <label for="gender">Customer Gender</label>
                < input type="text" class="form-control" id="gender"  placeholder="Enter Customer Gender"
                      onChange={(e)=>{
                        setAge(e.target.value);
                    }}
                
                />
            </div>

            <div class="form-group">
                <label for="address">Customer Address</label>
                < input type="text" class="form-control" id="address"  placeholder="Enter Customer Address"
                      onChange={(e)=>{
                        setAddress(e.target.value);
                    }}
                
                />
            </div>

            
            <div class="form-group">
                <label for="phone_number">Customer Phone</label>
                < input type="text" class="form-control" id="phone_number"  placeholder="Enter Customer Phone"
                      onChange={(e)=>{
                        setPhone(e.target.value);
                    }}
                
                />
            </div>

            
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
       </div>
   )
}
