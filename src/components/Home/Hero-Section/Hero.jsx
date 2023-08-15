import "./Hero.css";

import { Link } from "react-router-dom";
import React from "react";
import downArrow from "../../../Assets/icons/down-arrow.svg";
import heroSample1 from "../../../Assets/images/Hero-sample-1.png";
import heroSample2 from "../../../Assets/images/Hero-sample-2.png";
import heroSample3 from "../../../Assets/images/Hero-Sample-3.jpg";
import heroSample4 from "../../../Assets/images/Hero-sample-4.jpg";
import phoneIcon from "../../../Assets/icons/phone-icon.svg";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">The Scholar’s Point</h1>
        <h3 className="hero-subheading">
          The one-stop shop for all your academic stationery needs.
        </h3>
      </div>

      <div className="hero-links">
        <Link to={"/services"} style={{ textDecoration: "none" }}>
          <div className="hero-button">Services</div>
        </Link>

        <div className="hero-contact">
          <img src={phoneIcon} alt="phone-icon" />
          <a href="tel:+91-9439223702">
            <p>+919439223702</p>
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-button">
          <div className="scrolling-text">
            <span className="word">S</span>
            <span className="word">C</span>
            <span className="word">R</span>
            <span className="word">O</span>
            <span className="word">L</span>
            <span className="word">L</span>
          </div>
          <img src={downArrow} alt="down-arrow-icon" />
        </div>
        <div className="hero-images">
          <img src={heroSample1} alt="" />
          <img src={heroSample2} alt="" />
          <img src={heroSample3} alt="" />
          <img src={heroSample4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
