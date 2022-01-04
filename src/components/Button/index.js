import React from "react";
import "./Button.css";

function Button({ text, onChange, disabled }) {
  return (
    <button type="submit" disabled={disabled} onChange={onChange}>
      {text}
    </button>
  );
}

export default Button;
