import React from "react";
import "./NavBar.scss";
import NavLinks from "../../atoms/navLinks";

const NavBar = () => {
  const navBarInfo = [
    { title: "NUESTRAS ZONAS", scrollLink: "areas-container" },
    { title: "¿QUÉ OFRECEMOS?", scrollLink: "products-container" },
    { title: "CONTACTO", scrollLink: "footer-container" }
  ];

  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img src="./images/logo-icon.png" alt="logo" />
      </div>
      <div className="links-container">
        {navBarInfo.map((info, i) => (
          <NavLinks title={info.title} scrollLink={info.scrollLink} key={i} />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
