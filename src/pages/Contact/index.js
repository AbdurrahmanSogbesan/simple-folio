import React from "react";
import H2 from "../../components/H2";
import "./Contact.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TextBox from "../../components/TextBox";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

function Contact() {
  return (
    <div>
      <Header />
      <div className="contact">
        <H2 text="Contact." />
        <p className="subtitle">
          Get in touch or shoot an email directly on
          <strong> abdurrahman0803@gmail.com</strong>
        </p>
        <form action="submit">
          <TextBox name="name" type="text" placeholder="Name" required="true" />
          <TextBox
            name="email"
            type="text"
            placeholder="Email"
            required="true"
          />
          <TextArea
            name="message"
            placeholder="Message"
            rows="5"
            required="true"
          />
          <Button text="Send Message" />
        </form>
        <Footer navTo="/" linkText="Go Back Home" />
      </div>
    </div>
  );
}

export default Contact;
