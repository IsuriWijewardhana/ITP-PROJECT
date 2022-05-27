import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return ( <
            nav className = "navbar navbar-dark bg-dark-nav navbar-expand-lg d-flex" style={{background:"rgb(85 0 114)"}}>
            <
            Link to = "/"
            className = "navbar-brand text-center flex-grow-1" ><font face = "Lato" size ="10"> Employee Management </font></Link> <
            div className = "collpase navbar-collapse flex-grow-0" >
            <form class="form-inline my-2 my-lg-0">
            <
            ul className = "navbar-nav mr-auto" >
            
            <
            Link to = "/Report" >
            <button class="btn btn-success my-4 my-sm-0" type="submit" style={{background:"#fcff18",color:"#000"}}>Report</button></Link>
            </ul >
            </form>
            </div > </nav>
        );
    }
}