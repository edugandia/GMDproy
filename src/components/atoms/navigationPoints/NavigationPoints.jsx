import React from "react";
import "./NavigationPoints.scss";

const NavigationPoints = props => {
  const { position, lastPosition } = props;

  const pointPainter = () => {
    const points = [];
    for (let i = 0; i < lastPosition + 1; i++) {
      points.push(
        <div
          onClick={() => props.handlePosition(i)}
          className={`point ${position === i && "active"}`}
        />
      );
    }
    return points;
  };

  return <div className="navigation-points-container">{pointPainter()}</div>;
};

export default NavigationPoints;
