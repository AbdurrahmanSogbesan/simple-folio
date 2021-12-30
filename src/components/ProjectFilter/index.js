import React, { useState } from "react";
import Label from "../Label";
import "./ProjectFilter.css";

function ProjectFilter({ text }) {
  const [isClicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!isClicked);
  };
  return (
    <div>
      <Label
        text={text}
        onClick={handleClick}
        className={isClicked ? "projectFilterClicked" : "projectFilter"}
      />
    </div>
  );
}

export default ProjectFilter;
