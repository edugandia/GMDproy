import React from "react";
import ScrollToId from "../../../utils/ScrollToId";
import './NavLinks.scss';

const NavLinks = props => {
  return (
    <div
      onClick={() => {
        ScrollToId(props.scrollLink);
        props.isOpenHandle && props.isOpenHandle();
      }}
      className="nav-links"
    >
      <h5>{props.title}</h5>
    </div>
  );
};

export default NavLinks;
