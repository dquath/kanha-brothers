import React, { useState, useEffect } from "react";
import "./ServiceSection.css";
import ServiceCard from "../../common/Service-Card/ServiceCard";
import HomepageServiceCard from "../HomePage-Service-Card/HomepageServiceCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
const ServiceSection = () => {
  const [isMobile, setIsMobile] = useState(false);

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
  return (
    <div className="service-section">
      <div className="top-section">
        <h1 className="header">Services we offer</h1>
        <button>See all</button>
      </div>
      <div className="bottom-section">
        {isMobile ? (
          <Splide className="service-card-carousel">
            <SplideSlide>
              <HomepageServiceCard />
            </SplideSlide>
            <SplideSlide>
              <HomepageServiceCard />
            </SplideSlide>
            <SplideSlide>
              <HomepageServiceCard />
            </SplideSlide>
          </Splide>
        ) : (
          <div className="service-cards">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceSection;
