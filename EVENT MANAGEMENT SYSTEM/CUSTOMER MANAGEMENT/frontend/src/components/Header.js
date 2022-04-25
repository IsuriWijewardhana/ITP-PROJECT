//import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#" style={{color:"red"}}>Rusty Deco</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to="/" className="nav-link">
          All Customers 
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/add" className="nav-link">
          Add Customer
        </Link>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Header;