import React from "react";
import { ReactComponent as RightArrow } from "../../../Assets/icons/right-arrow-white.svg";
import cardImage from "../../../Assets/images/service-card-image.png";
import "./ServiceCard.css";
import { Link } from "react-router-dom";
const ServiceCard = ({ title }) => {
  return (
    <Link to={`/services/${title}`} style={{ textDecoration: "none" }}>
      <div className="service-card" style={{ background: `url(${cardImage})` }}>
        <div className="card-title">
          <h1 className="title-text">{title}</h1>
          <div className="card-link">
            <h2>View Service</h2>
            <RightArrow className="right-arrow" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
