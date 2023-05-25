import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../../Assets/images/Logo.png";
import logoMobile from "../../../Assets/images/Logo-mobile.svg";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`nav-bar ${isMenuOpen ? "open" : ""}`}>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={handleMenuToggle}
      >
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        {isMenuOpen ? (
          <div className="logo-mobile">
            <img src={logoMobile} alt="Logo-Mobile" />
          </div>
        ) : (
          ""
        )}
        <a href="#" onClick={handleLinkClick}>
          Services
        </a>
        <a href="#" onClick={handleLinkClick}>
          Products
        </a>
        <a href="#" onClick={handleLinkClick}>
          Jobs
        </a>
        <a href="#" onClick={handleLinkClick}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
