import React from "react";
import Icon from "../Icon/Icon";
import "./Footer.css";

function Footer({ linkText }) {
  return (
    <div>
      <div className="linkText">
        <span>{linkText}</span>
        <Icon icon="arrow" width="30" />
      </div>
      <div className="iconRow">
        <Icon icon="twitter" />
        <Icon icon="facebook" />
        <Icon icon="linkedin" />
        <Icon icon="github" />
        <Icon icon="dribbble" />
        <Icon icon="instagram" />
      </div>
    </div>
  );
}

export default Footer;
