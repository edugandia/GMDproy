import React, { useState } from "react";
import "./Contact.scss";
import ContactBox from "../../atoms/contactBox";
import ContactModal from "../contactModal";

const Contact = () => {
  const contactInfo = [
    {
      name: "¿Quieres más información?",
      hasModal: true
    },
    {
      name: "+34 567 897 567",
      hasModal: false,
      link: "tel:+34567897567",
      target: "_blank"
    },
    {
      name: "C/ Santa Isabel, 5 (Madrid)",
      hasModal: false,
      link: "http://www.google.com/maps/place/pisuerga+33+madrid",
      target: "_blank"
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="contact-container">
      <ContactModal isModalOpen={isModalOpen} modalToggle={modalToggle} />
      <h4>CONTACTA</h4>
      {contactInfo.map((element, i) => {
        return (
          <ContactBox
            name={element.name}
            link={element.link}
            target={element.target}
            hasModal={element.hasModal}
            key={i}
            modalToggle={modalToggle}
          />
        );
      })}
    </div>
  );
};

export default Contact;
