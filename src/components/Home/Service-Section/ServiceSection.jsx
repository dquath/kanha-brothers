import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServiceSection.css";

import React, { useEffect, useState } from "react";

import HomepageServiceCard from "../HomePage-Service-Card/HomepageServiceCard";
import ServiceCard from "../../common/Service-Card/ServiceCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const ServiceSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="service-section">
      <div className="top-section">
        <h1 className="header">Services we offer</h1>
        <button onClick={() => navigate("/services")}>See all</button>
      </div>
      <div className="bottom-section">
        {isMobile ? (
          <Slider {...settings} className="service-card-carousel">
            <div>
              <HomepageServiceCard />
            </div>
            <div>
              <HomepageServiceCard />
            </div>
            <div>
              <HomepageServiceCard />
            </div>
          </Slider>
        ) : (
          <div className="service-cards">
            <ServiceCard type="services" />
            <ServiceCard type="services" />
            <ServiceCard type="services" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceSection;
