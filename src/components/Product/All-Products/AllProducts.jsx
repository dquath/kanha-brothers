import React, { useState, useEffect } from "react";
import ServiceCard from "../../common/Service-Card/ServiceCard";
const AllProducts = () => {
  const [productCategories, setProductCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productCategoriesResponse = await fetch(
          "https://kanhna-brothers-website.onrender.com/api/products/categories/allProductCategories"
        );
        const productCategoriesData = await productCategoriesResponse.json();
        setProductCategories(productCategoriesData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="our-services">
      <h2>Our Products</h2>
      <div className="all-service-cards">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {" "}
            {productCategories.map((category) => (
              <ServiceCard
                key={category._id}
                title={category.Tittle}
                image={category.Image}
                type="products"
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
