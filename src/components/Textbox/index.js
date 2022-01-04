import React from "react";
import "./Textbox.css";

function Textbox({ name, type, placeholder }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      aria-required="true"
      required
    />
  );
}

export default Textbox;
