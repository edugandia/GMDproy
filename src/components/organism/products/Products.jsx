import React from "react";
import "./Products.scss";
import ProductsViewer from "../../molecules/productsViewer";
import ProductsJSON from "../../../data/infoProducts";

const Products = () => {
  return (
    <section id="products-container">
      <div className="title">
        <h2>
          <span>¿Qué ofrecemos?</span>
        </h2>
      </div>
      <ProductsViewer infoJSON={ProductsJSON} />
    </section>
  );
};

export default Products;
