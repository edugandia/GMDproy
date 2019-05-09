import React, { useState } from "react";
import "./Carousel.scss";
import NavigationArrows from "../../atoms/navigationArrows";
import NavigationPoints from "../../atoms/navigationPoints";
import DownloadIcon from "../../atoms/downloadIcon";

const Carousel = props => {
  const [position, setPosition] = useState(0);
  const infoJSON = props.infoJSON;
  const lastPosition = props.infoJSON.length - 1;

  const incrementPosition = () => {
    setPosition(position => {
      if (position === lastPosition) {
        return (position = 0);
      } else {
        return position + 1;
      }
    });
  };

  const decrementPosition = () => {
    setPosition(position => {
      if (position === 0) {
        return (position = lastPosition);
      } else {
        return position - 1;
      }
    });
  };

  const handlePosition = position => {
    setPosition(position);
  };

  return (
    <div className="carousel-container">
      <NavigationArrows
        position={position}
        lastPosition={lastPosition}
        incrementPosition={incrementPosition}
        decrementPosition={decrementPosition}
      />
      <div className="text">
        <h3>
          <span>{infoJSON[position].title}</span>
        </h3>
        <p>
          <span>{infoJSON[position].description}</span>
        </p>
      </div>
      <NavigationPoints
        position={position}
        lastPosition={lastPosition}
        handlePosition={handlePosition}
      />
      <div className="image-container">
        <img src={infoJSON[position].images} alt={infoJSON[position].title} />
      </div>
      {infoJSON[position].hasDownload && (
        <DownloadIcon linkDownload={infoJSON[position].downloadUrl} />
      )}
    </div>
  );
};

export default Carousel;
