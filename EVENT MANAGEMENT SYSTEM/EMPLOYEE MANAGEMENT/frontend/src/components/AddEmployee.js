import React,{useState} from "react"
import axios from "axios";

export default function AddEmployee(){

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [nic, setNIC] = useState("");
    const [telephone, setTelephone] = useState("");
    const [emptype, setEmployeeType] = useState("");


    function sendData(e){
        e.preventDefault();

        const newEmployee ={
            name,
            age,
            nic,
            telephone,
            emptype
        }

        

        axios.post("http://localhost:8070/employee/add",newEmployee).then(()=>{
            alert("employee added")

        }).catch((err)=>{
            alert(err)
        })
    }

    return(
    
        <div className="container">
            <form onSubmit={sendData}>
                <div className="form-group">
                

                <h1>Add Employee</h1>

                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Name" 
                    onChange={(e)=>{

                      setName(e.target.value);
                    
                     } }/>
                    
                </div>
                <div className="form-group">

                    <label for="age">Age</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Age"
                    onChange={(e)=>{

                        setAge(e.target.value);
                      
                       } }/>

                </div>

                <div className="form-group">

                <label for="nic">NIC</label>
                    <input type="text" className="form-control" id="nic" placeholder="Enter NIC"
                    onChange={(e)=>{

                        setNIC(e.target.value);
                      
                       } }/>
                    
                </div>

                <div className="form-group">

                <label for="telephone">Telephone</label>
                    <input type="text" className="form-control" id="telephone" placeholder="Enter Telephone"
                    onChange={(e)=>{

                        setTelephone(e.target.value);
                      
                       } }/>
                    
                </div>

                <div className="form-group">

                <label for="emptype">Employee Type</label>
                    <input type="text" className="form-control" id="emptype" placeholder="Enter Employee Type"
                    onChange={(e)=>{

                        setEmployeeType(e.target.value);
                      
                       } }/>
                    
                </div>


                    
                    <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}