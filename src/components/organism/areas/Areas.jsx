import React from "react";
import "./Areas.scss";
import Carousel from "../../molecules/carousel";
import infoAreasJSON from "../../../data/infoAreas";

const Areas = () => {
  return (
    <section id="areas-container">
      <Carousel infoJSON={infoAreasJSON} />
    </section>
  );
};

export default Areas;
