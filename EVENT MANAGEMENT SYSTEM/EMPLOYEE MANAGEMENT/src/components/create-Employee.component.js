import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'

export default class CreateEmployee extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmployeeID = this.onChangeEmployeeID.bind(this);
        this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeTelephone = this.onChangeTelephone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeDiscription = this.onChangeDiscription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            EmployeeID: '',
            EmployeeName: '',
            Address: '',
            Telephone: '',
            Email: '',
            Type: '',
            Discription: '',
            Employee: []
        }
    }

    //set the EmployeeID 
    onChangeEmployeeID(e) {
        this.setState({
            EmployeeID: e.target.value
        })
    }

    //set the Address
    onChangeAddress(e) {
        this.setState({
            Address: e.target.value
        })
    }

    //set EmployeeName
    onChangeEmployeeName(e) {
        this.setState({
            EmployeeName: e.target.value
        })
    }

   

    //set Telephone
    onChangeTelephone(e) {
        this.setState({
            Telephone: e.target.value
        })
    }

    //Set Email
    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        })
    }

     //set Type
     onChangeType(e) {
        this.setState({
            Type: e.target.value
        })
    }

    //Set Discription
    onChangeDiscription(e) {
        this.setState({
            Discription: e.target.value
        })
    }

   

    //submit Function
    onSubmit(e) {
        e.preventDefault();
       
        const Employee = {
            EmployeeID: this.state.EmployeeID,
            EmployeeName: this.state.EmployeeName,
            Address: this.state.Address,
            Telephone: this.state.Telephone,
            Email: this.state.Email,
            Type: this.state.Type,
            Discription: this.state.Discription

        }

        console.log(Employee);

        //validation
        

            axios.post('http://localhost:5000/Employee/add', Employee)
                .then(res => console.log(res.data));

            swal({
                    title: "Done!",
                    text: "Added Successfully",
                    icon: "success",
                    button: "Close"
                })
                .then((value) => {
                   window.location = '/';
                });
        
    }

    render() {
        return ( <div >
            <div class = "row" >
            <div class = "col-6" >
            <br/ >
            </div> <div class = "col-12" >
            <div class = "myformstyle2" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Poppins" size = "6" > 
                ADD NEW EMPLOYEE</font> </h3 >  
            <form onSubmit = { this.onSubmit } >
            <div className = "form-group" >
            <label > Employee ID: </label>
            <input type = "Number"
            required className = "form-control"
            placeholder = "Enter Employee ID"
            value = { this.state.EmployeeID }
            onChange = { this.onChangeEmployeeID }/>
             </div >
             
              <div className = "form-group" >
            <label > Employee Name: </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Enter Employee Name"
            value = { this.state.EmployeeName }
            onChange = { this.onChangeEmployeeName }/> </div > 
             <div className = "form-group" >
            <label > Address: </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Enter Address"
            //maxlength = "10"
            value = { this.state.Address }
            onChange = { this.onChangeAddress }/>
            </div > 
             <div className = "form-group" >
            <label > Telephone: </label>
             <input type = "Number"
            className = "form-control"
            placeholder = "Enter Telephone"
            value = { this.state.Telephone }
            onChange = { this.onChangeTelephone }/> </div > 
             <div className = "form-group" >
           
            <div className = "form-group" >
            <label > Email: </label> <
            input type = "email"
            required className = "form-control"
            placeholder = "Enter an Email"
            value = { this.state.Email }
            onChange = { this.onChangeEmail }/>  </div> 

            <div className = "form-group" >
            <label > Employee Type: </label> <
            input type = "text"
            required className = "form-control"
            placeholder = "Employee Type"
            value = { this.state.Type }
            onChange = { this.onChangeType }/>  </div>

            <div className = "form-group" >
            <label > Brief Discription of Employee: </label> <
            input type = "text"
            required className = "form-control"
            placeholder = "Brief Discription of Employee"
            value = { this.state.Discription }
            onChange = { this.onChangeDiscription }/>  </div>

            
            
            
            
            </div > <div className = "form-group text-right" >
            <input type = "submit"
            value = "Create"
            className = "btn btn-primary" />
            </div> </form > </div> </div >  </div> </div >  <br/ > < br/ > 
             </div>
        );
    }
}



