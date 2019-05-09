import React from "react";
import "./TabSelector.scss";

const TabSelector = props => {
  const { infoJSON, idProduct } = props;

  return (
    <div className="tab-selector">
      {infoJSON.map((tab, i) => {
        return (
          <div
            onClick={() => props.idProductHandle(i)}
            className={`tab ${idProduct === i && "active-tab"}`}
            key={i}
          >
            <h4>
              <span>{tab.title}</span>
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default TabSelector;
