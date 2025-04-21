import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark " style={{ fontFamily: 'Poppins, sans-serif', backgroundColor:"#161615" }}>
      <div className="container-fluid">
        <h1 className="navbar-brand" style={{ color: "white" , fontSize:"28px" ,fontWeight:"900"}}>The_Cart</h1>
        
        {/* Toggle Button for Mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto"> {/* 'mx-auto' will center the navbar items */}
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/career" className="nav-link">Career</NavLink>
            </li>
          </ul>
          <div className="d-flex gap-3">
            <NavLink to="/login">
              <button className="btn btn-light" style={{padding:"5px"}}>Login</button>
            </NavLink>
            <NavLink to="/signup">
              <button className="btn btn-light" style={{padding:"5px"}}>Sign Up</button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
