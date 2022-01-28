import React from "react";
import "./Resume.css";
import Header from "../../components/Header";
import H2 from "../../components/H2";
import Footer from "../../components/Footer";
import ResumePic from "../../images/resume.jpg";

function Resume() {
  return (
    <div>
      <Header />
      <div className="resume">
        <H2 text="Resume." />
        <p className="subtitle">
          Reach out to me via my <strong>contact page</strong>,{" "}
          <strong>view</strong> or <strong>download</strong> the resume
        </p>
        <img src={ResumePic} className="resumePic" alt="" />
        <Footer
          navTo="/contact"
          linkText="Are you convinced to contact me now ?"
        />
      </div>
    </div>
  );
}

export default Resume;
