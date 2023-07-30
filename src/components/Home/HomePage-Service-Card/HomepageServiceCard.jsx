import React from "react";
import { ReactComponent as RightArrow } from "../../../Assets/icons/right-arrow-white.svg";
import cardImage from "../../../Assets/images/service-card-image.png";
import "./HomepageServiceCard.css";
import { useNavigate } from "react-router-dom";
const ServiceCard = ({ title }) => {
  const naviagte = useNavigate();
  return (
    <div className="service-card" style={{ background: `url(${cardImage})` }}>
      <div className="card-title">
        <h1 className="title-text">Internet cafe</h1>
        <div className="card-link">
          <h2 onClick={() => naviagte(`/services/${title}`)}>View Service</h2>
          <RightArrow className="right-arrow" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
