import React from "react";
import { ReactComponent as RightArrow } from "../../../Assets/icons/right-arrow-white.svg";
import cardImage from "../../../Assets/images/service-card-image.png";
import "./ServiceCard.css";

const ServiceCard = ({ title }) => {
  return (
    <div className="service-card" style={{ background: `url(${cardImage})` }}>
      <div className="card-title">
        <h1 className="title-text">Internet cafe</h1>
        <div className="card-link">
          <a href="">
            <h2>View Service</h2>
          </a>
          <RightArrow className="right-arrow" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
