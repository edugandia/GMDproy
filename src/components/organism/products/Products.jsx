import React from "react";
import "./Products.scss";
import ProductsViewer from "../../molecules/productsViewer";
import ProductsJSON from "../../../data/infoProducts";

const Products = () => {
  return (
    <section>
      <div className="title">
        <h2>¿Qué ofrecemos?</h2>
      </div>
      <ProductsViewer infoJSON={ProductsJSON} />
    </section>
  );
};

export default Products;
