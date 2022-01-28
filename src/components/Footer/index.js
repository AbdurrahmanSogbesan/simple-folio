import React from "react";
import Icon from "../Icon/Icon";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer({ linkText, navTo }) {
  return (
    <div>
      <Link to={navTo} style={{ textDecoration: "none" }}>
        <div className="linkText">
          <span>{linkText}</span>
          <Icon icon="arrow" width="30" />
        </div>
      </Link>
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
