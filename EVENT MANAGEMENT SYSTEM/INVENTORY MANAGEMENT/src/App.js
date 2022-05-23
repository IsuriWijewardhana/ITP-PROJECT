import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import EditInventory from "./components/edit-Inventory.component";
import CreateInventory from "./components/create-Inventory.component";
import InventoryList from "./components/Inventory-list.component";
import Report from "./components/Report";


function App() {

    return ( <
        Router >
        <
        div className = "container" >
        <Navbar / >
        <br / >
        <Route path = "/" exact component = { InventoryList }/>
        <Route path = "/edit/:id" component = { EditInventory }/> 
        <Route path = "/create" component = { CreateInventory }/>
        <Route path = "/Report" component = { Report }/> 
        
        </
        div > </Router>
    );
}

export default App;

