import React,{useState} from "react"

export default function addemploye(){



    return(

        <div className="container">
            <form>
                <div class="form-group">

                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Name"/>
                    
                </div>
                <div class="form-group">

                    <label for="age">Age</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Age"/>

                </div>

                <div class="form-group">

                <label for="nic">NIC</label>
                    <input type="text" className="form-control" id="nic" placeholder="Enter NIC"/>
                    
                </div>

                <div class="form-group">

                <label for="telephone">Telephone</label>
                    <input type="text" className="form-control" id="telephone" placeholder="Enter Telephone"/>
                    
                </div>

                <div class="form-group">

                <label for="emptype">Employee Type</label>
                    <input type="text" className="form-control" id="emptype" placeholder="Enter Employee Type"/>
                    
                </div>


                    
                    <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}