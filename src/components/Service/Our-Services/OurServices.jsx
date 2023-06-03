import React from "react";
import "./OurServices.css";
import ServiceCard from "../../common/Service-Card/ServiceCard";
const OurServices = () => {
  return (
    <div className="our-services">
      <h2>Our Services</h2>
      <div className="all-service-cards">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default OurServices;
