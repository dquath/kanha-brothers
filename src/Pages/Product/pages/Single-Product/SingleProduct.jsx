import { React, useEffect, useState } from "react";

import Pagination from "../../../../components/common/Pagination/Pagination";
import SingleProductHeader from "../../../../components/Product/Single-Product-Header/SingleProductHeader";
import SingleServiceCard from "../../../../components/common/Single-Service-Card/SingleServiceCard";
import { useParams } from "react-router-dom";
const SingleProduct = () => {
  const [activePage, setActivePage] = useState(1);
  const { title } = useParams();
  const [allCategories, setAllCategories] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(categoryData.length / ITEMS_PER_PAGE);
  const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedItems = categoryData.slice(startIndex, endIndex);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allCategoriesResponse = await fetch(
          "https://kanhna-brothers-website.onrender.com/api/products/categories/allProductCategories"
        );
        const allCategoriesData = await allCategoriesResponse.json();
        setAllCategories(allCategoriesData);

        const categoryResponse = await fetch(
          `https://kanhna-brothers-website.onrender.com/api/product/catagory/${title}`
        );
        const categoryData = await categoryResponse.json();
        setCategoryData(categoryData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  function getSubTitleByTitle(title) {
    const foundItem = allCategories.find((item) => item.Tittle === title);
    return foundItem ? foundItem.Sub_tittle : null; // Return null if title not found in array
  }
  const handlePageChange = (page) => {
    setActivePage(page);
    console.log(`Changed to page ${page}`);
  };
  return (
    <div className="single-service">
      <SingleProductHeader title={title} subTitle={getSubTitleByTitle(title)} />

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="service-card-section">
            {displayedItems.map((category) => (
              <SingleServiceCard
                key={category._id}
                title={category.Tittle}
                image={category.Image}
                description={category.Sub_tittle}
              />
            ))}
          </div>
          <div className="pagination-container">
            {totalPages > 1 && (
              <Pagination
                total={totalPages}
                active={activePage}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
