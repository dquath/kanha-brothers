import "./OurServices.css";

import React from "react";
import ServiceCard from "../../common/Service-Card/ServiceCard";

const OurServices = () => {
  return (
    <div className="our-services">
      <h2>Our Services</h2>
      <div className="all-service-cards">
        <ServiceCard title={"Printing"} type="services" />
        <ServiceCard type="services" />
        <ServiceCard type="services" />
        <ServiceCard type="services" />
        <ServiceCard type="services" />
        <ServiceCard type="services" />
      </div>
    </div>
  );
};

export default OurServices;
