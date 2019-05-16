import React from "react";
import "./Footer.scss";
import Contact from "../../molecules/contact";
import LegalLink from "../../atoms/legalLink";

const Footer = () => {
  
  return (
    <section className="footer">
      <Contact />
      <LegalLink />
    </section>
  );
};

export default Footer;
