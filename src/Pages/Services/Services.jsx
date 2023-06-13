import React from "react";
import "./Services.css";
import ServiceHeader from "../../components/Service/Service-Header/ServiceHeader";
import OurServices from "../../components/Service/Our-Services/OurServices";

const Services = () => {
  return (
    <div className="services">
      <ServiceHeader />
      <OurServices />
    </div>
  );
};

export default Services;
