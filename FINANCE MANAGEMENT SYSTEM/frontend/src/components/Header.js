import React from "react";

function Header() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-lig">
            <a className="navbar-brand" href="#" style={{color:"#990033"}}>Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collaps" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#" style={{color:"blue"}}>HOME </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/add" style={{color:"#000000"}}>Create Payment</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/add" style={{color:"#000000"}}>View Payment</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/add" style={{color:"#000000"}}>Update Payment</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/add" style={{color:"#000000"}}>Delete Payment</a>
                    </li>
                </ul>
            </div>
        </nav>
        
    )
}

export default Header;