import React from "react";
import { Link } from "react-router-dom";
import "./home.css"; // NAVBAR CSS file

function Home() {
  return (
    <>
      <div className="mainPage">
        <header className="home-header">
          <h1>
            <u>Calculate your CGPA & SPGA quickly and easily</u>
          </h1>
        </header>
        <br />
        <div className="jntuhPhotoDiv">
          <img
            alt="JHTUH"
            src="https://m.media-amazon.com/images/I/71y50-KHLoL.png"
            className="jntuhPhoto"
          />
        </div>
        <section className="home-content">
          <h3>FOR CALCULAATOR DETAILS , VISIT INSTRUCTIONS SECTION _ </h3>
          <br />
          <h4 className="hsP">
            PLEASE! GIVE THE RESPONCES , IT WILL HELP US TO IMPROVE APPLICATION
            .......!
          </h4>
        </section>

        <hr />

        <footer className="home-footer">
          <p>&copy; 2024 CGPA Calculator App. All rights reserved.</p>
        </footer>
        <br />
      </div>
      <div className="navigation">
        <Link to="/instructions" className="nav-link">
          <div className="bo-text">
            <b> &nbsp; INSTRUCTIONS &nbsp;</b>
          </div>
        </Link>
        <Link to="/SgpaCal" className="nav-link">
          <div className="bo-text">
            <b> &nbsp; SGPA CALCULATOR &nbsp;</b>
          </div>
        </Link>
        <Link to="/CgpaCal" className="nav-link">
          <div className="bo-text">
            <b> &nbsp; CGPA CALCULATOR &nbsp;</b>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Home;
