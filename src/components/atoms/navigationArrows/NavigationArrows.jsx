import React from "react";
import "./NavigationArrows.scss";

const NavigationArrows = props => {
  const { position, lastPosition } = props;

  return (
    <div className="navigation-arrows">
      <div className="arrow">
        <img
          onClick={props.decrementPosition}
          className={position === 0 && "disappear"}
          src="./images/arrow-left.png"
          alt="left-arrow"
        />
      </div>
      <div className="arrow">
        <img
          onClick={props.incrementPosition}
          className={position === lastPosition ? "disappear" : ""}
          src="./images/arrow-right.png"
          alt="right-arrow"
        />
      </div>
    </div>
  );
};

export default NavigationArrows;
