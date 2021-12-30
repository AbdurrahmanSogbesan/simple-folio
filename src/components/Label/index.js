import React from "react";
import "./Label.css";

function Label({ text, className = "label" }) {
  return <span className={className}>{text}</span>;
}

export default Label;
