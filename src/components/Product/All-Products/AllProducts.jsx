import React from "react";
import ServiceCard from "../../common/Service-Card/ServiceCard";
const AllProducts = () => {
  return (
    <div className="our-services">
      <h2>Our Products</h2>
      <div className="all-service-cards">
        <ServiceCard title={"Printing"} type="products" />
        <ServiceCard type="products" />
        <ServiceCard type="products" />
        <ServiceCard type="products" />
        <ServiceCard type="products" />
        <ServiceCard type="products" />
      </div>
    </div>
  );
};

export default AllProducts;
