import React from "react";
import "./ContactModal.scss";
import ContactForm from "../contactForm";

const ContactModal = props => {
  return (
    <div
      className={`modal-form-container ${props.isModalOpen && "show-modal"}`}
    >
      <ContactForm modalToggle={props.modalToggle} />
    </div>
  );
};

export default ContactModal;
