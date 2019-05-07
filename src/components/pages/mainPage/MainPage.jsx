import React from "react";
import NavBar from "../../organism/navBar";
import Header from "../../organism/header";
import Areas from "../../organism/areas";
import Products from "../../organism/products";
import Postcards from "../../organism/postcards";
import Footer from "../../organism/footer";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Areas />
      <Products />
      <Postcards />
      <Footer />
    </div>
  );
};

export default MainPage;
