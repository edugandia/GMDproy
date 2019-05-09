import React, { useState } from "react";
import "./NavBar.scss";
import NavLinks from "../../atoms/navLinks";

const NavBar = () => {
  const navBarInfo = [
    { title: "NUESTRAS ZONAS", scrollLink: "areas-container" },
    { title: "¿QUÉ OFRECEMOS?", scrollLink: "products-container" },
    { title: "CONTACTO", scrollLink: "footer-container" }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const isOpenHandle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-box">
        <div className="logo-container">
          <img src="./images/logogomad.png" alt="logo" />
        </div>
        <div className="links-container">
          {navBarInfo.map((info, i) => (
            <NavLinks
              title={info.title}
              scrollLink={info.scrollLink}
              isMobile={false}
              key={i}
            />
          ))}
        </div>
        <div onClick={isOpenHandle} className="dropdown-button">
          <img src="./images/menu.png" alt="menu-icon" />
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-mobile slit-in-horizontal">
          {navBarInfo.map((info, i) => (
            <div className="link-box" key={i}>
              <NavLinks
                title={info.title}
                scrollLink={info.scrollLink}
                isMobile={true}
                isOpenHandle={isOpenHandle}
              />
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
