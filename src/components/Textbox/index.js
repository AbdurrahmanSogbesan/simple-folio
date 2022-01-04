import React from "react";
import "./TextBox.css";

function TextBox({ name, type, placeholder }) {
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

export default TextBox;
