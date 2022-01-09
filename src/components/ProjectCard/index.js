import React from "react";
import BaseText from "../BaseText";
import Label from "../Label";
import "./ProjectCard.css";

function ProjectCard({ title, description, labels }) {
  return (
    <div className="projectCard">
      <div className="projectCard__overlay"></div>
      <div className="projectCard__content">
        <span className="projectCard__title">{title}</span>
        <BaseText className="projectBaseText" text={description} />
        <div className="labelRow">
          {labels.map((text) => (
            <Label className="projectCard__label" text={text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
