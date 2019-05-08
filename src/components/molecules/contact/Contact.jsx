import React from "react";
import ContactBox from "../../atoms/contactBox";

const Contact = props => {
  const { contactInfo } = props;

  return (
    <div>
      <h4>CONTACTA</h4>
      {contactInfo.map((element, i) => {
        return (
          <ContactBox
            name={element.name}
            link={element.link}
            target={element.target}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Contact;
