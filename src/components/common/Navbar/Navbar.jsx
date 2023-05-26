// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/" onClick={handleLinkClick}>
          <img src={Logo} alt="Logo" />
        </Link>
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
            <Link to="/" onClick={handleLinkClick}>
              <img src={logoMobile} alt="Logo-Mobile" />
            </Link>
          </div>
        ) : null}
        <Link to="/" onClick={handleLinkClick}>
          Home
        </Link>
        <Link to="/services" onClick={handleLinkClick}>
          Services
        </Link>
        <Link to="/products" onClick={handleLinkClick}>
          Products
        </Link>
        <Link to="/jobs" onClick={handleLinkClick}>
          Jobs
        </Link>
        <Link to="/contact" onClick={handleLinkClick}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
