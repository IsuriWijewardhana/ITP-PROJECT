import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class EditInventory extends Component {
    constructor(props) {
        super(props);

        this.onChangeInventoryID = this.onChangeInventoryID.bind(this);
        this.onChangeInventoryName = this.onChangeInventoryName.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onChangeOnStock = this.onChangeOnStock.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeItemDescription = this.onChangeItemDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            InventoryID: '',
            InventoryName: '',
            Value: '',
            OnStock: '',
            Quantity: '',
            Location: '',
            ItemDescription: '',
            Inventory: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Inventory/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    InventoryID: response.data.InventoryID,
                    Value: response.data.Value,
                    InventoryName: response.data.InventoryName,
                    OnStock: response.data.OnStock,
                    Quantity: response.data.Quantity,
                    Location: response.data.Location,
                    ItemDescription: response.data.ItemDescription,
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Inventory/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Inventory: response.data.map(Inventory => Inventory.InventoryName),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    //set the InventoryID 
    onChangeInventoryID(e) {
        this.setState({
            InventoryID: e.target.value
        })
    }

    //set the Value
    onChangeValue(e) {
        this.setState({
            Value: e.target.value
        })
    }

    //set InventoryName
    onChangeInventoryName(e) {
        this.setState({
            InventoryName: e.target.value
        })
    }

   

    //set OnStock
    onChangeOnStock(e) {
        this.setState({
            OnStock: e.target.value
        })
    }

    //Set Quantity
    onChangeQuantity(e) {
        this.setState({
            Quantity: e.target.value
        })
    }

     //set Location
     onChangeLocation(e) {
        this.setState({
            Location: e.target.value
        })
    }

    //Set ItemDescription
    onChangeItemDescription(e) {
        this.setState({
            ItemDescription: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const Inventory = {
            InventoryID: this.state.InventoryID,
            InventoryName: this.state.InventoryName,
            Value: this.state.Value,
            OnStock: this.state.OnStock,
            Quantity: this.state.Quantity,
            Location: this.state.Location,
            ItemDescription: this.state.ItemDescription

        }

        console.log(Inventory);

        axios.post('http://localhost:5000/Inventory/update/' + this.props.match.params.id, Inventory)
            .then(res => console.log(res.data));
        alert("Edit Successfully")
        window.location = '/';
    }

    render() {
        return ( <div >
            <div class = "row" >
            <div class = "col-6" >
            <br/ > < br/ > < br/ > < br/ > < br/ > < br/ >
            <img src = "https://www.carmensoftware.com/wp-content/uploads/2020/03/Multiple-Valuation-Methods_.gif"
            width = "90%"
            height = "60% " />
            </div> <div class = "col-6" >
            <div class = "myformstyle2" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > 
            Edit Inventory</font> </h3 >  
            <form onSubmit = { this.onSubmit } >
            <div className = "form-group" >
            <label > Inventory ID: </label>
            <input type = "Number"
            required className = "form-control"
            placeholder = "Enter Inventory ID"
            value = { this.state.InventoryID }
            onChange = { this.onChangeInventoryID }/>
             </div >
             
              <div className = "form-group" >
            <label > Inventory Name: </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "EnterInventory Name"
            value = { this.state.InventoryName }
            onChange = { this.onChangeInventoryName }/> </div > 
             <div className = "form-group" >
            <label > Value: </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Enter Value"
            //maxlength = "10"
            value = { this.state.Value }
            onChange = { this.onChangeValue }/>
            </div > 
             <div className = "form-group" >
            <label > Posta Code: </label>
             <input type = "text"
            className = "form-control"
            placeholder = "Enter OnStock"
            value = { this.state.OnStock }
            onChange = { this.onChangeOnStock }/> </div > 
             <div className = "form-group" >
           
            <div className = "form-group" >
            <label > Quantity: </label> <
            input type = "Quantity"
            required className = "form-control"
            placeholder = "Enter an Quantity"
            value = { this.state.Quantity }
            onChange = { this.onChangeQuantity }/>  </div> 

            <div className = "form-group" >
            <label > Location: </label> <
            input type = "text"
            required className = "form-control"
            placeholder = "Enter a Location"
            value = { this.state.Location }
            onChange = { this.onChangeLocation }/>  </div>

            <div className = "form-group" >
            <label > Item Description: </label> <
            textarea type = "text"
            required className = "form-control"
            placeholder = "Enter an Item Description"
            value = { this.state.ItemDescription }
            onChange = { this.onChangeItemDescription }/>  </div>

            
            
            
            
            </div > <div className = "form-group" >
            <input type = "submit"
            value = "Edit"
            className = "btn btn-primary" />
            </div> </form > </div> </div >  </div> </div >  <br/ > < br/ > 
             </div>
        );
    }
}









