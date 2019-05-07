import React from "react";
import ScrollToId from "../../../utils/ScrollToId";

const NavLinks = props => {
  return (
    <div onClick={() => ScrollToId(props.scrollLink)}>
      <h5>{props.title}</h5>
    </div>
  );
};

export default NavLinks;
