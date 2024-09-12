import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sgpaCal.css"; // SgpaCal CSS file

function SgpaCal() {
  const [subjectCount, setSubjectCount] = useState(0);
  const [grades, setGrades] = useState([]);
  const [sgpa, setSgpa] = useState(null);
  const [percentage, setPercentage] = useState(null);

  const gradeToPoints = {
    O: 10,
    APlus: 9,
    A: 8,
    BPlus: 7,
    B: 6,
    F: 0,
  };

  const handleSubjectCountChange = (e) => {
    setSubjectCount(parseInt(e.target.value, 10) || 0);
    setGrades(
      new Array(parseInt(e.target.value, 10) || 0).fill({
        grade: "",
        credit: 0,
      })
    );
  };

  const handleGradeChange = (index, field, value) => {
    const newGrades = [...grades];
    newGrades[index] = { ...newGrades[index], [field]: value };
    setGrades(newGrades);
  };

  const generateSubjectInputs = () => {
    return grades.map((subject, index) => (
      <div key={index} className="inputbox">
        <select
          name={`grade-${index}`}
          className="input1 inputS"
          value={subject.grade}
          onChange={(e) => handleGradeChange(index, "grade", e.target.value)}
        >
          <option value="">&nbsp;Grade</option>
          <option value="O">&nbsp;O</option>
          <option value="APlus">&nbsp;A+</option>
          <option value="A">&nbsp;A</option>
          <option value="BPlus">&nbsp;B+</option>
          <option value="B">&nbsp;B</option>
          <option value="F">&nbsp;F</option>
        </select>

        <input
          className="input1"
          type="number"
          value={subject.grade ? gradeToPoints[subject.grade] : ""}
          disabled
          placeholder="Points"
        />
        <input
          className="input1"
          type="number"
          name={`credit-${index}`}
          value={subject.credit !== 0 ? subject.credit : ""}
          onChange={(e) =>
            handleGradeChange(index, "credit", parseFloat(e.target.value) || 0)
          }
          placeholder="Credits"
        />
        <br />
        <br />
      </div>
    ));
  };

  const handleSgpaSubmit = (e) => {
    e.preventDefault();
    let totalGradePoints = 0;
    let totalCredits = 0;

    grades.forEach(({ grade, credit }) => {
      const gradePoint = gradeToPoints[grade] || 0;
      totalGradePoints += gradePoint * credit;
      totalCredits += credit;
    });

    const calculatedSgpa = totalCredits
      ? (totalGradePoints / totalCredits).toFixed(2)
      : 0;
    setSgpa(calculatedSgpa);

    let calculatedPercentage = (calculatedSgpa * 10 - 7.5).toFixed(2);
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
            <form onSubmit={handleSgpaSubmit}>
              <h2>
                <u>SGPA CALCULATOR</u>
              </h2>
              <br />
              <div id="sub">
                <h3 id="sta1">NUMBER OF SUBJECTS :</h3>
                <input
                  className="sunNum"
                  type="number"
                  value={subjectCount}
                  onChange={handleSubjectCountChange}
                />
              </div>
              {generateSubjectInputs()}
              <button type="submit" id="submit">
                <div className="sub-text">
                  <b> SUBMIT </b>
                </div>
              </button>
              <br />
              <br />
            </form>
            {sgpa !== null && (
              <div>
                <div id="sgpa">
                  <br />
                  <h2>
                    <u> &nbsp;CONGRATULATION ! &nbsp;</u>
                  </h2>
                  <br />
                  <h3>&nbsp; YOUR SGPA IS : &nbsp;</h3>
                  <br />
                  <div className="sgpa-show">
                    <p id="show">{sgpa}</p>
                  </div>
                  <br />
                  <h3> &nbsp;YOUR PERCENTAGE IS , &nbsp;</h3>
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
        <Link to="/CgpaCal" className="nav-link">
          <div className="bo-text">
            <b> &nbsp; CGPA CALCULATOR &nbsp;</b>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SgpaCal;
