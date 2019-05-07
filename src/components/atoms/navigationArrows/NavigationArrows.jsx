import React from "react";
import "./NavigationArrows.scss";

const NavigationArrows = props => {
  const { position, lastPosition } = props;

  return (
    <div className="navigation-arrows">
      <div
        onClick={props.decrementPosition}
        className={`left-arrow ${position === 0 && "disappear"}`}
      >
        <img src="./images/arrow.png" alt="left-arrow" />
      </div>
      <div
        onClick={props.incrementPosition}
        className={`right-arrow ${position === lastPosition && "disappear"}`}
      >
        <img src="./images/arrow.png" alt="right-arrow" />
      </div>
    </div>
  );
};

export default NavigationArrows;
