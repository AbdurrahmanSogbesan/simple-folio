import React from "react";
import "./Label.css";


function Label({ text, className = "label", onClick }) {
  return (
    <span onClick={onClick} className={className}>
      {text}
    </span>
  );
}

export default Label;
