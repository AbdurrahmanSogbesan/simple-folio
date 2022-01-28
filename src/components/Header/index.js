import React from "react";
import Logo from "../Logo";
import DarkToggle from "../DarkToggle";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo />
      </Link>
      <div className="header__right">
        <div className="header__links">
          <Link to="/about" style={{ textDecoration: "none" }}>
            <span className="header__link">About</span>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <span className="header__link">Projects</span>
          </Link>
          <Link to="/resume" style={{ textDecoration: "none" }}>
            <span className="header__link">Resume</span>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <span className="header__link">Contact</span>
          </Link>
          <DarkToggle />
        </div>
        <div className="header__hamburgerContainer">
          <div className="header__hamburger"></div>
          <div className="header__hamburger"></div>
          <div className="header__hamburger"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
