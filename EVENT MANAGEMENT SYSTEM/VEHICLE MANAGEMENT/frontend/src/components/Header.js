import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" style={{ color: "red" }}>
        RUSTY DECO
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li class="nav-item active">
            <Link to="/vehicles" className="nav-link">
              <font color="blue">All Vehicles</font>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/add" className="nav-link">
              <font color="blue"> Add Vehicle</font>
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
