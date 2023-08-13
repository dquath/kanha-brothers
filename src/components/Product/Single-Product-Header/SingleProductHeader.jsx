import React from "react";

const SingleProductHeader = ({ title, subTitle }) => {
  return (
    <div className="single-service-header">
      <h1 className="single-service-heading">{title}</h1>
      <p className="single-service-description">{subTitle}</p>
    </div>
  );
};

export default SingleProductHeader;
