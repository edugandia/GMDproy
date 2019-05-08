import React from "react";
import "./Postcards.scss";
import Carousel from "../../molecules/carousel";
import PostcardJSON from "../../../data/infoPostcards.json";

const Postcards = () => {
  return (
    <section className="postcards-container">
      <Carousel infoJSON={PostcardJSON} />
    </section>
  );
};

export default Postcards;
