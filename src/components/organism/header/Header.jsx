import React, { useState, useEffect } from "react";
import "./Header.scss";
import ReactPlayer from "react-player";

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    mobileDeviceDetector();
  });

  const mobileDeviceDetector = () => {
    const currentWidth = window.innerWidth;
    currentWidth < 1025 && setIsMobile(true);
  };

  return (
    <header className="header-container">
      <div onClick={() => setIsPlaying(!isPlaying)} className="video-container">
        <ReactPlayer
          url={
            isMobile
              ? "http://gomadinvestment.com/videos/Gomad_video.mp4"
              : "http://gomadinvestment.com/videos/gomad_panoramico.mp4"
          }
          playing={isPlaying}
          muted={true}
          width="100%"
          height="100%"
          onEnded={() => setIsPlaying(false)}
        />
      </div>
      <div className="text-container">
        <div className="title">
          <h2>Invierte en</h2>
          <h1>Madrid</h1>
        </div>
        <div className="separator-bar" />
        <div className="text">
          <h3>
            <span>Titular</span>
          </h3>
          <p>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae nam, similique asperiores et cum mollitia sapiente
              ipsam eligendi magni earum obcaecati cupiditate maxime! Architecto
              rem voluptas nihil minus labore illo!
            </span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
