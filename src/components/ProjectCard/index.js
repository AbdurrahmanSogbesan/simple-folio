import React from "react";
import BaseText from "../BaseText";
import Label from "../Label";
import "./ProjectCard.css";

function ProjectCard() {
  return (
    <div className="projectCard">
      <div className="projectCard__content">
        <span className="projectCard__title">Piggment</span>
        <BaseText
          className="projectBaseText"
          text="The colours for the next smart creator"
        />
        <div className="labelRow">
          <Label className="projectCard__label" text="React" />
          <Label className="projectCard__label" text="Sass & CSS" />
          <Label className="projectCard__label" text="Javascript" />
          <Label className="projectCard__label" text="Context" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
