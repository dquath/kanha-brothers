import React from "react";
import "./ServiceSection.css";
import cardImage from "../../../Assets/images/service-card-image.png";
import rightArrow from "../../../Assets/icons/white-right-arrow.png";
const ServiceSection = () => {
  return (
    <div className="service-section">
      <div className="top-section">
        <h1 className="header">Services we offer</h1>
        <button>See all</button>
      </div>
      <div className="service-cards">
        <div className="service-card">
          <img src={cardImage} alt="" className="card-image" />
          <div className="card-title">
            <h1 className="title-text">Internet cafe</h1>
            <div className="card-link">
              <h2>View Service</h2>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
