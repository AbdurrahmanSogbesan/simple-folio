import React from "react";
import "./TextArea.css";

function TextArea({ name, placeholder, rows, onChange }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      rows={rows}
      aria-required="true"
      required
      spellCheck="false"
      onChange={onChange}
    ></textarea>
  );
}

export default TextArea;
