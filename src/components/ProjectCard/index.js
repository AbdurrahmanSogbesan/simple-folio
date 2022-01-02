import React from "react";
import BaseText from "../BaseText";
import Label from "../Label";
import "./ProjectCard.css";

function ProjectCard({ title, description, label1, label2, label3, label4 }) {
  return (
    <div className="projectCard">
      <div className="projectCard__overlay"></div>
      <div className="projectCard__content">
        <span className="projectCard__title">{title}</span>
        <BaseText className="projectBaseText" text={description} />
        <div className="labelRow">
          <Label className="projectCard__label" text={label1} />
          <Label className="projectCard__label" text={label2} />
          <Label className="projectCard__label" text={label3} />
          <Label className="projectCard__label" text={label4} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
