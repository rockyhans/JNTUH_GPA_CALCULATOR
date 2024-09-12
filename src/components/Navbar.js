import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // NAVBAR CSS file

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <img
            src="https://cdn3.vectorstock.com/i/1000x1000/16/17/initial-dr-script-letter-type-logo-design-vector-35581617.jpg"
            alt="LOGO"
            className="logoImg"
          />
        </div>
        <div className="scrolling-text">
          <h1>
            <u>
              <b>Welcome To GPA (SGPA & CGPA) Calculator(JNTUH) ! </b>
            </u>
          </h1>
        </div>
        <input className="search" placeholder="Search..." />
      </nav>

      <div className="header">
        <Link to="/" className="nav-button">
          <div className="bo-text">
            <b> &nbsp; HOME & ABOUT &nbsp;</b>
          </div>
        </Link>

        <Link to="/instructions" className="nav-button">
          <div className="bo-text">
            <b> &nbsp; INSTRUCTIONS &nbsp;</b>
          </div>
        </Link>

        <Link to="/SgpaCal" className="nav-button">
          <div className="bo-text">
            <b> &nbsp; SGPA CALCULATOR &nbsp;</b>
          </div>
        </Link>

        <Link to="/CgpaCal" className="nav-button">
          <div className="bo-text">
            <b> &nbsp; CGPA CALCULATOR &nbsp;</b>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
