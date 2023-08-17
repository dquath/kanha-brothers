import "./ServiceCard.css";

import { Link } from "react-router-dom";
import React from "react";
import { ReactComponent as RightArrow } from "../../../Assets/icons/right-arrow-white.svg";

const ServiceCard = ({ title, type, image, subTitle }) => {
  let path;

  if (type === "services") {
    path = `/services/${title}`;
  } else if (type === "products") {
    path = `/products/${title}`;
  }
  return (
    <Link
      to={{
        pathname: path,
        state: { subtitle: subTitle },
      }}
      style={{ textDecoration: "none", width: "100%" }}
    >
      <div className="service-card" style={{ background: `url(${image})` }}>
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
