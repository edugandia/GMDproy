import React, { useState } from "react";
import "./Header.scss";
import ReactPlayer from "react-player";

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <header className="header-container">
      <div onClick={() => setIsPlaying(!isPlaying)} className="video-container">
        <ReactPlayer
          url="./images/video/gomad_panoramico.mp4"
          playing={isPlaying}
          muted={true}
          width="100%"
          height="100%"
          loop={true}
        />
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
