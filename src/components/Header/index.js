import React from "react";
import Logo from "../Logo";
import DarkToggle from "../DarkToggle";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Logo />
      <div className="header__right">
        <div className="header__links">
          <span className="header__link">About</span>
          <span className="header__link">Projects</span>
          <span className="header__link">Resume</span>
          <span className="header__link">Contact</span>
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
