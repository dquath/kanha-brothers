import "./AboutSection.css";

import React from "react";
import { useNavigate } from "react-router-dom";
import profilePic from "../../../Assets/images/shop-pic.jpg";
const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-top">
          <h1 className="about-heading">Who are we?</h1>
        </div>
        <div className="about-middle">
          <div className="about-image-name">
            <div className="about-image">
              <img src={profilePic} alt="about" />
            </div>
            <div className="about-name">
              <h3>Dibya Sankar Sahu</h3>
              <p>Proprietor</p>
            </div>
          </div>
          <div className="about-contact">
            <button onClick={() => navigate("/contact")}>Contact Us</button>
          </div>
        </div>

        <div className="about-bottom">
          <p>
            Kanha and Brothers in Jyoti Vihar, Burla, Sambalpur established in
            the year 1997, is one of the leading businesses in the Office
            Stationery Dealers. Also known for Photocopying Centres, Office
            Stationery Dealers. We believe that customer satisfaction is as
            important as our products and services quality. We provide Extensive
            Product Selection, Premium Quality, Competitive Prices and Excellent
            Customer Service. Whether you're running a small home office or
            managing a large corporate space, we have the products you need to
            keep things organized, efficient, and inspiring. Join countless
            satisfied customers who have made us their go-to source for office
            stationery.
          </p>
          <div className="about-service">
            <button onClick={() => navigate("/services")}>
              Services we offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
