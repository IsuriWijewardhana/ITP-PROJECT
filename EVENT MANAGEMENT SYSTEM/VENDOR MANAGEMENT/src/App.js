import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import EditVendor from "./components/edit-Vendor.component";
import CreateVendor from "./components/create-Vendor.component";
import VendorList from "./components/Vendor-list.component";
import Report from "./components/Report";



function App() {

    return ( <
        Router >
        <
        div className = "container" >
        <Navbar / >
        <br / >
        <Route path = "/" exact component = { VendorList }/>
        <Route path = "/edit/:id" component = { EditVendor }/> 
        <Route path = "/create" component = { CreateVendor }/>
        <Route path = "/Report" component = { Report }/> 
        
        </
        div > </Router>
    );
}

export default App;