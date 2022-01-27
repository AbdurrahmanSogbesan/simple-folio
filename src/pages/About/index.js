import React from "react";
import Timeline from "../../components/Timeline";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./About.css";

function About() {
  return (
    <div>
      <Header />
      <div className="body">
        <Timeline />
        <Footer linkText="Lets Continue To Projects" />
      </div>
    </div>
  );
}

export default About;
