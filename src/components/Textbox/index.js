import React from "react";
import "./TextBox.css";

function TextBox({ name, type, placeholder, ariaRequired, onChange }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      aria-required={ariaRequired}
      required
      onChange={onChange}
    />
  );
}

export default TextBox;
