import React from "react";
import H2 from "../../components/H2";
import "./Contact.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TextBox from "../../components/TextBox";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";

function Contact() {
  const [state, handleSubmit] = useForm("xwkylpez");
  if (state.succeeded) {
    return (
      <div className="contact">
        <p>Thanks for reaching out!</p>
        <Link to="/" style={{ textDecoration: "none" }}>
          <p>Go back Home!</p>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="contact">
        <H2 text="Contact." />
        <p className="subtitle">
          Get in touch or shoot an email directly on
          <strong> abdurrahman0803@gmail.com</strong>
        </p>
        <form action="submit" onSubmit={handleSubmit}>
          <TextBox name="name" type="text" placeholder="Name" required="true" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <TextBox
            name="email"
            type="email"
            placeholder="Email"
            required="true"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <TextArea
            name="message"
            placeholder="Message"
            rows="5"
            required="true"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <Button disabled={state.submitting} text="Send Message" />
        </form>
        <Footer navTo="/" linkText="Go Back Home" />
      </div>
    </div>
  );
}

export default Contact;
