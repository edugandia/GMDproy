import React from "react";
import "./Footer.scss";
import Contact from "../../molecules/contact";
import LegalLink from "../../atoms/legalLink";

const Footer = () => {
  const contactInfo = [
    {
      name: "hola@gomad.com",
      link: "mailto:hola@gomad.com?Subject=Hello%20again",
      target: "_top"
    },
    { name: "+34 567 897 567", link: "tel:+34567897567", target: "_blank" },
    {
      name: "C/ Santa Isabel, 5 (Madrid)",
      link: "http://www.google.com/maps/place/pisuerga+33+madrid",
      target: "_blank"
    }
  ];

  return (
    <section>
      <Contact contactInfo={contactInfo} />
      <LegalLink />
    </section>
  );
};

export default Footer;
