import React from "react";
import { Link } from "react-router-dom";
import "./instructions.css"; // mainPage CSS file

function mainPages() {
  return (
    <div>
      <div className="mainPage">
        <h2>
          <u>SGPA Calculator (Semester Grade Point Average)</u>
        </h2>
        <br/>
        <section id="calculation">
          <h3 id="in1">1. Illustration of calculation of SGPA</h3>
          <h3 id="in1">2. Declaration of results</h3>
          <h4>What is an SGPA Calculator?</h4>
          <p>
            In simple terms, a calculator is used to calculate a specific value
            after mathematical operations. Likewise, an SGPA-to-
            calculator is a tool or specially-designed calculator that converts
            the SGPA (Semester Grade Point Average) grade points to 
            values. These conversions are usually used in the education field.
          </p>
          <h4>What is SGPA?</h4>
          <div style={{ color: "rgb(3, 201, 3)" }}>
            The full form of SGPA is Semester Grade Point Average. This grading
            parameter is used by institutions to give the performance grading of
            students for a semester. SGPA is most widely used by colleges or
            institutions but is not common for all of them. Hence, a calculator
            to convert these SGPA points into s is always needed or
            asked by students.
            <ul>
              <li>
                <strong>Semester:</strong> The semester is of 6 months and
                academic years are usually divided into semesters for better &
                detailed learning of the course.
              </li>
              <li>
                <strong>Grade Point:</strong> These points represent the
                performance of students in a specific subject learned during the
                course. These points are directly proportional to the knowledge
                of the students in that particular subject.
              </li>
              <li>
                <strong>Credit Points:</strong> These points represent the
                dedication of students to a particular subject in terms of
                hours. Every student needs to spend a definite time period on
                each subject of the semester to earn qualifying credit points.
              </li>
            </ul>
          </div>
          <h4>How to Calculate SGPA?</h4>
          <p>
            The results of each subject of a course are usually provided in
            terms of credit points. Students need to first calculate their SGPA
            for a particular semester from these credit points before converting
            them into s.
          </p>
          {/* <div className="centerDiv">
            <img
              alt="JHTUH"
              src="https://www.jntufastupdates.com/wp-content/uploads/2017/03/jntuh-sgpa.png"
              className="idpho1"
            />
          </div> */}
          <br />
        </section>
      </div>
      <div className="mainPage">
        <h2 id="inst1">
          <u>CGPA Calculator (Cumulative Grade Point Average)</u>
        </h2>
        <br/>
        <section id="calculation">
          <h3>1. Illustration of Calculation of CGPA</h3>
          <h3>2. Declaration of Results</h3>
          <h4>What is an SGPA   Calculator?</h4>
          <p>
            Just like SGPA, CGPA is used to declare the cumulative academic
            results of students over their course duration. It reflects their
            overall performance and learning capabilities throughout the entire
            program. A CGPA-to- calculator is a tool designed to
            convert the CGPA (Cumulative Grade Point Average) into a 
            format. This conversion is often required by educational
            institutions or employers who prefer to understand a student's
            performance in  terms rather than grade points. The
            conversion formula may vary across different institutions, but a
            common method is using a multiplier.
          </p>
          <h4>What is CGPA?</h4>
          <div style={{ color: "rgb(3, 201, 3)" }}>
            The full form of CGPA is Cumulative Grade Point Average. CGPA is a
            grading system used by educational institutions to give a cumulative
            performance grading of students over the entire duration of their
            course. It takes into account the SGPA of each semester and provides
            an overall grade point average.
            <ul>
              <li>
                <strong>Cumulative:</strong> Refers to the entire duration of
                the course. Unlike SGPA, which is semester-specific, CGPA
                accumulates the grade points from all semesters.
              </li>
              <li>
                <strong>Grade Point:</strong> These are numerical values
                assigned to the performance of students in subjects. Higher
                grade points indicate better performance.
              </li>
              <li>
                <strong>Credit Points:</strong> Just like SGPA, credit points in
                CGPA reflect the time and effort a student has dedicated to a
                particular subject across all semesters. Every subject carries a
                specific number of credit points, which contributes to the
                calculation of the CGPA.
              </li>
            </ul>
          </div>
          <h4>How to Calculate CGPA?</h4>
          <p>
            To calculate CGPA, take the sum of SGPAs of all semesters and divide
            it by the number of semesters. The result will give you the CGPA.
            This CGPA can then be converted into a  using the
            appropriate conversion formula specific to the educational
            institution.
          </p>
          {/* <div className="centerDiv">
            <img
              alt="JHTUH"
              src="https://www.jntufastupdates.com/wp-content/uploads/2017/03/jntuh-cgpa.png"
              className="idpho1"
            /> 
          </div>*/}
          <br />
        </section>
      </div>

      <div className="mainPage">
        <div>
          <h3 className="mar1">Where do we need SGPA/CGPAS in our life?</h3>
          <section id="calculation">
            <div style={{ color: "rgb(3, 201, 3)" }}>
              <ul>
                <li>
                  Imagine a scenario where your result just got out and you want
                  to tell your parents. But there is no unique way of explaining
                  result other than explaining every subject marks or you can
                  just average the marks.
                </li>
                <li>
                  More credits is equal to more grade points. It's easy for you
                  to give a proper result analytics to other if you use SGPA.
                </li>

                <li>
                  Guess what, we give temporary grade card containing SGPA with
                  proof. Scholorship and many entrance forms rely on student's
                  SGPA / CGPA as a constraint. Companies who comes for placement
                  are also show higher intrest in student's CGPA. As they
                  believe higher the CGPA, higher is the determination of the
                  student.
                </li>
              </ul>
            </div>
            <h3 className="margin"> Difference Between SGPA and CGPA </h3>

            <div style={{ color: "rgb(3, 201, 3)" }}>
              <ul>
                <li>
                  {" "}
                  CGPA is the abbreviation of Cumulative Grade Point Average and
                  it represents the performance of a student in an academic
                  year.
                </li>{" "}
                <li>
                  {" "}
                  SGPA is the performance grade for a semester. CGPA can be
                  calculated from SGPA after adding up all the SGPA values of
                  each semester and then dividing it by the sum of the number of
                  semesters.{" "}
                </li>
                <li>
                  {" "}
                  For example : <br />
                  <p id="text-cent">
                    if the SGPA of a student in his 1st and 2nd semester is 6
                    and 8, respectively,
                    <br />
                    Then the CGPA will be calculated as:
                    <br />
                    CGPA = (SGPA of Semester 1 + SGPA of Semester 2)/(Sum of
                    Semesters) = (6 + 8)/(1+1) = 14/2 = 7
                  </p>
                </li>
                <li>
                  Another difference between CGPA and SGPA is that CGPA is used
                  as a performance grade method at the school levels while SGPA
                  is used in higher studies.
                </li>
              </ul>
            </div>
          </section>
          <br />
        </div>
      </div>

      {/* <div className="mainPage">
        <h3 id="inst1" className="mar1">
          <u>JNTUH CALCULATIONS SGPA & CGPA</u>
        </h3>
        <div id="fcal">
          <div className="cal"></div>
          <div className="cal1"></div>
        </div>
        <br />
      </div> */}

      <div className="wrapper two">
        <div className="neon">
          <h1 id="thank">THANK YOU</h1>
          <br />
          <br />
        </div>
      </div>
      <br />
      <br />
      <div className="navigation">
        <Link to="/" className="nav-link">
          <div className="bo-text">
            <b> &nbsp; HOME &nbsp;</b>
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
    </div>
  );
}

export default mainPages;
