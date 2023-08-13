import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./SingleService.css";
import SingleServiceCard from "../../../../components/common/Single-Service-Card/SingleServiceCard";
import SingleServiceHeader from "../../../../components/Service/Single-Service-Header/SingleServiceHeader";
import Pagination from "../../../../components/common/Pagination/Pagination";
const SingleService = () => {
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
          "https://kanhna-brothers-website.onrender.com/api/services/categories/all-Categories"
        );
        const allCategoriesData = await allCategoriesResponse.json();
        setAllCategories(allCategoriesData);

        const categoryResponse = await fetch(
          `https://kanhna-brothers-website.onrender.com/api/service/catagory/${title}`
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

  const handlePageChange = (page) => {
    setActivePage(page);
    console.log(`Changed to page ${page}`);
  };
  function getSubTitleByTitle(title) {
    const foundItem = allCategories.find((item) => item.Tittle === title);
    return foundItem ? foundItem.Sub_tittle : null; // Return null if title not found in array
  }

  return (
    <div className="single-service">
      <SingleServiceHeader title={title} subTitle={getSubTitleByTitle(title)} />
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

export default SingleService;
