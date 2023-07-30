import React from "react";
import ProductHeader from "../../components/Product/Product-Header/ProductHeader";
import AllProducts from "../../components/Product/All-Products/AllProducts";

const Product = () => {
  return (
    <div className="products">
      <ProductHeader />
      <AllProducts />
    </div>
  );
};

export default Product;
