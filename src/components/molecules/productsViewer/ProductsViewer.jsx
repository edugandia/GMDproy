import React, { useState } from "react";
import "./ProductsViewer.scss";
import TabSelector from "../../atoms/tabSelector";

const ProductsViewer = props => {
  const [idProduct, setIdProduct] = useState(0);
  const infoJSON = props.infoJSON;

  const idProductHandle = id => {
    setIdProduct(id);
  };

  return (
    <div className="products-viewer-container">
      <div className="frame-container">
        <div className="image-container">
          <img
            src={infoJSON[idProduct].image}
            alt={infoJSON[idProduct].title}
          />
        </div>
      </div>
      <div className="text-container">
        <TabSelector
          infoJSON={infoJSON}
          idProduct={idProduct}
          idProductHandle={idProductHandle}
        />
        <div className="text">
          <div className="description">{infoJSON[idProduct].description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsViewer;
