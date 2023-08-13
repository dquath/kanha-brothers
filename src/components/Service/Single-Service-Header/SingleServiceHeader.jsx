import React from "react";
import "./SingleServiceHeader.css";
const SingleServiceHeader = ({ title, subTitle }) => {
  return (
    <div className="single-service-header">
      <h1 className="single-service-heading">{title}</h1>
      <p className="single-service-description">{subTitle}</p>
    </div>
  );
};

export default SingleServiceHeader;
