import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./cgpaCal.css"; // CgpaCal CSS file

function CgpaCal() {
  const [semesterCount, setSemesterCount] = useState(0);
  const [semesters, setSemesters] = useState([]);
  const [cgpa, setCgpa] = useState(null);
  const [percentage, setPercentage] = useState(null);

  const handleSemesterCountChange = (e) => {
    setSemesterCount(parseInt(e.target.value, 10) || 0);
    setSemesters(
      new Array(parseInt(e.target.value, 10) || 0).fill({
        sgpa: "",
        credits: 0,
      })
    );
  };

  const handleSemesterChange = (index, field, value) => {
    const newSemesters = [...semesters];
    newSemesters[index] = { ...newSemesters[index], [field]: value };
    setSemesters(newSemesters);
  };

  const generateSemesterInputs = () => {
    return semesters.map((semester, index) => (
      <div key={index} className="inputbox1">
        <input
          className="input1"
          type="number"
          name={`sgpa-${index}`}
          value={semester.sgpa}
          onChange={(e) =>
            handleSemesterChange(index, "sgpa", parseFloat(e.target.value) || 0)
          }
          placeholder="SGPA"
        />

        <input
          className="input1"
          type="number"
          name={`credits-${index}`}
          value={semester.credits !== 0 ? semester.credits : ""}
          onChange={(e) =>
            handleSemesterChange(
              index,
              "credits",
              parseFloat(e.target.value) || 0
            )
          }
          placeholder="Credits"
        />
        <br />
        <br />
      </div>
    ));
  };

  const handleCgpaSubmit = (e) => {
    e.preventDefault();
    let totalWeightedSgpa = 0;
    let totalCredits = 0;

    semesters.forEach(({ sgpa, credits }) => {
      totalWeightedSgpa += sgpa * credits;
      totalCredits += credits;
    });

    const calculatedCgpa = totalCredits
      ? (totalWeightedSgpa / totalCredits).toFixed(2)
      : 0;
    setCgpa(calculatedCgpa);

    let calculatedPercentage = (calculatedCgpa * 10 - 7.5).toFixed(2);
    if (calculatedPercentage === "-7.50") {
      calculatedPercentage = 0;
    }
    setPercentage(calculatedPercentage);
  };

  return (
    <div>
      <div className="mainPage">
        <main>
          <div className="calculator">
            <form onSubmit={handleCgpaSubmit}>
              <h2>
                <u>CGPA CALCULATOR</u>
              </h2>
              <br />
              <div id="sub">
                <h3 id="sta1">NUMBER OF SEMESTERS :</h3>
                <input
                  className="sunNum"
                  type="number"
                  value={semesterCount}
                  onChange={handleSemesterCountChange}
                />
              </div>
              {generateSemesterInputs()}
              <button type="submit" id="submit">
                <div className="sub-text">
                  <b> SUBMIT </b>
                </div>
              </button>
              <br />
              <br />
            </form>
            {cgpa !== null && (
              <div>
                <div id="sgpa" className="animated-border-box">
                  <br />
                  <h2>
                    <u> &nbsp; CONGRATULATIONS! &nbsp; </u>
                  </h2>
                  <br />
                  <h3> &nbsp; YOUR CGPA IS : &nbsp; </h3>
                  <br />
                  <div className="sgpa-show">
                    <p id="show">{cgpa}</p>
                  </div>
                  <br />
                  <h3> &nbsp; YOUR PERCENTAGE IS : &nbsp;</h3>
                  <br />
                  <div className="percentage-show sgpa-show">
                    <p id="percentage">{percentage}%</p>
                  </div>
                  <br />
                </div>
                <br />
                <br />
              </div>
            )}
          </div>
        </main>
      </div>
      <br />
      <br />
      <div className="navigation">
        <Link to="/" className="nav-link">
          <div className="bo-text">
            <b> &nbsp; HOME &nbsp;</b>
          </div>
        </Link>
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
      </div>
    </div>
  );
}

export default CgpaCal;
