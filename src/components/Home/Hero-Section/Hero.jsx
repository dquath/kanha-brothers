import React from "react";
import phoneIcon from "../../../Assets/icons/phone-icon.svg";
import heroSample from "../../../Assets/images/Hero-sample.png";
import downArrow from "../../../Assets/icons/down-arrow.svg";
import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">The Scholar’s Point</h1>
        <h3 className="hero-subheading">
          Lorem ipsum dolor sit amet consectetur
        </h3>
      </div>

      <div className="hero-links">
        <Link to={"/services"} style={{ textDecoration: "none" }}>
          <div className="hero-button">Services</div>
        </Link>

        <div className="hero-contact">
          <img src={phoneIcon} alt="phone-icon" />
          <p>+918763052472</p>
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
          <img src={heroSample} alt="" />
          <img src={heroSample} alt="" />
          <img src={heroSample} alt="" />
          <img src={heroSample} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
