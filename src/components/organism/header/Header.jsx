import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <div className="video-container">
        <iframe src="" frameBorder="0" />
      </div>
      <div className="text-container">
        <div className="title">
          <h2>Invierte en</h2>
          <h1>Madrid</h1>
        </div>
        <div className="separator-bar" />
        <div className="text">
          <h3>Titular</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            nam, similique asperiores et cum mollitia sapiente ipsam eligendi
            magni earum obcaecati cupiditate maxime! Architecto rem voluptas
            nihil minus labore illo!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
