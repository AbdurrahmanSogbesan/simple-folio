import React from "react";
import "./BaseText.css";

function BaseText({ text, className="baseText" }) {
  return <span className={className}>{text}</span>;
}

export default BaseText;
