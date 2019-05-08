import React from "react";

const ContactBox = props => {
  const { name, link, target } = props;
  return (
    <div>
      <a href={link} target={target}>
        {name}
      </a>
    </div>
  );
};

export default ContactBox;
