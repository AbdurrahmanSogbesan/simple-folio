import React from "react";
import "./TextArea.css";

function TextArea({ name, placeholder }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      rows="5"
      aria-required="true"
      required
      spellCheck="false"
    ></textarea>
  );
}

export default TextArea;
