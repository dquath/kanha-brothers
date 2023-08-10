import React, { useState } from "react";

import Pagination from "../../../../components/common/Pagination/Pagination";
import SingleProductHeader from "../../../../components/Product/Single-Product-Header/SingleProductHeader";
import SingleServiceCard from "../../../../components/common/Single-Service-Card/SingleServiceCard";
const SingleProduct = () => {
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (page) => {
    setActivePage(page);
    console.log(`Changed to page ${page}`);
  };
  return (
    <div className="single-service">
      <SingleProductHeader />
      <div className="service-card-section">
        <SingleServiceCard
          image="https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Your Product Title"
          description="Your product description goes here."
        />
        <SingleServiceCard
          image="https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Your Product Title"
          description="Your product description goes here."
        />
        <SingleServiceCard
          image="https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Your Product Title"
          description="Your product description goes here."
        />
        <SingleServiceCard
          image="https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Your Product Title"
          description="Your product description goes here."
        />
        <SingleServiceCard
          image="https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Your Product Title"
          description="Your product description goes here."
        />
        <SingleServiceCard
          image="https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Your Product Title"
          description="Your product description goes here."
        />
      </div>
      <div className="pagination-container">
        <Pagination
          total={3}
          active={activePage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
