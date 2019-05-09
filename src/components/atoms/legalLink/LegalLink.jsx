import React from "react";
import { Link } from "react-router-dom";
import "./LegalLink.scss";

const LegalLink = () => {
  return (
    <div className="legal-link-container">
      <Link to="/aviso-legal">AVISO LEGAL / PRIVACIDAD / COOKIES</Link>
    </div>
  );
};

export default LegalLink;
