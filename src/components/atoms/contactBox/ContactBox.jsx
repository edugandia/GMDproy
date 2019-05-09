import React from "react";
import "./ContactBox.scss";

const ContactBox = props => {
  const { name, link, target } = props;
  return (
    <div className="contact-box-container">
      <a href={link} target={target}>
        {name}
      </a>
    </div>
  );
};

export default ContactBox;
