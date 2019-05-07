import React from "react";
import "./TabSelector.scss";

const TabSelector = props => {
  const { infoJSON, idProduct } = props;

  return (
    <div>
      {infoJSON.map((tag, i) => {
        return (
          <div
            onClick={() => props.idProductHandle(i)}
            className={`tag ${idProduct === i && "active-tag"}`}
            key={i}
          >
            {tag.title}
          </div>
        );
      })}
    </div>
  );
};

export default TabSelector;
