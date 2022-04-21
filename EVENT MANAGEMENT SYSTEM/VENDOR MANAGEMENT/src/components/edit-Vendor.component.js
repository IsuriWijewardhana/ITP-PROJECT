import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class EditVendor extends Component {
    constructor(props) {
        super(props);

        this.onChangeVendorID = this.onChangeVendorID.bind(this);
        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangePostalCode = this.onChangePostalCode.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeMaterials = this.onChangeMaterials.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            VendorID: '',
            CompanyName: '',
            Address: '',
            PostalCode: '',
            Email: '',
            Description: '',
            Materials: '',
            Vendor: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Vendor/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    VendorID: response.data.VendorID,
                    Address: response.data.Address,
                    CompanyName: response.data.CompanyName,
                    PostalCode: response.data.PostalCode,
                    Email: response.data.Email,
                    Description: response.data.Description,
                    Materials: response.data.Materials,
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Vendor/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Vendor: response.data.map(Vendor => Vendor.CompanyName),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    //set the VendorID 
    onChangeVendorID(e) {
        this.setState({
            VendorID: e.target.value
        })
    }

    //set the Address
    onChangeAddress(e) {
        this.setState({
            Address: e.target.value
        })
    }

    //set CompanyName
    onChangeCompanyName(e) {
        this.setState({
            CompanyName: e.target.value
        })
    }

   

    //set PostalCode
    onChangePostalCode(e) {
        this.setState({
            PostalCode: e.target.value
        })
    }

    //Set Email
    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        })
    }

     //set Description
     onChangeDescription(e) {
        this.setState({
            Description: e.target.value
        })
    }

    //Set Materials
    onChangeMaterials(e) {
        this.setState({
            Materials: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const Vendor = {
            VendorID: this.state.VendorID,
            CompanyName: this.state.CompanyName,
            Address: this.state.Address,
            PostalCode: this.state.PostalCode,
            Email: this.state.Email,
            Description: this.state.Description,
            Materials: this.state.Materials

        }

        console.log(Vendor);

        axios.post('http://localhost:5000/Vendor/update/' + this.props.match.params.id, Vendor)
            .then(res => console.log(res.data));
        alert("Edit Successfully")
        window.location = '/';
    }

    render() {
        return ( <div >
            <div class = "row" >
            <div class = "col-6" >
            <br/ > < br/ > < br/ > < br/ > < br/ > < br/ >
            <img src = "https://c.tenor.com/L5g2mZgoLykAAAAS/office-of-course.gif"
            width = "90%"
            height = "60% " />
            </div> <div class = "col-6" >
            <div class = "myformstyle2" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > 
            Edit Vendor</font> </h3 >  
            <form onSubmit = { this.onSubmit } >
            <div className = "form-group" >
            <label > Vendor ID: </label>
            <input type = "Number"
            required className = "form-control"
            placeholder = "Enter Vendor ID"
            value = { this.state.VendorID }
            onChange = { this.onChangeVendorID }/>
             </div >
             
              <div className = "form-group" >
            <label > Company Name: </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "EnterCompany Name"
            value = { this.state.CompanyName }
            onChange = { this.onChangeCompanyName }/> </div > 
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
            <label > Posta Code: </label>
             <input type = "text"
            className = "form-control"
            placeholder = "Enter PostalCode"
            value = { this.state.PostalCode }
            onChange = { this.onChangePostalCode }/> </div > 
             <div className = "form-group" >
           
            <div className = "form-group" >
            <label > Email: </label> <
            input type = "email"
            required className = "form-control"
            placeholder = "Enter an Email"
            value = { this.state.Email }
            onChange = { this.onChangeEmail }/>  </div> 

            <div className = "form-group" >
            <label > Brief Description of company: </label> <
            input type = "text"
            required className = "form-control"
            placeholder = "Enter a Brief Description of company"
            value = { this.state.Description }
            onChange = { this.onChangeDescription }/>  </div>



            <div className = "form-group" >
            <label > SupplyMaterials And goods: </label> <
            input type = "text"
            required className = "form-control"
            placeholder = "Enter an SupplyMaterials And goods"
            value = { this.state.Materials }
            onChange = { this.onChangeMaterials }/>  </div>


            
            
            
            
            </div > <div className = "form-group" >
            <input type = "submit"
            value = "Edit"
            className = "btn btn-primary" />
            </div> </form > </div> </div >  </div> </div >  <br/ > < br/ > 
             </div>
        );
    }
}