import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';


const Vendor = props => ( <
    tr >
    <
    td > { props.Vendor.VendorID } </td> <
    td > { props.Vendor.CompanyName } </td> <
    td > { props.Vendor.Address } </td> <
    td > { props.Vendor.PostalCode } </td> <
    td > { props.Vendor.Email } </td> <
    td > { props.Vendor.Description } </td> <
    td > { props.Vendor.Materials } </td> <
    td >
    <
    Link to = { "/edit/" + props.Vendor._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteVendor(props.Vendor._id) }}>Delete</a > </
    td > </tr> 
)

export default class VendorList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Vendor: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/Vendor/')
            .then(response => {
                this.setState({ Vendor: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Vendor/')
            .then(response => {
                this.setState({ Vendor: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteVendor(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('http://localhost:5000/Vendor/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                Vendor: this.state.Vendor.filter(el => el._id !== id)
            })
        }
    }

    VendorList() {
        return this.state.Vendor.map(currentVendor => {
            return <Vendor Vendor = { currentVendor }
            deleteVendor = { this.deleteVendor }
            key = { currentVendor._id }
            />;
        })
    }


    filterData(Vendor, searchKey) {

        this.setState({
            Vendor: this.state.Vendor.filter(el => el.CompanyName = searchKey)
        })

    }





    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Vendor/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.CompanyName.includes(searchKey)
            )

            this.setState({ Vendor: result })

        });

    }

    render() {
        return ( <
            div className = "container" >
    
            <div style = {
                { float: 'none'}
            } > 
           
            </div>  <br/>
            
            <
            div className = "row" >
            <
            div className = "col-lg-9 mt-2 mb-2" >
            <
            h4 > All Vendor </h4> </
            div > <
            div className = "col-lg-3 mt-2 mb-2" >
            <
            input className = "form-control"
            type = "search"
            placeholder = "Search by Company Name"
            name = "searchQuery"
            onChange = { this.handleSearchArea } >
            </
            input> </
            div > </
            div>


            <
            table class="table table-bordered table-white" >
            <
            thead className = "thead-light" >
            <
            tr >
            <
            th > Vendor ID </th> <
            th > Company Name </th> <
            th > Company Street Address </th> <
            th > Postal Code </th> <
            th > E mail </th> <
            th > Brief Description of company </th> <
            th > Supply Materials And goods </th> <
            th > Actions </th> </
            tr > </
            thead> <
            tbody >
            
             {
                this.state.Vendor.map(props =>
                    <
                    tr key = { props.VendorID } >
                    
                    <td > { props.VendorID } </td>  <
                    td > { props.CompanyName } </td>  <
                    td > { props.Address } </td>  <
                    td > { props.PostalCode } </td>  < 
                    td > { props.Email } </td>  <  
                    td > { props.Description } </td>  < 
                    td > { props.Materials } </td>  <  

                    td >
                    <
                    Link to = { "/edit/" + props._id } >  <Button variant = "warning btn-sm"> Edit </Button> </Link>  
                    <a href="" onClick={() => { this.deleteVendor(props._id) }}> <Button variant = "danger btn-sm"> Delete </Button> </a > 
                    </
                    td >

                    </tr>
                )

            }

            </tbody> </
            table >

            <
            div style = {
                { float: 'right' }
            } >

            <
            Link to = "/create" >
            <button type="button" class="btn btn-success" variant = "primary" > New Vendor </button>
            </
            Link >
            </div>

            </div>
        )
    }
}