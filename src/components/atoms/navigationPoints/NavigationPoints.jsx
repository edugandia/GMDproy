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
          key={i}
        />
      );
    }
    return points;
  };

  return (
    <div className="navigation-points-container">
      <div className="points-container">{pointPainter()}</div>
    </div>
  );
};

export default NavigationPoints;
