import React from "react";
import "./DarkToggle.css";

function DarkToggle() {
  return (
    <div className="darkMode__toggle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#545454"
        cursor="pointer"
      >
        <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"></path>
      </svg>
    </div>
  );
}

export default DarkToggle;
