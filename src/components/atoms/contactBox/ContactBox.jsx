import React from "react";
import "./ContactBox.scss";

const ContactBox = props => {
  const { name, link, target } = props;
  return (
    <div className="contact-box-container">
      {props.hasModal ? (
        <div onClick={props.modalToggle}>
          <p>{name}</p>
        </div>
      ) : (
        <a href={link} target={target}>
          <p>{name}</p>
        </a>
      )}
    </div>
  );
};

export default ContactBox;
