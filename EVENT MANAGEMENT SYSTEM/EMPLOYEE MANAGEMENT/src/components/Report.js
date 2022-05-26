import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Employee = props => ( <
    tr >
    <
    td > { props.Employee.EmployeeID } </td> <
    td > { props.Employee.EmployeeName } </td> <
    td > { props.Employee.Address } </td> <
    td > { props.Employee.Telephone } </td> <
    td > { props.Employee.Email } </td> <
    td > { props.Employee.Type } </td> <
    td > { props.Employee.Discription } </td> <
    td >
    <
    Link to = { "/edit/" + props.Employee._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteEmployee(props.Employee._id) }}>Delete</a > </
    td > </tr> 
)

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Employee: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Employee/')
            .then(response => {
                this.setState({ Employee: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Employee/')
            .then(response => {
                this.setState({ Employee: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteEmployee(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('http://localhost:5000/Employee/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                Employee: this.state.Employee.filter(el => el._id !== id)
            })
        }
    }

    EmployeeList() {
        return this.state.Employee.map(currentEmployee => {
            return <Employee Employee = { currentEmployee }
            deleteEmployee = { this.deleteEmployee }
            key = { currentEmployee._id }
            />;
        })
    }

    filterData(Employee, searchKey) {

        this.setState({
            Employee: this.state.Employee.filter(el => el.EmployeeName = searchKey)
        })

    }

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Employee/').then(response => {

            const resultt = response.data
            const result = resultt.filter((props) =>
                props.EmployeeName.includes(searchKey)
            )

            this.setState({ Employee: result })

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
            h4 > Employee Report </h4> </
            div > </
            div>

            <
            table class="table table-bordered bg-light" >
            <
            thead className = "thead-dark align-middle" >
            <
            tr >
            <
            th className='align-middle'> Employee ID </th> <
            th className='align-middle'> Employee Name </th> <
            th className='align-middle'> Employee Street Address </th> <
            th className='align-middle'> Postal Code </th> <
            th className='align-middle'> E mail </th> <
            th className='align-middle'> Brief Type of Employee </th> <
            th className='align-middle'> Supply Discription And goods </th> </
            tr > </
            thead> <
            tbody >
            
             {
                this.state.Employee.map(props =>
                    <
                    tr key = { props.EmployeeID } >
                    
                    <td > { props.EmployeeID } </td>  <
                    td > { props.EmployeeName } </td>  <
                    td > { props.Address } </td>  <
                    td > { props.Telephone } </td>  < 
                    td > { props.Email } </td>  <  
                    td > { props.Type } </td>  < 
                    td > { props.Discription } </td>  
                    

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





