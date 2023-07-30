import React from "react";
import "./Pagination.css";
import { ReactComponent as NextArrow } from "../../../Assets/icons/next-arrow.svg";
import { ReactComponent as PrvsArrow } from "../../../Assets/icons/prvs-arrow.svg";
const Pagination = ({ total, active, onPageChange }) => {
  let pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className="pagination">
      {active > 1 && (
        <button
          className="arrow-button"
          onClick={() => onPageChange(active - 1)}
        >
          <PrvsArrow />
        </button>
      )}

      {pages.map((page) => (
        <button
          key={page}
          className={`page-button ${page === active ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {active < total && (
        <button
          className="arrow-button"
          onClick={() => onPageChange(active + 1)}
        >
          <NextArrow />
        </button>
      )}
    </div>
  );
};

export default Pagination;
