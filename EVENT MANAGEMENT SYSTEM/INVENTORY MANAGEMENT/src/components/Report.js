import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Inventory = props => ( <
    tr >
    <
    td > { props.Inventory.InventoryID } </td> <
    td > { props.Inventory.InventoryName } </td> <
    td > { props.Inventory.Value } </td> <
    td > { props.Inventory.OnStock } </td> <
    td > { props.Inventory.Quantity } </td> <
    td > { props.Inventory.Location } </td> <
    td > { props.Inventory.ItemDescription } </td> <
    td >
    <
    Link to = { "/edit/" + props.Inventory._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteInventory(props.Inventory._id) }}>Delete</a > </
    td > </tr> 
)

export default class InventoryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Inventory: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Inventory/')
            .then(response => {
                this.setState({ Inventory: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Inventory/')
            .then(response => {
                this.setState({ Inventory: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteInventory(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('http://localhost:5000/Inventory/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                Inventory: this.state.Inventory.filter(el => el._id !== id)
            })
        }
    }

    InventoryList() {
        return this.state.Inventory.map(currentInventory => {
            return <Inventory Inventory = { currentInventory }
            deleteInventory = { this.deleteInventory }
            key = { currentInventory._id }
            />;
        })
    }

    filterData(Inventory, searchKey) {

        this.setState({
            Inventory: this.state.Inventory.filter(el => el.InventoryName = searchKey)
        })

    }

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Inventory/').then(response => {

            const resultt = response.data
            const result = resultt.filter((props) =>
                props.InventoryName.includes(searchKey)
            )

            this.setState({ Inventory: result })

        });

    }
    Report (){ window.print();}

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
            h4 > Inventory Report </h4> </
            div > </
            div>

            <
            table class="table table-bordered table-success" >
            <
            thead className = "thead-light" >
            <
            tr >
            <
            th > Inventory ID </th> <
            th > Inventory Name </th> <
            th > Inventory  Value </th> <
            th > On Stock </th> <
            th > Quantity </th> <
            th > Location </th> <
            th > Item Description </th> </
            tr > </
            thead> <
            tbody >
            
             {
                this.state.Inventory.map(props =>
                    <
                    tr key = { props.InventoryID } >
                    
                    <td > { props.InventoryID } </td>  <
                    td > { props.InventoryName } </td>  <
                    td > { props.Value } </td>  <
                    td > { props.OnStock } </td>  < 
                    td > { props.Quantity } </td>  <  
                    td > { props.Location } </td>  < 
                    td > { props.ItemDescription } </td>  
                    

                    </tr>
                )

            }

            </tbody> </table >

            <div className = "container" >
           
            
            <input type = "Button"
            onClick = { this.Report }
            value = "Print This Report"
            className = "btn btn-danger"/>
            </div>

            </div>
        )
    }
}









