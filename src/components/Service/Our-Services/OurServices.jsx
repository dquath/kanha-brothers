import "./OurServices.css";

import React, { useState, useEffect } from "react";
import ServiceCard from "../../common/Service-Card/ServiceCard";

const OurServices = () => {
  const [serviceCategories, setServiceCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://kanhna-brothers-website.onrender.com/api/services/categories/all-Categories"
    )
      .then((response) => response.json())
      .then((data) => {
        setServiceCategories(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching service categories:", error);
      });
  }, []);
  return (
    <div className="our-services">
      <h2>Our Services</h2>
      <div className="all-service-cards">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {" "}
            {serviceCategories.map((category) => (
              <ServiceCard
                key={category._id}
                title={category.Tittle}
                image={category.Image}
                type="services"
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default OurServices;
