import React from "react";
import { ReactComponent as RightArrow } from "../../../../Assets/icons/right-arrow-white.svg";
import "./ServiceCard.css";

const ServiceCard = () => {
  return (
    <div className="service-card">
      <div className="card-title">
        <h1 className="title-text">Internet cafe</h1>
        <div className="card-link">
          <h2>View Service</h2>
          <RightArrow className="right-arrow" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
